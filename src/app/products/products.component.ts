import { Component, OnInit } from '@angular/core';
import {ProductComponent} from '../product/product.component';
import {Product} from '../shared/models/product.model';
import {Category} from '../shared/models/category.model';
import { ProductsService } from './products.service';
import { CartService} from '../cart/cart.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

	productList: Product[] = [];
  categoriesList: Category[] = [];
	maxPrice: number; 
	minPrice: number;
	currency: string = "EUR";


  constructor(private productsService: ProductsService, 
  	private cartService: CartService) { }

  ngOnInit() {
  	this.productList = this.productsService.getProducts();
  	this.minMaxPrice();
    this.defineCategories();
  }

  private defineCategories() {
    this.categoriesList.push({
      id: 0,
      name: 'wszystko',
      active: true
    });
    let i = 1;
    this.productList.forEach(prod => {
      if (this.categoriesList.findIndex(p => p.name ===  prod.category) === -1) {
        this.categoriesList.push({
          id: i,
          name: prod.category,
          active: false
        });
      }
      i++;
    })

  }

  private minMaxPrice(){
  	this.maxPrice = Math.max(...this.productList.map(p => p.price));
  	this.minPrice = Math.min(...this.productList.map(p => p.price));
  }

  add(event) {
  	console.log("ADD "+event.name);
  	this.cartService.addToCart(event);
  }

  remove(event) {
  	console.log("REMOVE "+event.name);
  }

  changeActiveCategory(id: number) {
    this.categoriesList.forEach(c => {
      if (c.id === id ) {
        c.active = true;
      } else {
        c.active = false;
      }
    });
  }

}
