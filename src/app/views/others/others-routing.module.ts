import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppBlankComponent } from './app-blank/app-blank.component';
import { CompanyComponent } from './company/company.component';
import { UserComponent } from './user/user.component';
import { AddCompanyComponent } from './company/add-company/add-company.component';
import { AddUserComponent } from './user/add-user/add-user.component';

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
    path: 'users',
    component: UserComponent,
    data: { title: 'Users', breadcrumb: 'Users'}
  },
  {
    path: 'users/add',
    component: AddUserComponent,
    data: { title: 'add Save', breadcrumb: 'Save users' }
  },
  {
    path: 'users/edit',
    component: AddUserComponent,
    data: { title: 'edit user', breadcrumb: 'Update users' }
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
