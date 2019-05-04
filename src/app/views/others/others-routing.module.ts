import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBlankComponent } from './app-blank/app-blank.component';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch : 'full'
  },
  {
    path: 'companies',
    component: CompanyComponent,
    data: { title: 'Company', breadcrumb: 'Companies' }
  },
  {
    path: 'companies/add',
    component: AddCompanyComponent,
    data: { title: 'Company Save', breadcrumb: 'Save Company' }
  },
  {
    path: 'users',
    component: UserComponent,
    data: { title: 'Users', breadcrumb: 'Users'}
  },
  {
    path: 'dashboard',
    component: AppBlankComponent,
    data: { title: 'Home', breadcrumb: 'Home'}
  }
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
