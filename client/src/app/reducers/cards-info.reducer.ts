import { CardInfoModel } from './card-info.model';
import { Action, createReducer, on } from '@ngrx/store';
import { loadCardsInfos, loadCardsInfosSuccess, deleteProduct, addProduct } from '../actions/cards-info.actions';


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
  ),
  on(
    deleteProduct,
    (state, action) => {
      const remainingProducts = state.cardInfo.filter((data) => data.title !== action.title);
      return {
        ...state,
        cardInfo: remainingProducts
      };
    }
  ),
  on(
    addProduct,
    (state, action) => {
      const product = state.cardInfo.find((data) => data.title === action.title);
      return {
        ...state,
        cardInfo: [{...product}, ...state.cardInfo]
      };
    }
  )
);

export function reducer(state: CardsInfoState | undefined, action: Action) {
  return cardsInfoReducer(state, action);
}
