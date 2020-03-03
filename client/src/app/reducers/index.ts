import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ProductInfoState, productReducer } from './product-info.reducer';
import { CartInfoState, cartReducer } from './cart-info.reducer';
export interface State {
  productInfoState: ProductInfoState;
  cartInfoState: CartInfoState;
}

export const reducers: ActionReducerMap<State> = {
  productInfoState: productReducer,
  cartInfoState: cartReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
