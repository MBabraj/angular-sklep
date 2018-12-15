import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product.model';
import { Category } from '../models/category.model';

@Pipe({
  name: 'categoryFilter',
  pure: false
})
export class CategoryFilterPipe implements PipeTransform {

  transform(products: Product[], categories: Category[]): Product[]  {
  	let activeCat = categories.find(c => c.active === true);
  	if (activeCat.id === 0) {
  		return products;
  	} else {
  		return products.filter(p => p.category === activeCat.name);
  	}
    
  }

}
