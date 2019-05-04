import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationDao } from 'src/app/models/pagination-dao';
import { Vendor } from 'src/app/models/vendor';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { VendorService } from 'src/app/services/vendor.service';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialog } from '@angular/material';
import {merge, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { AddVendorComponent } from './add-vendor/add-vendor.component';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  displayedColumns = ['firstname', 'contactno', 'emailid', 'billstreetno', 'actions'];
  exampleDatabase: PaginationDao | null;
  data: Vendor[] = [];

  dataSource:any;
  api = environment.baseUrl;
  resultsLength = 0;
  pageSize = 5;
  isLoadingResults = true;
  isRateLimitReached = false;
  cmpId :number;

  constructor(public httpClient: HttpClient,
    private tokenService:TokenStorageService,
    private dialog:MatDialog,
    public vendorService: VendorService) { }

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  @ViewChild(MatTable) table: MatTable<any>;

  ngOnInit() {
    this.cmpId = this.tokenService.getCompanyId();
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
          return this.exampleDatabase!.getListByCompanyId(`${this.api}/api/vendor/list/${this.cmpId}`,
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

  addVendor(): void {
    let dialogRef = this.dialog.open(AddVendorComponent, {
      data: {vendor : null }
    });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
       if(result){
        this.refresh();
      }
    });
  }

  editVendor(vendorRow: Vendor): void{
    let dialogRef = this.dialog.open(AddVendorComponent, {
      data: { vendor : vendorRow }
    });
     dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed'+result);
       if(result){
        this.refresh();
      }
    });
  }

}

