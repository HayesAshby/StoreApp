import { Component, OnInit } from '@angular/core';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.scss']
})
export class ProductManagerComponent implements OnInit {

  public products$: Observable<ProductInfoModel[]> = this.service.getProductInfo();
  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

}
