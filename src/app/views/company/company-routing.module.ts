import { CreateSalesOrderComponent } from './sales-order/create-sales-order/create-sales-order.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyUserComponent } from './company-user/company-user.component';
import { CustomersComponent } from './customers/customers.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { PackagesComponent } from './packages/packages.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { RowMaterialComponent } from './row-material/row-material.component';
import { ResidentsComponent } from './residents/residents.component';
import { AddResidentComponent } from './residents/add-resident/add-resident.component';
import { DailyStaffComponent } from './daily-staff/daily-staff.component';
import { AddDailyStaffComponent } from './daily-staff/add-daily-staff/add-daily-staff.component';
import { CurrentPlanComponent } from './current-plan/current-plan.component';
import { QuotationRequestComponent } from './quotation-request/quotation-request.component';
import { UserComponent } from './user/user.component';
import { AddSecurityUserComponent } from './company-user/add-user/add-user.component';
import { AddUserComponent } from './user/add-user/add-user.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    data: { title: 'Home', breadcrumb: 'Home' }
  },
  {
    path: 'security-users',
    component: CompanyUserComponent,
    data: { title: 'Users', breadcrumb: 'Users' }

  },
  {
    path: 'security-users/add',
    component: AddSecurityUserComponent,
    data: { title: 'Add User', breadcrumb: 'Manage Security Users/ Add User', Submit: 'Submit' }
  },
  {
    path: 'security-users/view',
    component: AddSecurityUserComponent,
    data: { title: 'View User', breadcrumb: 'Manage Security Users/ View User', Submit: 'Submit' }
  },
  {
    path: 'security-users/update',
    component: AddSecurityUserComponent,
    data: { title: 'Update User', breadcrumb: 'Manage Security Users/ Update User', Submit: 'Submit' }
  },
  {
    path: 'customers',
    component: CustomersComponent,
    data: { title: 'Customers', breadcrumb: 'Customers' }
  },
  {
    path: 'daily-staff',
    component: DailyStaffComponent,
    data: { title: 'Daily Staff', breadcrumb: 'Daily Staff' }
  },
  {
    path: 'daily-staff/add',
    component: AddDailyStaffComponent,
    data: { title: 'Add Daily Staff', breadcrumb: 'Manage Daily Staff / Add Daily Staff', Submit: 'Submit' }
  },
  {
    path: 'daily-staff/view',
    component: AddDailyStaffComponent,
    data: { title: 'View Daily Staff', breadcrumb: 'Manage Daily Staff/ View Daily Staff', Submit: 'Submit' }
  },
  {
    path: 'daily-staff/update',
    component: AddDailyStaffComponent,
    data: { title: 'Update Daily Staff', breadcrumb: 'Manage Daily Staff/ Update Daily Staff', Submit: 'Submit' }
  },
  {
    path: 'currentplan',
    component: CurrentPlanComponent,
    data: { title: 'Current plan', breadcrumb: 'Manage Current Plan' }
  },
  {
    path: 'quotationrequest',
    component: QuotationRequestComponent,
    data: { title: 'Quotation Request', breadcrumb: 'Manage Quotation Request' }
  },

  {
    path: 'products',
    component: ProductsComponent,
    data: { title: 'Products', breadcrumb: 'Products' }
  },
  {
    path: 'items',
    component: ItemsComponent,
    data: { title: 'Items', breadcrumb: 'Items' }
  },
  {
    path: 'sales',
    component: SalesOrderComponent,
    data: { title: 'Sales', breadcrumb: 'Sales' }
  },
  {
    path: 'sales/add',
    component: CreateSalesOrderComponent,
    data: { title: 'Create SO', breadcrumb: 'Create Sales Order' }
  },
  {
    path: 'raw-material',
    component: RowMaterialComponent,
    data: { title: 'Row Material', breadcrumb: 'Row Material' }
  },
  {
    path: 'purchase',
    component: PurchaseOrderComponent,
    data: { title: 'Purchase', breadcrumb: 'Purchase' }
  },
  {
    path: 'invoices',
    component: InvoicesComponent,
    data: { title: 'Invoices', breadcrumb: 'Invoices' }
  },
  {
    path: 'packages',
    component: PackagesComponent,
    data: { title: 'Packages', breadcrumb: 'Packages' }
  },
  {
    path: 'residents',
    component: ResidentsComponent,
    data: { title: 'Residents', breadcrumb: 'Residents' }
  },
  {
    path: 'residents/add',
    component: AddResidentComponent,
    data: { title: 'Add Residents', breadcrumb: 'Manage Residents / Add Residents', Submit: 'Submit' }
  },
  {
    path: 'residents/view',
    component: AddResidentComponent,
    data: { title: 'View Residents', breadcrumb: 'Manage Residents/ View Residents', Submit: 'Submit' }
  },
  {
    path: 'residents/update',
    component: AddResidentComponent,
    data: { title: 'Update Residents', breadcrumb: 'Manage Residents/ Update Residents', Submit: 'Submit' }
  },
  {
    path: 'app-users',
    component: UserComponent,
    data: { title: 'Users', breadcrumb: 'Users'}
  },
  {
    path: 'app-users/add',
    component: AddUserComponent,
    data: { title: 'Add USer', breadcrumb: 'Save user' }
  },
  {
    path: 'app-users/edit',
    component: AddUserComponent,
    data: { title: 'Edit user', breadcrumb: 'Update user' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }
