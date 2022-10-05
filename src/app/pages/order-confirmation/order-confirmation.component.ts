import { SeidorApiService } from './../../services/seidor-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  info : any = {
    title: 'title',
    message: 'message',
    img: 'img'
  };

  constructor(
    private apiService : SeidorApiService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.apiService.getData().subscribe( data => {
      this.info = data;
    })
  }

}
