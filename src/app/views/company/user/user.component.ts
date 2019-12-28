import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';

import { PaginationDao } from '../../../models/pagination-dao';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../models/user';
import { ListApi } from 'src/app/models/api/list-api';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { RestApi } from 'src/app/models/api/rest-api';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  displayedColumns = ['pic', 'firstname', 'email', 'contactno', 'status', 'actions'];
  exampleDatabase: PaginationDao | null;
  data: User[] = [];

  dataSource: any;
  api = new ListApi();
  restApi = new RestApi();
  resultsLength = 0;
  pageSize = 5;
  isLoadingResults = true;
  isRateLimitReached = false;
  url = 'assets/images/myuser.png';

  societyId: number = 0;
  profilepic: any

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  constructor(public httpClient: HttpClient,
    public tokenStorageService: TokenStorageService) {
    this.profilepic = this.restApi.SOCIETYUSERPIC_URL;
    let society = this.tokenStorageService.getSociety();
    if (society) {
      this.societyId = society.id;
    }
  }

  ngOnInit() {
    this.loadData();
  }

  refresh() {
    this.loadData();
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  public loadData() {
    this.exampleDatabase = new PaginationDao(this.httpClient);
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getListByCompanyId(`${this.api.SOCIETY_USER_LIST}/${this.societyId}`,
            this.sort.active, this.sort.direction, this.paginator.pageIndex, this.paginator.pageSize);
        }),
        map(data => {
          // Flip flag to show that loading has finished.
          this.isLoadingResults = false;
          this.isRateLimitReached = false;
          this.resultsLength = data.totalElements;
          this.pageSize = data.size;
          return data.content;
        }),
        catchError(() => {
          this.isLoadingResults = false;
          // Catch if the REST API has reached its rate limit. Return empty data.
          this.isRateLimitReached = true;
          return observableOf([]);
        })
      ).subscribe(data => {
        this.data = data;
        this.dataSource = new MatTableDataSource(this.data);
      });
  }

}
