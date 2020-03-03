import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '../../reducers';
import { loadProductInfo } from 'src/app/actions/product-info.actions';
import { Observable} from 'rxjs';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<ProductInfoModel[]>;

  constructor(private store: Store<State>) {
    this.store.dispatch(loadProductInfo());

  }

  ngOnInit(): void {
    this.products$ = this.store
      .select(state => state.productInfoState.productInfo);
  }

}
