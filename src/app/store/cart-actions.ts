import { createAction, props } from "@ngrx/store";
import { Product } from "../types/types";

export const addProductToCart = createAction(
  '[Product Detail] Add Product to Cart',
  props<{ product: Product }>()
);

export const removeProductFromCart = createAction(
  '[Shopping Cart] Remove Product',
  props<{ productId: number }>()
);

export const clearCart = createAction('[Shopping Cart] Clear Cart');