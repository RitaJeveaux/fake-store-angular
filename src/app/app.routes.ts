import { Routes } from '@angular/router';
import { ProductList } from './pages/product-list/product-list';
import { ProductDetail } from './pages/product-detail/product-detail';
import { ShoppingCart } from './pages/shopping-cart/shopping-cart';
import { Checkout } from './pages/checkout/checkout';

export const routes: Routes = [
  { path: '', component: ProductList },
  { path: 'product/:id', component: ProductDetail },
  { path: 'cart', component: ShoppingCart },
  { path: 'checkout', component: Checkout },
];
