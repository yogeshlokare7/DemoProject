import { Component, OnInit, ViewChild } from '@angular/core';
import { PaginationDao } from 'src/app/models/pagination-dao';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { MatPaginator, MatSort, MatTable, MatTableDataSource, MatDialogActions, MatDialog } from '@angular/material';
import { merge, of as observableOf } from 'rxjs';
import { catchError, map, startWith, switchMap } from 'rxjs/operators';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { Product } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';
import { AddRowMaterialComponent } from './add-rowmaterial/add-rowmaterial.component';

@Component({
  selector: 'app-row-material',
  templateUrl: './row-material.component.html',
  styleUrls: ['./row-material.component.css']
})
export class RowMaterialComponent implements OnInit {

  displayedColumns = [
    'materialId',
    'materialName',
    'unit',
    'price',
    'openingStock',
    'reorderLevel',
    'status',
    'actions'
  ];
  exampleDatabase: PaginationDao | null;
  data: Product[] = [];

  dataSource: any;
  api = environment.baseUrl;
  resultsLength = 0;
  pageSize = 5;
  isLoadingResults = true;
  isRateLimitReached = false;
  cmpId: number;

  constructor(public httpClient: HttpClient,
    private tokenService: TokenStorageService,
    private dialog: MatDialog,
    public customerService: ProductService) { }

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
          return this.exampleDatabase!.getListByCompanyId(`${this.api}/api/material/list/${this.cmpId}`,
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

  addMaterial(): void {
    let dialogRef = this.dialog.open(AddRowMaterialComponent, {
      data: { material: null }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if (result) {
        this.refresh();
      }
    });
  }

  editMaterial(tableRow: Product): void {
    let dialogRef = this.dialog.open(AddRowMaterialComponent, {
      data: { material: tableRow }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed' + result);
      if (result) {
        this.refresh();
      }
    });
  }

}


