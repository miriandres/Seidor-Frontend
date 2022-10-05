import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public mobile  : boolean = false

  constructor() { }

  ngOnInit(): void {
  }

  setMobile() : void {
    this.mobile = !this.mobile;
  }

}
