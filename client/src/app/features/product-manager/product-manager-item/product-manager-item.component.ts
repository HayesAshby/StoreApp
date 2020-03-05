import { Component, OnInit, Input } from '@angular/core';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-product-manager-item',
  templateUrl: './product-manager-item.component.html',
  styleUrls: ['./product-manager-item.component.scss']
})
export class ProductManagerItemComponent implements OnInit {
  @Input() product: ProductInfoModel;

  // https://angular.io/guide/template-syntax#input-and-output-properties
  @Output() selectedItemEvent = new EventEmitter<ProductInfoModel>();

  constructor(private service: ProductService) { }

  ngOnInit(): void {
  }

  // impure function - reference to this.product is not a passed argument.
  handleEmitItem() {
    this.selectedItemEvent.emit(this.product);
  }

  handleItemDelete() {
    return this.service.deleteProduct(this.product.id);
  }
}
