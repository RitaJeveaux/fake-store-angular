import { createReducer, on } from "@ngrx/store";
import { addProductToCart } from "./cart-actions";
import { initialState } from "./cart-state";

export const cartReducer = createReducer(
  initialState,
  on(addProductToCart, (state, { product }) => {
    const newItens = [...state.itens, product];
    return {
      ...state,
      itens: newItens,
      total: newItens.reduce((sum, item) => sum + item.price, 0),
    }
  }))