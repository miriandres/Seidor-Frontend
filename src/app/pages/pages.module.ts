import { AppRoutingModule } from './../app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaymentComponent } from './payment/payment.component';
import { OrderConfirmationComponent } from './order-confirmation/order-confirmation.component';
import { MyDataComponent } from './my-data/my-data.component';
import { ComponentsModule } from '../components/components.module';
import { SeidorApiService } from '../services/seidor-api.service';



@NgModule({
  declarations: [
    MyDataComponent,
    PaymentComponent,
    OrderConfirmationComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [
    SeidorApiService
  ],
})
export class PagesModule { }
