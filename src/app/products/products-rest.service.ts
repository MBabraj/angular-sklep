import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Product } from '../shared/models/product.model';
import { ProductsContainer } from '../shared/models/protucts-container.model';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductsRestService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
  	const productsUrl = 'http://localhost:5000/products';
  	return this.http.get(productsUrl).pipe(
  		map((productsContainer: ProductsContainer) => productsContainer.products)
  	)	

  }
}
