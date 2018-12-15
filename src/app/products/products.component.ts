import { Component, OnInit } from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {Product} from '../shared/models/product.model';
import { ProductsService } from './products.service';
import { CartService} from '../cart/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	productList: Product[] = [];
	maxPrice: number; 
	minPrice: number;
	currency: string = "EUR";

	cart: number = 0;

  constructor(private productsService: ProductsService, 
  	private cartService: CartService) { }

  ngOnInit() {
  	this.productList = this.productsService.getProducts();
  	this.minMaxPrice();
  }



  minMaxPrice(){
  	this.maxPrice = Math.max(...this.productList.map(p => p.price));
  	this.minPrice = Math.min(...this.productList.map(p => p.price));
  }

  add(event) {
  	console.log("ADD "+event.name);
  	this.cartService.addToCart(event);
  }

  remove(event) {
  	console.log("REMOVE "+event.name);
  	this.cart--;
  }

}
