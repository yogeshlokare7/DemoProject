import {Component, OnInit, ViewChild} from '@angular/core';
import {MatPaginator, MatSort, MatDialog, MatTableDataSource, MatTable, MatMenuTrigger} from '@angular/material';
import {merge, Observable, of as observableOf} from 'rxjs';
import {catchError, map, startWith, switchMap} from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { PaginationDao } from 'src/app/models/pagination-dao';
import { Role } from 'src/app/models/role';
import { ListApi } from 'src/app/models/api/list-api';
import { RoleService } from 'src/app/services/role.service';
import { TbsmError } from 'src/app/models/tbsm-error';
import { AddRoleComponent } from './add-role/add-role.component';

@Component({
  selector: 'app-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.css']
})
export class RoleComponent implements OnInit {
  displayedColumns : string[] = ['name', 'description', 'status', 'actions'];
  exampleDatabase: PaginationDao | null;
  data: Role[] = [];

  dataSource:any;
  api = new ListApi();
  resultsLength = 0;
  pageSize = 5;
  isLoadingResults = true;
  isRateLimitReached = false;
  
  index: number;
  id: number;
  name:string;
  status:string; 
  loggedUser:string;
  tempObj = new Role();

  isCopied1: boolean = false;

  title: string = 'Confirm Dialog';
  @ViewChild(MatMenuTrigger) contextMenu: MatMenuTrigger;

  openContextMenu(event, roleObj:Role) {
    this.tempObj = roleObj;
    event.preventDefault(); // Suppress the browser's context menu
    this.contextMenu.openMenu(); // Open your custom context menu instead
  }

  isExpansionDetailRow = (i: number, row: Object) => row.hasOwnProperty('detailRow');
  expandedElement: any;
  experienceError:TbsmError;

  constructor(public httpClient: HttpClient,
    public dialog: MatDialog,
    public roleService: RoleService,
    private router:Router) { }

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

  addRoleDialog(): void {
    let dialogRef = this.dialog.open(AddRoleComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe(result => {
      if(result){
        this.refresh();
      }
    });
  }

  viewRole(roleObj : Role):void{
    this.id = roleObj.id;
    this.name = roleObj.name;
    this.title = roleObj.description;
    this.status=roleObj.status;
    const dialogRef = this.dialog.open(AddRoleComponent, {
      width: '350px',
      data: {id: this.id, role: this.name, description: this.title, status:this.status}
    });

    dialogRef.afterClosed().subscribe(result => {
    });
  }

  startEdit(role:Role) {
    let cloned = Object.assign({}, role);
    const dialogRef = this.dialog.open(AddRoleComponent, {
      width: '350px',
      data: { role : cloned}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.refresh();
      }
    });
  }

  /*deleteItem(i: number, id: number, title: string, type:string) {
    this.index = i;
    this.title = title;
    this.id = id;
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '350px',
      data: {id: id, title: title, type:type}
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.roleService.deleteRole(id).subscribe(data=>{
          this.experienceError = data;
          if(this.experienceError.errorCode!=null){
            this.toasterService.openErrorSnackBar("Sorry! You can't delete this role", "ok", 2000);
          }else{
            this.toasterService.openSuccessSnackBar("Successfully deleted", "ok", 1000);
            this.dataSource.data.splice(i, 1);
            this.dataSource = new MatTableDataSource<Element>(this.dataSource.data);
            this.table.renderRows();
            this.refresh();
          }
        })
      }
    });
  }*/

  public loadData() {
    this.exampleDatabase = new PaginationDao(this.httpClient);
    // If the user changes the sort order, reset back to the first page.
    this.sort.sortChange.subscribe(() => this.paginator.pageIndex = 0);
    merge(this.sort.sortChange, this.paginator.page)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isLoadingResults = true;
          return this.exampleDatabase!.getListByCompanyId(this.api.ROLE_LIST,
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
