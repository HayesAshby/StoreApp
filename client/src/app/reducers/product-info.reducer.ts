import { ProductInfoModel } from './product-info.model';
import { Action, createReducer, on } from '@ngrx/store';
import { loadProductInfo, loadProductInfoSuccess, deleteProduct, addProduct } from '../actions/product-info.actions';


export const productInfoFeatureKey = 'productInfo';

export interface ProductInfoState {
  productInfo: ProductInfoModel[];
}

export const initialState: ProductInfoState = {
  productInfo: [],
};

const productInfoReducer = createReducer(
  initialState,
  on(
    loadProductInfo,
    (state) => {
      return state;
    }
  ),
  on(
    loadProductInfoSuccess,
    (state, action) => {
      return {
        ...state,
        productInfo: action.data
      };
    }
  ),
  on(
    deleteProduct,
    (state, action) => {
      const remainingProducts = state.productInfo.filter((data) => data.title !== action.title);
      return {
        ...state,
        productInfo: remainingProducts
      };
    }
  ),
  on(
    addProduct,
    (state, action) => {
      const product = state.productInfo.find((data) => data.title === action.title);
      return {
        ...state,
        productInfo: [{...product}, ...state.productInfo]
      };
    }
  )
);

export function reducer(state: ProductInfoState | undefined, action: Action) {
  return productInfoReducer(state, action);
}
