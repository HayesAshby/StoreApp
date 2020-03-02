import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { loadCardsInfos } from 'src/app/actions/cards-info.actions';
import { Observable } from 'rxjs';
import { CardInfoModel } from 'src/app/reducers/card-info.model';
import { tap } from 'rxjs/operators';


@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public products$: Observable<CardInfoModel[]>;

  constructor(private store: Store<State>) {
    this.store.dispatch(loadCardsInfos());

  }

  ngOnInit(): void {
    this.products$ = this.store
      .select(state => state.cardInfoState.cardInfo).pipe(
        tap(datas => { console.log('REACHED', datas) })
      );
  }

}
