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
      name: 'Manage User',
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
      name: 'Manage Users',
      type: 'link',
      tooltip: 'Users',
      icon: 'person',
      state: 'company/users'
    },
    {
      name: 'Manage Customers',
      type: 'link',
      tooltip: 'Customers',
      icon: 'supervisor_account',
      state: 'company/customers'
    },
    {
      name: 'Manage Vendors',
      type: 'link',
      tooltip: 'Vendors',
      icon: 'people',
      state: 'company/vendors'
    },
    {
      name: 'Manage Products',
      type: 'link',
      tooltip: 'Products',
      icon: 'view_module',
      state: 'company/products'
    },
    {
      name: 'Manage Items',
      type: 'link',
      tooltip: 'Items',
      icon: 'view_comfy',
      state: 'company/items'
    },
    {
      name: 'Sales Orders',
      type: 'link',
      tooltip: 'Sales Orders',
      icon: 'description',
      state: 'company/sales'
    },
    {
      name: 'Packages',
      type: 'link',
      tooltip: 'Packages',
      icon: 'unarchive',
      state: 'company/packages'
    },
    {
      name: 'Invoices',
      type: 'link',
      tooltip: 'Invoices',
      icon: 'receipt',
      state: 'company/invoices'
    },
    {
      name: 'Raw Material',
      type: 'link',
      tooltip: 'Raw Material',
      icon: 'description',
      state: 'company/raw-material'
    },
    {
      name: 'Purchase Orders',
      type: 'link',
      tooltip: 'Purchase Orders',
      icon: 'description',
      state: 'company/purchase'
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
      name: 'Manage Users',
      type: 'link',
      tooltip: 'Users',
      icon: 'person',
      state: 'company/users'
    },
    {
      name: 'Manage Customers',
      type: 'link',
      tooltip: 'Customers',
      icon: 'supervisor_account',
      state: 'company/customers'
    },
    {
      name: 'Manage Vendors',
      type: 'link',
      tooltip: 'Vendors',
      icon: 'people',
      state: 'company/vendors'
    },
    {
      name: 'Manage Products',
      type: 'link',
      tooltip: 'Products',
      icon: 'view_module',
      state: 'company/products'
    },
    {
      name: 'Manage Items',
      type: 'link',
      tooltip: 'Items',
      icon: 'view_comfy',
      state: 'company/items'
    },
    {
      name: 'Sales Orders',
      type: 'link',
      tooltip: 'Sales Orders',
      icon: 'description',
      state: 'company/sales'
    },
    {
      name: 'Packages',
      type: 'link',
      tooltip: 'Packages',
      icon: 'unarchive',
      state: 'company/packages'
    },
    {
      name: 'Invoices',
      type: 'link',
      tooltip: 'Invoices',
      icon: 'receipt',
      state: 'company/invoices'
    },
    {
      name: 'Raw Material',
      type: 'link',
      tooltip: 'Raw Material',
      icon: 'description',
      state: 'company/raw-material'
    },
    {
      name: 'Purchase Orders',
      type: 'link',
      tooltip: 'Purchase Orders',
      icon: 'description',
      state: 'company/purchase'
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
