import { createAction, props, union } from '@ngrx/store';
import { CardInfoModel } from '../reducers/card-info.model';

export const loadCardsInfos = createAction(
  '[CardsInfo] Load CardsInfos'
);

export const loadCardsInfosSuccess = createAction(
  '[CardsInfo] Load CardsInfos Success',
  props<{ data: CardInfoModel[] }>()
);

export const loadCardsInfosFailure = createAction(
  '[CardsInfo] Load CardsInfos Failure',
  props<{ error: Error }>()
);

export const deleteProduct = createAction(
  '[CardsInfo] Delete Product',
  props<{title: string}>()
);

export const addProduct = createAction(
  '[CardsInfo] Add Product',
  props<{title: string}>()
);

const actions = union({
  loadCardsInfos,
  loadCardsInfosSuccess,
  loadCardsInfosFailure,
  deleteProduct,
  addProduct
});

export type CardInfoActions = typeof actions;
