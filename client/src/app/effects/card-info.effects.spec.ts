import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { CardInfoEffects } from './card-info.effects';

describe('CardInfoEffects', () => {
  let actions$: Observable<any>;
  let effects: CardInfoEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CardInfoEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<CardInfoEffects>(CardInfoEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
