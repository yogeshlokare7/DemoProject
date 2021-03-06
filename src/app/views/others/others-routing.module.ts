import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBlankComponent } from './app-blank/app-blank.component';
import { CompanyComponent } from './company/company.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { RoleComponent } from './role/role.component';

const routes: Routes = [ 
  {
    path: '',
    redirectTo:'dashboard',
    pathMatch : 'full'
  },
  {
    path: 'society',
    component: CompanyComponent,
    data: { title: 'Society', breadcrumb: 'Society' }
  },
  {
    path: 'society/add',
    component: AddCompanyComponent,
    data: { title: 'Society Save', breadcrumb: 'Save Society' }
  },
  {
    path: 'society/edit',
    component: AddCompanyComponent,
    data: { title: 'Society Update', breadcrumb: 'Update Society' }
  },

  {
    path: 'dashboard',
    component: AppBlankComponent,
    data: { title: 'Home', breadcrumb: 'Home'}
  },
  {
    path: 'role',
    component: RoleComponent,
    data: { title: 'Roles', breadcrumb: 'Roles'}
  },
];

@NgModule({
  imports: [
  RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OthersRoutingModule { }
