import { Injectable } from '@angular/core';
import { deleteProductFromCart, addProductToCart } from 'src/app/actions/cart-info.actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { Observable } from 'rxjs';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private store: Store<State>) { }

  getCartInfo(): Observable<ProductInfoModel[]> {
    return this.store
      .select(state => state.cartInfoState.cartInfo);
  }

  addProductToCart(product: any) {
    this.store.dispatch(addProductToCart({ product }));

  }

  deleteProductFromCart(id) {
    this.store.dispatch(deleteProductFromCart({ id }));
  }
}
