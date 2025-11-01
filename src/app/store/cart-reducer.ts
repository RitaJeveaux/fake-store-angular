import { createReducer, on } from "@ngrx/store";
import { addProductToCart, removeProductFromCart, clearCart } from "./cart-actions";
import { CartState, initialState } from "./cart-state";
import { CartItem } from "../types/types";

function calculateTotal(items: CartItem[]): number {
  return items.reduce((sum, item) => sum + item.price * item.quantity, 0);
}

export const cartReducer = createReducer(
  initialState,
  on(addProductToCart, (state, { product }) => {
    const existingItem = state.items.find(item => item.id === product.id);
    let newItems: CartItem[];

    if (existingItem) {
      newItems = state.items.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      );
    } else {
      newItems = [...state.items, { ...product, quantity: 1 }];
    }

    return {
      ...state,
      items: newItems,
      total: calculateTotal(newItems),
    };
  }),
  on(removeProductFromCart, (state, { productId }) => {
    const existingItem = state.items.find(item => item.id === productId);
    let newItems: CartItem[];

    if (existingItem && existingItem.quantity > 1) {
      newItems = state.items.map(item =>
        item.id === productId ? { ...item, quantity: item.quantity - 1 } : item
      );
    } else {
      newItems = state.items.filter(item => item.id !== productId);
    }

    return {
      ...state,
      items: newItems,
      total: calculateTotal(newItems),
    };
  }),
  on(clearCart, (state): CartState => {
    return initialState;
  })
);