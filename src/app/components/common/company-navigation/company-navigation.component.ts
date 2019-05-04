import { Component, OnInit } from '@angular/core';
import { CompanyNavigationService } from 'src/app/services/navigation/company-navigation.service';

@Component({
  selector: 'app-company-navigation',
  templateUrl: './company-navigation.component.html',
  styleUrls: ['./company-navigation.component.css']
})
export class CompanyNavigationComponent implements OnInit {
  hasIconTypeMenuItem;
  iconTypeMenuTitle:string;
  menuItems:any[];

  constructor(private navService: CompanyNavigationService) {}
  
  ngOnInit() {
    this.iconTypeMenuTitle = this.navService.iconTypeMenuTitle;
    // Loads menu items from NavigationService
    this.navService.menuItems$.subscribe(menuItem => {
      this.menuItems = menuItem;
      //Checks item list has any icon type.
      this.hasIconTypeMenuItem = !!this.menuItems.filter(item => item.type === 'icon').length;
    });
  }

  // Only for demo purpose
  addMenuItem() {
    this.menuItems.push({
      name: 'ITEM',
      type: 'dropDown',
      tooltip: 'Item',
      icon: 'done',
      state: 'material',
      sub: [
        {name: 'SUBITEM', state: 'cards'},
        {name: 'SUBITEM', state: 'buttons'}
      ]
    });
  }
}
