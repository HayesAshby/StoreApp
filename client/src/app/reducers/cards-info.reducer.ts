import { CardInfoModel } from './card-info.model';
import { Action, createReducer, on } from '@ngrx/store';
import { loadCardsInfos, loadCardsInfosSuccess } from '../actions/cards-info.actions';


export const cardsInfoFeatureKey = 'cardsInfo';

export interface CardsInfoState {
  cardInfo: CardInfoModel[];
}

export const initialState: CardsInfoState = {
  cardInfo: [],
};

const cardsInfoReducer = createReducer(
  initialState,
  on(
    loadCardsInfos,
    (state) => {
      return state;
    }
  ),
  on(
    loadCardsInfosSuccess,
    (state, action) => {
      return {
        ...state,
        cardInfo: action.data
      };
    }
  )
);

export function reducer(state: CardsInfoState | undefined, action: Action) {
  return cardsInfoReducer(state, action);
}