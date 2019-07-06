import { AddItemComponent } from './items/add-item/add-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CompanyRoutingModule } from './company-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CompanyUserComponent } from './company-user/company-user.component';
import { CustomersComponent } from './customers/customers.component';
import { VendorsComponent } from './vendors/vendors.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { SalesOrderComponent } from './sales-order/sales-order.component';
import { RowMaterialComponent } from './row-material/row-material.component';
import { ProductsComponent } from './products/products.component';
import { ItemsComponent } from './items/items.component';
import { PackagesComponent } from './packages/packages.component';
import { InvoicesComponent } from './invoices/invoices.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DemoMaterialModule } from 'src/app/material-module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AddCustomerComponent } from './customers/add-customer/add-customer.component';
import { AddVendorComponent } from './vendors/add-vendor/add-vendor.component';
import { AddProductComponent } from './products/add-product/add-product.component';
import { CreateSalesOrderComponent } from './sales-order/create-sales-order/create-sales-order.component';
import { AddUserComponent } from './company-user/add-user/add-user.component';
import { AddRowMaterialComponent } from './row-material/add-rowmaterial/add-rowmaterial.component';
import { CreatePurchaseOrderComponent } from './purchase-order/create-purchase-order/create-purchase-order.component';
import { AddInvoiceComponent } from './invoices/add-invoice/add-invoice.component';
import { ResidentsComponent } from './residents/residents.component';
import { AddResidentComponent } from './residents/add-resident/add-resident.component';
import { DailyStaffComponent } from './daily-staff/daily-staff.component';
import { AddDailyStaffComponent } from './daily-staff/add-daily-staff/add-daily-staff.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { UserComponent } from './company-user/user/user.component';
import { SaveUserComponent } from './company-user/user/save-user/save-user.component';

@NgModule({
  declarations: [
    DashboardComponent,
    CompanyUserComponent,
    CustomersComponent,
    VendorsComponent,
    PurchaseOrderComponent,
    SalesOrderComponent,
    RowMaterialComponent,
    ProductsComponent,
    ItemsComponent,
    PackagesComponent,
    InvoicesComponent,
    AddCustomerComponent,
    AddVendorComponent,
    AddProductComponent,
    CreateSalesOrderComponent,
    AddUserComponent,
    AddRowMaterialComponent,
    CreatePurchaseOrderComponent,
    AddItemComponent,
    AddInvoiceComponent,
    ResidentsComponent,
    AddResidentComponent,
    DailyStaffComponent,
    AddDailyStaffComponent,
    ConfirmDialogComponent,
    UserComponent,
    SaveUserComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    CompanyRoutingModule,
  ],
  entryComponents: [
    AddCustomerComponent,
    AddVendorComponent,
    AddProductComponent,
    AddUserComponent,
    AddRowMaterialComponent,
    AddItemComponent,
    ConfirmDialogComponent
  ]
})
export class CompanyModule { }
