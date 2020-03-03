import { createAction, props, union } from '@ngrx/store';

export const loadCartInfos = createAction(
  '[CartInfo] Load CartInfos'
);

export const loadCartInfosSuccess = createAction(
  '[CartInfo] Load CartInfos Success',
  props<{ data: any }>()
);

export const loadCartInfosFailure = createAction(
  '[CartInfo] Load CartInfos Failure',
  props<{ error: any }>()
);

export const deleteProductFromCart = createAction(
  '[CartInfo] Delete Product From Cart',
  props<{ id: string }>()
);

export const addProductToCart = createAction(
  '[CartInfo] Add Product To Cart',
  props<{ product: any }>()
);

const actions = union({
  loadCartInfos,
  loadCartInfosSuccess,
  loadCartInfosFailure,
  deleteProductFromCart,
  addProductToCart
});

export type CartInfoActions = typeof actions;
