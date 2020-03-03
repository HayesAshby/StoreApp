import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { loadProductInfo, loadProductInfoFailure, loadProductInfoSuccess } from '../actions/product-info.actions';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { ProductsHttpService } from '../features/products/services/products-http.service';


@Injectable()
export class ProductInfoEffects {

  constructor(private actions$: Actions, private service: ProductsHttpService) { }

  @Effect()
  getProductInfo$: Observable<any> = this.actions$.pipe(
    ofType(loadProductInfo),
    mergeMap(action => this.service.getProductInfo().pipe(
      map((data) => {
        return loadProductInfoSuccess({ data });
      }),
      catchError((err) => {
        return of(loadProductInfoFailure({ error: err }));
      })
    ))
  );


}
