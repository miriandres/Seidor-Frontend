import { AppService } from './../../services/app.service';
import { MenuLi } from './../../interfaces/menu';
import { TranslateService } from '@ngx-translate/core';
import { Component, Inject, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public currentIndex : number = -1;
  public menu         : Array<MenuLi> = [];
  public mobile       : boolean = false;
  public isOpen       : boolean = false;

  lang : string = '';
  languages = [
    { id: 1, label: "en" },
    { id: 2, label: "es" }
  ];

  constructor(
    private translate  : TranslateService,
    private appService : AppService,
    @Inject(DOCUMENT) private document : Document
  ) { 
    this.menu = appService.menu
  }

  ngOnInit(): void {
    this.lang = this.translate.getDefaultLang();
    this.translate.use(this.lang);
  }

  onChange(event : any){
    this.translate.setDefaultLang(event.target.value);
    this.translate.use(event.target.value);
  }

  showMenu( x : number, $event ?: Event ) : void {
    if($event){
      $event.preventDefault();
    }
    this.currentIndex = x;
    this.isOpen = !this.isOpen;
  }
  setMobile() : void {
    this.mobile = !this.mobile;
    
    if(this.mobile == true){
      this.document.body.classList.add('no-scroll');
    } else {
      this.document.body.classList.remove('no-scroll');
    }
  }

}
