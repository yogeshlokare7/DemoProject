import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import * as domHelper from '../../../helpers/dom.helper';
import { ThemeService } from '../../../services/theme/theme.service';
import { environment } from 'src/environments/environment';
import { CompanyService } from '../../../services/company.service';
import { TokenStorageService } from '../../../services/token-storage/token-storage.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Company } from 'src/app/models/company';
import { Society } from 'src/app/models/society';
import { Router } from '@angular/router';

@Component({
  selector: 'topbar',
  templateUrl: './topbar.template.html'
})
export class TopbarComponent implements OnInit {
  baseUrl = environment.baseUrl;
  pictureUrl: string = `assets//images//account.jpg`;
  companyId: number;
  company: Society;

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

  constructor(private themeService: ThemeService,
    private tokenService: TokenStorageService,
    private router:Router,
    public companyService: CompanyService) {
    this.companyId = this.tokenService.getUserId();
    this.company = this.tokenService.getSociety();
    let roles = this.tokenService.getRole();
    // if (!roles.includes("Tejovat Admin")) {
    //   this.pictureUrl = `assets//images//account2.jpg`;
    // }
    console.log("company", this.company);
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