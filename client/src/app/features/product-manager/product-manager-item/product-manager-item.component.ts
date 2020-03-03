import { Component, OnInit, Input } from '@angular/core';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-manager-item',
  templateUrl: './product-manager-item.component.html',
  styleUrls: ['./product-manager-item.component.scss']
})
export class ProductManagerItemComponent implements OnInit {
  @Input() product: ProductInfoModel;
  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  handleItemDelete() {
    return this.service.deleteProduct(this.product.id);
  }
}
