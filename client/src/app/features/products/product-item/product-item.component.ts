import { Component, OnInit, Input } from '@angular/core';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

@Input() public product: ProductInfoModel;

public path;

  constructor(private service: ProductService) { }

  ngOnInit(): void {
    this.path = `assets/images/${this.product.filename}`;
  }

  handleAddToCart() {
    return this.service.addProduct(this.product.title);
  }
  handleItemDelete() {
    return this.service.deleteProduct(this.product.id);
  }

}
