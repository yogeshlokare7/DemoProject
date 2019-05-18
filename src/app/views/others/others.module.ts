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
import { UserComponent } from './user/user.component';
import { CompanyComponent } from './company/company.component';
import { DemoMaterialModule } from '../../../app/material-module';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { AddUserComponent } from './user/add-user/add-user.component';
import { RoleComponent } from './role/role.component';

@NgModule({
  declarations: [AppBlankComponent, UserComponent, CompanyComponent, AddCompanyComponent, AddUserComponent, RoleComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DemoMaterialModule,
    FlexLayoutModule,
    NgxDatatableModule,
    OthersRoutingModule
  ]
})
export class OthersModule { }
