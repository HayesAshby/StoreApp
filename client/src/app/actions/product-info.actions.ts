import { createAction, props, union } from '@ngrx/store';
import { ProductInfoModel } from '../reducers/product-info.model';

export const loadProductInfo = createAction(
  '[ProductInfo] Load ProductInfo'
);

export const loadProductInfoSuccess = createAction(
  '[ProductInfo] Load ProductInfo Success',
  props<{ data: ProductInfoModel[] }>()
);

export const loadProductInfoFailure = createAction(
  '[ProductInfo] Load ProductInfo Failure',
  props<{ error: Error }>()
);

export const deleteProduct = createAction(
  '[ProductInfo] Delete Product',
  props<{title: string}>()
);

export const addProduct = createAction(
  '[ProductInfo] Add Product',
  props<{title: string}>()
);

const actions = union({
  loadProductInfo,
  loadProductInfoSuccess,
  loadProductInfoFailure,
  deleteProduct,
  addProduct
});

export type ProductInfoActions = typeof actions;
