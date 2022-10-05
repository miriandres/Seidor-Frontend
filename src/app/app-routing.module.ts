import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDataComponent } from './pages/my-data/my-data.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  { path : '',                          component : MyDataComponent },
  { path : 'step-2-payment',            component : PaymentComponent },
  { path : 'step-3-order-confirmation', component : OrderConfirmationComponent },
  { path : '**', redirectTo: '', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
