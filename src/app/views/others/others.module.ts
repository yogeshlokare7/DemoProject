import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { 
  MatListModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatMenuModule,
  MatSlideToggleModule,
  MatGridListModule,
  MatChipsModule,
  MatCheckboxModule,
  MatRadioModule,
  MatTabsModule,
  MatInputModule,
  MatProgressBarModule,
  MatProgressSpinnerModule
 } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';

import { OthersRoutingModule } from './others-routing.module';
import { AppBlankComponent } from './app-blank/app-blank.component';
import { CompanyComponent } from './company/company.component';
import { DemoMaterialModule } from '../../../app/material-module';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { RoleComponent } from './role/role.component';
import { AddRoleComponent } from './role/add-role/add-role.component';

@NgModule({
  declarations: [AppBlankComponent, CompanyComponent, AddCompanyComponent, RoleComponent, AddRoleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    OthersRoutingModule
  ],
  entryComponents: [
    AddRoleComponent
  ]
})
export class OthersModule { }
