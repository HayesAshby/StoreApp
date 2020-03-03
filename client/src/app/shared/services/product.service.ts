import { Injectable } from '@angular/core';
import { loadProductInfo, addProduct, deleteProduct } from 'src/app/actions/product-info.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  /**
   * The array of products returned by the http service
   */
  public products$: Observable<ProductInfoModel[]> = this.getProductInfo();

  constructor(private store: Store<State>) {
    this.store.dispatch(loadProductInfo());
  }

  getProductInfo(): Observable<ProductInfoModel[]> {
    return this.store
      .select(state => state.productInfoState.productInfo);
  }

  addProduct(title) {
    this.store.dispatch(addProduct({title}));

  }

  deleteProduct(id) {
    this.store.dispatch(deleteProduct({id}));
  }



}
