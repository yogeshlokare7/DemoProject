import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource } from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';

import { PaginationDao } from '../../../models/pagination-dao';
import { Company } from '../../../models/company';
import { environment } from '../../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { CompanyService } from '../../../services/company.service';
import { Society } from 'src/app/models/society';
import { ActivatedRoute } from '@angular/router';
import { ListApi } from 'src/app/models/api/list-api';



@Component({
  selector: 'app-company',
  templateUrl: './company.component.html',
  styleUrls: ['./company.component.css']
})
export class CompanyComponent implements OnInit {

  displayedColumns = ['pic', 'societyName', 'contactNo', 'email', 'addressOne', 'status', 'societyCode', 'actions'];
  exampleDatabase: PaginationDao | null;
  data: Society[] = [];

  dataSource:any;
  api = new ListApi();
  resultsLength = 0;
  pageSize = 5;
  isLoadingResults = true;
  isRateLimitReached = false;
  url = 'assets/images/myuser.png';

  constructor(public httpClient: HttpClient,
    private route:ActivatedRoute,
    public societyService: CompanyService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

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
          return this.exampleDatabase!.getListByCompanyId(`${this.api.SOCIETY_LIST}`,
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
