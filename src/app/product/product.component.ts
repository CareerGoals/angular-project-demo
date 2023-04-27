import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products :any

  constructor(){
    this.products=[
      {
        "id":1212,
        "name":"hiiii",
        "brand":"XOXO",
        "price":19000
      },
      {
        "id":1212,
        "name":"hiiii",
        "brand":"XOXO",
        "price":19000
      }
    ]
  }

  ngOnInit() {
      
  }
}
