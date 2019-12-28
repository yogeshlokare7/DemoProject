import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as domHelper from '../../../helpers/dom.helper';
import { ThemeService } from '../../../services/theme/theme.service';
import { environment } from 'src/environments/environment';
import { CompanyService } from '../../../services/company.service';
import { TokenStorageService } from '../../../services/token-storage/token-storage.service';
import { Society } from 'src/app/models/society';
import { Router } from '@angular/router';
import { RestApi } from 'src/app/models/api/rest-api';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.template.html'
})
export class TopbarComponent implements OnInit {
  baseUrl = environment.baseUrl;
  pictureUrl: string = `assets//images//account.jpg`;
  companyId: number;
  profilePic: any;
  picture: any;

  @Input() sidenav;
  @Input() notificPanel;
  @Output() onLangChange = new EventEmitter<any>();
  currentLang = 'en';
  availableLangs = [{
    name: 'English',
    code: 'en',
  }, {
    name: 'Spanish',
    code: 'es',
  }]
  egretThemes;
  api = new RestApi();
  user :any;
  society :Society;

  constructor(private themeService: ThemeService,
    private tokenService: TokenStorageService,
    private router: Router,
    public companyService: CompanyService) {
    this.profilePic = this.api.SOCIETYUSERPIC_URL;
    this.user = this.tokenService.getUserInfo();
    if(this.user){
      this.picture = this.user.picture;
      this.society = this.user.societyid;
    }
  }

  ngOnInit() {
    this.egretThemes = this.themeService.egretThemes;
  }
  setLang() {
    this.onLangChange.emit(this.currentLang);
  }
  changeTheme(theme) {
    this.themeService.changeTheme(theme);
  }
  toggleNotific() {
    this.notificPanel.toggle();
  }
  toggleSidenav() {
    this.sidenav.toggle();
  }
  toggleCollapse() {
    let appBody = document.body;
    domHelper.toggleClass(appBody, 'collapsed-menu');
    domHelper.removeClass(document.getElementsByClassName('has-submenu'), 'open');
  }


  logout() {
    this.tokenService.signOut();
    this.router.navigateByUrl('/sessions/signin');
  }
}