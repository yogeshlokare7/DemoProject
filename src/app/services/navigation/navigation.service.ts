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

@Injectable()
export class NavigationService {
  constructor() {}

  defaultMenu:IMenuItem[] = [
    {
      name: 'HOME',
      type: 'link',
      tooltip: 'home',
      icon: 'dashboard',
      state: 'admin/dashboard'
    },
    {
      name: 'MANAGE COMPANY',
      type: 'link',
      tooltip: 'Manage Company',
      icon: 'inbox',
      state: 'admin/companies'
    },
    {
      name: 'MANAGE USER',
      type: 'link',
      tooltip: 'Manage User',
      icon: 'chat',
      state: 'admin/users'
    },
    // {
    //   name: 'DOC',
    //   type: 'extLink',
    //   tooltip: 'Documentation',
    //   icon: 'library_books',
    //   state: 'http://www.tejovat.com/'
    // }
  ]
  separatorMenu:IMenuItem[] = [
    {
      type: 'separator',
      name: 'Custom components'
    },
    {
      name: 'HOME',
      type: 'link',
      tooltip: 'Home',
      icon: 'dashboard',
      state: 'admin/dashboard'
    },
    {
      name: 'MANAGE COMPANY',
      type: 'link',
      tooltip: 'Inbox',
      icon: 'inbox',
      state: 'admin/companies'
    },
    {
      name: 'MANAGE USER',
      type: 'link',
      tooltip: 'Chat',
      icon: 'chat',
      state: 'admin/users'
    },
    // {
    //   name: 'DOC',
    //   type: 'extLink',
    //   tooltip: 'Documentation',
    //   icon: 'library_books',
    //   state: 'http://www.tejovat.com/'
    // }
  ]
  iconMenu:IMenuItem[] = [
    {
      name: 'HOME',
      type: 'link',
      tooltip: 'Home',
      icon: 'dashboard',
      state: 'admin/dashboard'
    },
    {
      name: 'MANAGE COMPANY',
      type: 'link',
      tooltip: 'Manage Company',
      icon: 'inbox',
      state: 'admin/companies'
    },
    {
      name: 'MANAGE USER',
      type: 'link',
      tooltip: 'Manage User',
      icon: 'chat',
      state: 'admin/users'
    },
    // {
    //   name: 'DOC',
    //   type: 'extLink',
    //   tooltip: 'Documentation',
    //   icon: 'library_books',
    //   state: 'http://www.tejovat.com/'
    // }
  ]
  
  // Icon menu TITLE at the very top of navigation.
  // This title will appear if any icon type item is present in menu.
  iconTypeMenuTitle:string = 'Frequently Accessed';
  // sets iconMenu as default;
  menuItems = new BehaviorSubject<IMenuItem[]>(this.iconMenu);
  // navigation component has subscribed to this Observable
  menuItems$ = this.menuItems.asObservable();

  // Customizer component uses this method to change menu.
  // You can remove this method and customizer component.
  // Or you can customize this method to supply different menu for
  // different user type.
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