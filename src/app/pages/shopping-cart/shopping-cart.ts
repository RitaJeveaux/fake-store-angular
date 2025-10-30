import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import * as CartActions from '../../store/cart-actions';
import { CartItem } from '../../types';
import { CartState } from '../../store/cart-state';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-shopping-cart',
  imports: [CommonModule, RouterLink],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCart {
  cartItems: Observable<CartItem[]>;
  totalPrice: Observable<number>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cartItems = this.store.select(state => state.cart.items);
    this.totalPrice = this.cartItems.pipe(
      map(items => items.reduce((acc, item) => acc + item.price * item.quantity, 0))
    );
  }

  removeItem(productId: number) {
    this.store.dispatch(CartActions.removeProductFromCart({ productId }));
  }

  clearCart() {
    this.store.dispatch(CartActions.clearCart());
  }
}