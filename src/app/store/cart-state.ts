export interface CartState {
  itens: any[];
  total: number;
}

export const initialState: CartState= {
  itens: [],
  total: 0
}