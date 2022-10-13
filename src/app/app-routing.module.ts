import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyDataComponent } from './pages/my-data/my-data.component';
import { OrderConfirmationComponent } from './pages/order-confirmation/order-confirmation.component';
import { PaymentComponent } from './pages/payment/payment.component';

const routes: Routes = [
  { path : 'checkout/step-1-my-data',            component : MyDataComponent },
  { path : 'checkout/step-2-payment',            component : PaymentComponent },
  { path : 'checkout/step-3-order-confirmation', component : OrderConfirmationComponent },
  { path : '**', redirectTo: 'checkout/step-1-my-data', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
