import { Action, createReducer, on } from '@ngrx/store';
import { loadCartInfos, loadCartInfosSuccess, loadCartInfosFailure, deleteProductFromCart, addProductToCart } from 'src/app/actions/cart-info.actions';
import { ProductInfoModel } from './product-info.model';


export const cartInfoFeatureKey = 'cartInfo';

export interface CartInfoState {
  cartInfo: ProductInfoModel[];
}

export const initialState: CartInfoState = {
  cartInfo: [],
};

const cartInfoReducer = createReducer(
  initialState,
  on(
    loadCartInfos,
    (state) => {
      return state;
    }
  ),
  on(
    loadCartInfosSuccess,
    (state) => {
      return state;
    }
  ),
  on(
    loadCartInfosFailure,
    (state) => {
      return state;
    }
  ),
  on(
    deleteProductFromCart,
    (state) => {
      return state;
    }
  ),
  on(
    addProductToCart,
    (state, action) => {
      return {
        ...state,
        cartInfo: [...state.cartInfo, { ...action.product }]
      };
    }
  ),
);

export function cartReducer(state: CartInfoState | undefined, action: Action) {
  return cartInfoReducer(state, action);
}
