import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationDao } from 'src/app/models/pagination-dao';
import { Customer } from 'src/app/models/customer';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { CustomerService } from 'src/app/services/customer.service';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialogActions, MatDialog } from '@angular/material';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { AddCustomerComponent } from './add-customer/add-customer.component';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  displayedColumns = ['firstname', 'contactno', 'emailid', 'billstreetno', 'actions'];
  exampleDatabase: PaginationDao | null;
  data: Customer[] = [];

  dataSource:any;
  api = environment.baseUrl;
  resultsLength = 0;
  pageSize = 5;
  isLoadingResults = true;
  isRateLimitReached = false;
  societyId :number = 0;

  constructor(public httpClient: HttpClient,
    private tokenService:TokenStorageService,
    private dialog:MatDialog,
    public customerService: CustomerService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit() {
    let society = this.tokenService.getSociety();
    if(society){
      this.societyId = society.id;
    }
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
          return this.exampleDatabase!.getListByCompanyId(`${this.api}/api/customer/list/${this.societyId}`,
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

  addCustomer(): void {
    let dialogRef = this.dialog.open(AddCustomerComponent, {
      data: {customer : null }
    });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
       if(result){
        this.refresh();
      }
    });
  }

  editCustomer(customerRow: Customer): void{
    let dialogRef = this.dialog.open(AddCustomerComponent, {
      data: { customer : customerRow }
    });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
       if(result){
        this.refresh();
      }
    });
  }

}
