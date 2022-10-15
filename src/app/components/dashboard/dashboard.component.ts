import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() page    : string = 'none';
  @Input() title   : string = 'none';
  @Input() img     : string = 'src';
  @Input() message : string = 'none';


  // @Input() info : Info = {
  //   title   : '',
  //   message : '',
  //   img     : ''
  // }

  constructor(
    private router   : Router,
    private location : Location,
  ) {}

  ngOnInit(): void {
  }

  goBack(): void{
    this.location.back();
  }
  pay(): void{
    this.router.navigate(['checkout/step-3-order-confirmation']);
  }
}
