import { Component, OnInit, ViewChild } from '@angular/core';
import { 
  Router, 
  NavigationEnd, 
  RouteConfigLoadStart, 
  RouteConfigLoadEnd, 
  ResolveStart, 
  ResolveEnd 
} from '@angular/router';
import { MatSidenav } from '@angular/material';
import { ThemeService } from '../../../../services/theme/theme.service';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';
import { TranslateService } from '@ngx-translate/core';
import * as Ps from 'perfect-scrollbar';
import { CompanyService } from 'src/app/services/company.service';
import { TokenStorageService } from 'src/app/services/token-storage/token-storage.service';
import { environment } from 'src/environments/environment';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-admin-layout',
  templateUrl: './admin-layout.template.html'
})
export class AdminLayoutComponent implements OnInit {
  
  isSidenavOpen: Boolean = false;
  isModuleLoading: Boolean = false;
  moduleLoaderSub: Subscription;
  @ViewChild(MatSidenav) private sideNave: MatSidenav;
  baseUrl = environment.baseUrl;
  pictureUrl :string  = `${environment.baseUrl}/api/auth/others/files/company_default.png`;
  companyId :number;

  constructor(
    private router: Router,
    public translate: TranslateService,
    public themeService: ThemeService,
    private tokenService:TokenStorageService,
    public companyService: CompanyService
  ) {
    this.companyId = this.tokenService.getCompanyId();
    if(this.companyId != null || this.companyId > 0){
      this.companyService.checkCompanyLogo(this.companyId, "company").subscribe(data=>{
        if(data.available){
          this.pictureUrl = `${this.baseUrl}/api/auth/others/files/company_${this.companyId}.png`;
        }else{
          this.pictureUrl = `${this.baseUrl}/api/auth/others/files/company_default.png`;
        }
      }, (error:HttpErrorResponse)=>{
        console.log("error", error);
      })
    }else{
      this.pictureUrl = `${this.baseUrl}/api/auth/others/files/company_default.png`;
    }
    // Close sidenav after route change in mobile
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange: NavigationEnd) => {
      if(this.isNavOver()) {
        this.sideNave.close()
      }
    });
    // Translator init
    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
  ngOnInit() {
    // Initialize Perfect scrollbar for sidenav
    let navigationHold = document.getElementById('scroll-area');
    Ps.initialize(navigationHold, {
       suppressScrollX: true
    });
    // FOR MODULE LOADER FLAG
    this.moduleLoaderSub = this.router.events.subscribe(event => {
      if(event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.isModuleLoading = true;
      }
      if(event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
        this.isModuleLoading = false;
      }
    });
  }

  ngOnDestroy() {
    this.moduleLoaderSub.unsubscribe();
  }

  isNavOver() {
    return window.matchMedia(`(max-width: 960px)`).matches;
  }
}