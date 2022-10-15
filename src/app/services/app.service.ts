import { MenuLi } from './../interfaces/menu';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  menu : Array<MenuLi> = [
    {
      route : 'header.categories',
      title : 'Check out my portfolio',
      class : 'header__a',
      submenu : [ 
        'header.categories1',
        'header.categories2',
        'header.categories3',
      ]
    },
    {
      route : 'header.brands',
      title : 'Contact me',
      class : 'header__a',
      submenu : [ 
        'header.brand1',
        'header.brand2',
        'header.brand3',
      ]
    }
  ]

  constructor() { }
}
