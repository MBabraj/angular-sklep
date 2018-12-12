import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Product} from '../shared/models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() product: Product;
  @Input() maxPrice: number;
  @Input() minPrice: number;
  @Input() currency: string;

  @Output() addToCart = new EventEmitter<Product>();
  @Output() removeFromCart = new EventEmitter<Product>();


  constructor() { 
  }

  ngOnInit() {
  }


  isAvailable(product: Product) {
    if (product.quantity > 0) {
      return true;
    } else {
      return false;
    }
  }

  getBackgroundColor(quantity: number) {
    if (quantity === 0) {
      return '#ff8080';
    } else if (quantity > 0 && quantity < 5) {
      return '#ffd24d';
    } else {
      return '#99e699';
    }
  }

  add() {
    this.addToCart.emit(this.product);
  } 

  remove() {
    this.removeFromCart.emit(this.product);
  }

}
