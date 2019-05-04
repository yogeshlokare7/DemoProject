import { CreateSalesOrderComponent } from './sales-order/create-sales-order/create-sales-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyUserComponent } from './company-user/company-user.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PackagesComponent } from './packages/packages.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { AddUserComponent } from './company-user/add-user/add-user.component';
import { RowMaterialComponent } from './row-material/row-material.component';

const routes: Routes = [
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch : 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Home', breadcrumb: 'Home'}
  },
  {
    path: 'users',
    component: CompanyUserComponent,
    data: { title: 'Users', breadcrumb: 'Users'}
  },
  {
    path: 'users/add',
    component: AddUserComponent,
    data: { title: 'Add Users', breadcrumb: 'Add Users'}
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: { title: 'Customers', breadcrumb: 'Customers'}
  },
  {
    path: 'vendors',
    component: VendorsComponent,
    data: { title: 'Vendors', breadcrumb: 'Vendors'}
  },
  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Products', breadcrumb: 'Products'}
  },
  {
    path: 'items',
    component: ItemsComponent,
    data: { title: 'Items', breadcrumb: 'Items'}
  },
  {
    path: 'sales',
    component: SalesOrderComponent,
    data: { title: 'Sales', breadcrumb: 'Sales'}
  },
  {
    path: 'sales/add',
    component: CreateSalesOrderComponent,
    data: { title: 'Create SO', breadcrumb: 'Create Sales Order'}
  },
  {
    path: 'raw-material',
    component: RowMaterialComponent,
    data: { title: 'Row Material', breadcrumb: 'Row Material'}
  },
  {
    path: 'purchase',
    component: PurchaseOrderComponent,
    data: { title: 'Purchase', breadcrumb: 'Purchase'}
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    data: { title: 'Invoices', breadcrumb: 'Invoices'}
  },
  {
    path: 'packages',
    component: PackagesComponent,
    data: { title: 'Packages', breadcrumb: 'Packages'}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
