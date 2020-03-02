import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { CardInfoService } from './card-info.service';
import { loadCardsInfos, loadCardsInfosFailure, loadCardsInfosSuccess } from '../actions/cards-info.actions';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';



@Injectable()
export class CardInfoEffects {

  @Effect()
  getCardInfo$: Observable<any> = this.actions$.pipe(
    ofType(loadCardsInfos),
    mergeMap(action => this.service.getCardInfo().pipe(
      map((data) => {
        return loadCardsInfosSuccess({ data });
      }),
      catchError((err) => {
        return of(loadCardsInfosFailure({ error: err }))
      })
    ))
  )

  constructor(private actions$: Actions, private service: CardInfoService) { }

}
