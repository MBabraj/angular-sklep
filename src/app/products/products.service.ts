import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductsRestService } from './products-rest.service';
import { map, take } from 'rxjs/operators';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	private products: Product[] = [];
  public productsLoaded = new BehaviorSubject(false);

  constructor(private productsRest: ProductsRestService) {
  	this.requestForProducts();
  }

  requestForProducts() {
	  this.productsRest.getProducts().pipe(
      take(1)
    ).subscribe(prods => {
      this.products = prods;
      this.productsLoaded.next(true);
    })
  }

  getProducts() {
  	return this.products;
  }

  getProduct() {

  }

  addProduct(id: number) {
    this.products.find(p => p.id === id).quantity++
  }

  deleteProduct(id: number) {
    this.products.find(p => p.id === id).quantity--;
  }

}
