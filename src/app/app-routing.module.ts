import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthLayoutComponent } from './components/common/layouts/auth-layout/auth-layout.component';
import { AdminLayoutComponent } from './components/common/layouts/admin-layout/admin-layout.component';
import { AuthService } from './services/auth/auth.service';
import { CompanyLayoutComponent } from './components/common/layouts/company-layout/company-layout.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'sessions', 
    pathMatch: 'full' 
  },
  {
    path: '', 
    component: AuthLayoutComponent,
    children: [
      { 
        path: 'sessions', 
        loadChildren: './views/sessions/sessions.module#SessionsModule',
        data: { title: 'Session'} 
      }
    ]
  },
  {
    path: '', 
    component: AdminLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'admin', 
        loadChildren: './views/others/others.module#OthersModule', 
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      }
    ]
  },
  {
    path: '', 
    component: CompanyLayoutComponent,
    canActivate: [AuthService],
    children: [
      {
        path: 'company', 
        loadChildren: './views/company/company.module#CompanyModule', 
        data: { title: 'Dashboard', breadcrumb: 'DASHBOARD'}
      }
    ]
  },
  { 
    path: '**', 
    redirectTo: 'sessions/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
