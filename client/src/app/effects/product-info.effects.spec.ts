import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable, of } from 'rxjs';

import { ProductInfoEffects } from './product-info.effects';

describe('ProductInfoEffects', () => {
  let actions$: Observable<any>; ;
  let effects: ProductInfoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductInfoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ProductInfoEffects>(ProductInfoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
