import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {
  @Input() title:string = ''; 
  @Input() img:string = ''; 
  @Input() price:number = 0; 
  @Input() promotionPrice:number=0;
  constructor() { }

  ngOnInit(): void {
  }

}
