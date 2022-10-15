import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  loginForm : FormGroup;

  get nameField (): FormControl {
		return this.loginForm.get( 'name' ) as FormControl;
	}
	get lastNameField (): FormControl {
		return this.loginForm.get( 'lastName' ) as FormControl;
	}

  constructor(
    private router   : Router,
    private fb       : FormBuilder
  ) { 
    this.loginForm = this.fb.group({
      name: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required)
    })
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

  ngOnInit(): void {
  }

}
