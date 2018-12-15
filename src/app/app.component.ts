import { Component, OnInit } from '@angular/core';
import { ProductsService } from './products/products.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sklep';
  dataLoaded: boolean = false;

  constructor(private productsService: ProductsService) {}

  ngOnInit() {
  	this.productsService.productsLoaded.subscribe(isLoaded => this.dataLoaded = isLoaded);
  }
}
