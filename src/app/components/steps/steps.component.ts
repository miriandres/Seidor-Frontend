import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent implements OnInit {

  src1 : string = '/assets/img/step-1.svg';
  src2 : string = '/assets/img/step-2.svg';

  constructor(
    private router : Router
  ) { }

  ngOnInit(): void {
    if(this.router.url == '/checkout/step-2-payment'){
      this.src1 ='/assets/img/tick.svg';
    }
    if(this.router.url == '/checkout/step-3-order-confirmation'){
      this.src1 ='/assets/img/tick.svg';
      this.src2 ='/assets/img/tick.svg';
    }
  }

}
