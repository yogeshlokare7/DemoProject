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
import { Society } from 'src/app/models/society';
import { RestApi } from 'src/app/models/api/rest-api';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-company-layout',
  templateUrl: './company-layout.component.html',
  styleUrls: ['./company-layout.component.css']
})
export class CompanyLayoutComponent implements OnInit {

  isSidenavOpen: Boolean = false;
  isModuleLoading: Boolean = false;
  moduleLoaderSub: Subscription;
  @ViewChild(MatSidenav) private sideNave: MatSidenav;
  baseUrl = environment.baseUrl;
  pictureUrl: string = `assets//images//apt.png`;
  companyId: number;
  society: Society;
  picture: any;
  societyPic: any;
  api = new RestApi();
  userpic: any;
  user: User;
  selectedValue: string = 'content';
  showProfile: boolean = false;

  constructor(
    private router: Router,
    public translate: TranslateService,
    public themeService: ThemeService,
    private tokenService: TokenStorageService,
    public companyService: CompanyService
  ) {
    this.societyPic = this.api.SOCIETYPIC_URL;
    this.society = this.tokenService.getSociety();
    this.user = this.tokenService.getUserInfo();
    if (this.user) {
      this.userpic = this.user.picture;
    }
    if (this.society) {
      this.picture = this.society.picture;
    }
    router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((routeChange: NavigationEnd) => {
      if (this.isNavOver()) {
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
      if (event instanceof RouteConfigLoadStart || event instanceof ResolveStart) {
        this.isModuleLoading = true;
      }
      if (event instanceof RouteConfigLoadEnd || event instanceof ResolveEnd) {
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

  getMessage(message: string) {
    this.selectedValue = message;
    if (this.selectedValue == 'profile') {
      this.showProfile = true;
    } else {
      this.showProfile = false;
    }
  }

  getProfileMessage(message: string) {
    this.userpic = message;
    this.showProfile = false;
  }

  show(){
    this.showProfile = false;
  }
}
