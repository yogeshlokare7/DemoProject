import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import { PaginationDao } from '../../../models/pagination-dao';
import { DailyStaff } from '../../../models/daily-staff';
import { ListApi } from 'src/app/models/api/list-api';
import { HttpClient } from '@angular/common/http';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { ConfirmDialogComponent } from '../confirm-dialog/confirm-dialog.component';
import { DailyStaffService } from 'src/app/services/daily-staff.service';


@Component({
  selector: 'app-daily-staff',
  templateUrl: './daily-staff.component.html',
  styleUrls: ['./daily-staff.component.css']
})
export class DailyStaffComponent implements OnInit {
  displayedColumns = ['pic','firstname', 'email', 'gender', 'contactno', 'status', 'actions'];
  exampleDatabase: PaginationDao | null;
  data: DailyStaff[] = [];

  dataSource:any;
  api = new ListApi;
  resultsLength = 0;
  pageSize = 5;
  isLoadingResults = true;
  isRateLimitReached = false;
  url = 'assets/images/myuser.png';

  constructor(public httpClient: HttpClient,
    public dailystaffService: DailyStaffService,
    public dialog: MatDialog) { }

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

  view(id: number) {

  }
  deleteDailyStaff(id: number) {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {id: id}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.isLoadingResults = true;
        this.dailystaffService.deleteDailyStaff(id).subscribe(data=>{
          this.isLoadingResults = false;
          this.refresh();
        }, err=>{
          this.isLoadingResults = false;
        });
      }
    });
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
          return this.exampleDatabase!.getListByCompanyId(`${this.api.DAILYSTAFF_LIST}`,
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
