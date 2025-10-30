
import { CartItem } from '../types';

export interface CartState {
  items: CartItem[];
  total: number;
}

export const initialState: CartState = {
  items: [],
  total: 0
}