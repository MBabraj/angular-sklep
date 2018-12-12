import { Injectable } from '@angular/core';
import { ProductsService } from '../products/products.service';
import { Product } from '../shared/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

	inCart: Product[] = []	

  constructor(private productsService: ProductsService) { }

  addToCart(product: Product) {
  	let productInCart = this.inCart.find(p => p.id === product.id);

  	if (productInCart) {
		productInCart.quantity++;
  	} else {
  		let newProduct = {...product}
  		newProduct.quantity = 1
  		this.inCart.push(newProduct);
  	}

  	this.productsService.deleteProduct(product.id);
  }

  getProducts() {
  	return this.inCart;
  }
}
