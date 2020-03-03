import { Component, OnInit } from '@angular/core';
import { Observable} from 'rxjs';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';
import { ProductService } from './services/product.service';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  public products$: Observable<ProductInfoModel[]> = this.service.getProductInfo();

  constructor(private service: ProductService) {}

  ngOnInit() {

  }

}
