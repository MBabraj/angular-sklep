import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainpageComponent } from './mainpage/mainpage.component';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { NewProductComponent } from './new-product/new-product.component';
import { CartComponent } from './cart/cart.component';
import { CartService } from './cart/cart.service';
import { ProductsService} from './products/products.service';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { FormsModule } from '@angular/forms';
import { ProductsRestService } from './products/products-rest.service';
import { HttpClientModule } from '@angular/common/http';
import { CategoryFilterPipe } from './shared/pipes/category-filter.pipe';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'products',
    component: ProductsComponent
  },
  {
    path: 'order',
    component: OrderComponent
  },
  {
    path: '',
    redirectTo: 'products',
    pathMatch: 'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    MainpageComponent,
    ProductComponent,
    ProductsComponent,
    HeaderComponent,
    NewProductComponent,
    CartComponent,
    OrderComponent,
    CategoryFilterPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
  ],
  providers: [ProductsService, CartService, ProductsRestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
