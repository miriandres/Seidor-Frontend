import { MenuLi } from './../interfaces/menu';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  menu : Array<MenuLi> = [
    {
      title : 'header.categories',
      class : 'header__a',
      submenu : [ 
        'header.categories1',
        'header.categories2',
        'header.categories3',
      ]
    },
    {
      title : 'header.brands',
      class : 'header__a',
      submenu : [ 
        'header.brand1',
        'header.brand2',
        'header.brand3',
      ]
    },
    {
      title : 'header.aboutUs',
      class : 'header__a',
    }
  ]

  constructor() { }
}
