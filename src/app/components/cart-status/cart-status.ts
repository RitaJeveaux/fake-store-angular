import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';
import { CartState } from '../../store/cart-state';

@Component({
  selector: 'app-cart-status',
  imports: [CommonModule],
  templateUrl: './cart-status.html',
  styleUrl: './cart-status.css'
})
export class CartStatus {
  cartItemCount: Observable<number>;

  constructor(private store: Store<{ cart: CartState }>) {
    this.cartItemCount = this.store.select(state => state.cart.items).pipe(
      map(items => items.reduce((acc, item) => acc + item.quantity, 0))
    );
  }
}
