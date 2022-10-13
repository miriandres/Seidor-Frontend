import { SeidorApiService } from './../../services/seidor-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss']
})
export class OrderConfirmationComponent implements OnInit {

  loaded : boolean = false
  info   : any = {}

  constructor(
    private apiService : SeidorApiService,
  ) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData(){
    this.apiService.getData().subscribe( data => {
      this.info = data;
      this.loaded = true;
    })
  }
}
