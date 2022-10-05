import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  @Input() page : string = 'none';
  @Input() title : string = 'none';
  @Input() img : string = 'src';
  @Input() message : string = 'none';

  loginForm = new FormGroup({
    name: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required)
  })

  constructor(
    private router   : Router,
    private location : Location,
  ) { }

  ngOnInit(): void {
  }
  
  // User validation
  onSubmit(form: any):void{
    if(form.name == 'John' && form.lastName=='Doe'){
      this.router.navigate(['/step-2-payment']);
    }
    this.resetForm()
  }
  resetForm(){
    this.loginForm.reset()
  }

  goBack(): void{
    this.location.back();
  }
  pay(): void{
    this.router.navigate(['/step-3-order-confirmation']);
  }
}
