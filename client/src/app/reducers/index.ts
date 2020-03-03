import { ActionReducerMap, MetaReducer } from '@ngrx/store';
import { environment } from '../../environments/environment';
import { ProductInfoState, reducer } from './product-info.reducer';

export interface State {
  productInfoState: ProductInfoState;
}

export const reducers: ActionReducerMap<State> = {
  productInfoState: reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
