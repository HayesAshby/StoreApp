import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/shared/services/cart.service';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  public products$: Observable<ProductInfoModel[]> = this.service.getCartInfo();

  constructor(private service: CartService) { }

  ngOnInit(): void {
  }

}
