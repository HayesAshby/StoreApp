import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../environments/environment';
import { CardsInfoState, reducer } from './cards-info.reducer';

export interface State {
  cardInfoState: CardsInfoState;
}

export const reducers: ActionReducerMap<State> = {
  cardInfoState: reducer,
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
