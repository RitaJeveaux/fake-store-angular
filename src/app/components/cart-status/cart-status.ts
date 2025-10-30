import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cart-status',
  imports: [CommonModule],
  templateUrl: './cart-status.html',
  styleUrl: './cart-status.css'
})
export class CartStatus {
  cartItemCount: Observable<number>;

  constructor(private store: Store<{ cart: { items: any[] } }>) {
   this.cartItemCount = this.store.select(state => state.cart.items.length); 
  }
}
