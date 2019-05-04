import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface IMenuItem {
  type: string,       // Possible values: link/dropDown/icon/separator/extLink
  name?: string,      // Used as display text for item and title for separator type
  state?: string,     // Router state
  icon?: string,      // Item icon name
  tooltip?: string,   // Tooltip text
  disabled?: boolean, // If true, item will not be appeared in sidenav.
  sub?: IChildItem[]  // Dropdown items
}

interface IChildItem {
  name: string,       // Display text
  state: string       // Router state
}

@Injectable({
  providedIn: 'root'
})
export class CompanyNavigationService {
  constructor() {}

  defaultMenu:IMenuItem[] = [
    {
      name: 'Home',
      type: 'link',
      tooltip: 'home',
      icon: 'dashboard',
      state: 'company/dashboard'
    },
    {
      name: 'Manage Security User',
      type: 'link',
      tooltip: 'Manage User',
      icon: 'chat',
      state: 'company/users'
    }
  ]
  separatorMenu:IMenuItem[] = [
    {
      type: 'separator',
      name: 'Custom components'
    },
    {
      name: 'Home',
      type: 'link',
      tooltip: 'Home',
      icon: 'dashboard',
      state: 'company/dashboard'
    },
    {
      name: 'Manage Security Users',
      type: 'link',
      tooltip: 'Users',
      icon: 'person',
      state: 'company/users'
    },
    {
      name: 'Manage Residents',
      type: 'link',
      tooltip: 'Residents',
      icon: 'supervisor_account',
      state: 'company/customers'
    },
    {
      name: 'Manage Daily Staff',
      type: 'link',
      tooltip: 'Vendors',
      icon: 'people',
      state: 'company/vendors'
    },
    {
      name: 'Manage Admins',
      type: 'link',
      tooltip: 'Products',
      icon: 'view_module',
      state: 'company/products'
    },
    {
      name: 'Manage Bills',
      type: 'link',
      tooltip: 'Bills',
      icon: 'view_comfy',
      state: 'company/items'
    }
  ]

  iconMenu:IMenuItem[] = [
    {
      name: 'Home',
      type: 'link',
      tooltip: 'Home',
      icon: 'dashboard',
      state: 'company/dashboard'
    },
    {
      name: 'Manage Security Users',
      type: 'link',
      tooltip: 'Users',
      icon: 'person',
      state: 'company/users'
    },
    {
      name: 'Manage Residents',
      type: 'link',
      tooltip: 'Residents',
      icon: 'supervisor_account',
      state: 'company/customers'
    },
    {
      name: 'Manage Daily Staff',
      type: 'link',
      tooltip: 'Vendors',
      icon: 'people',
      state: 'company/vendors'
    },
    {
      name: 'Manage Admins',
      type: 'link',
      tooltip: 'Products',
      icon: 'view_module',
      state: 'company/products'
    },
    {
      name: 'Manage Bills',
      type: 'link',
      tooltip: 'Bills',
      icon: 'view_comfy',
      state: 'company/items'
    }
  ]

  iconTypeMenuTitle:string = 'Frequently Accessed';
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  menuItems$ = this.menuItems.asObservable();

  publishNavigationChange(menuType: string) {
    switch(menuType) {
      case 'separator-menu':
        this.menuItems.next(this.separatorMenu);
        break;
      case 'icon-menu':
        this.menuItems.next(this.iconMenu);
        break;
      default:
        this.menuItems.next(this.defaultMenu);
    }
  }
}
