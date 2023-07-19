import { Component } from '@angular/core';
import { Camera } from './models/camera';
import { OrderService } from './services/order.service';
import { Order } from './models/order';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CameraUI';
  cameras : Camera[] = [];
  orders : Order[] = [];

  constructor(private orderSerivce : OrderService) {}

  ngOnInit() {
    this.getOrders();
  }

  getOrders() {
    this.orderSerivce.getOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
        console.log(this.orders);
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
