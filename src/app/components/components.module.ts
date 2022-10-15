import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './../app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { StepsComponent } from './steps/steps.component';
import { FormComponent } from './form/form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StepsComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    TranslateModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DashboardComponent,
    StepsComponent,
    FormComponent,
    TranslateModule
  ]
})
export class ComponentsModule { }
