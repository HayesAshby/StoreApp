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

const actions = union({
  loadCardsInfos,
  loadCardsInfosSuccess,
  loadCardsInfosFailure
});

export type CardInfoActions = typeof actions;
