import { Injectable } from '@angular/core';
import { Product } from '../shared/models/product.model';
import { ProductsRestService } from './products-rest.service';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

	private products: Product[] = [];

  constructor(private productsRest: ProductsRestService) {
  	this.requestForProducts();
  }

  requestForProducts() {
	
  }

  getProducts() {
  	return this.productsRest.getProducts();
  }

  getProduct() {

  }

  addProduct(id: number) {
  	this.products.find(p => p.id === id).quantity++;
  }

  deleteProduct(id: number) {
  	this.products.find(p => p.id === id).quantity--;
  }

}
