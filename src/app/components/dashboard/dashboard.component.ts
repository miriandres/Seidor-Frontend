import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

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

  loginForm : FormGroup;

  get nameField (): FormControl {
		return this.loginForm.get( 'name' ) as FormControl;
	}
	get lastNameField (): FormControl {
		return this.loginForm.get( 'lastName' ) as FormControl;
	}

  constructor(
    private router   : Router,
    private location : Location,
    private fb       : FormBuilder
  ) { 
    this.loginForm = this.fb.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    })
  }

  ngOnInit(): void {
  }
  
  // User validation
  onSubmit(form: any): void{
    if(form.name == 'John' && form.lastName=='Doe'){
      this.router.navigate(['checkout/step-2-payment']);
    }
    this.resetForm();
  }
  resetForm(): void{
    this.loginForm.reset();
  }

  goBack(): void{
    this.location.back();
  }
  pay(): void{
    this.router.navigate(['checkout/step-3-order-confirmation']);
  }
}
