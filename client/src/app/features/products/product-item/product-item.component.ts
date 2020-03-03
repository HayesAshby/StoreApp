import { Component, OnInit, Input } from '@angular/core';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';
import { ProductService } from 'src/app/shared/services/product.service';
import { CartService } from 'src/app/shared/services/cart.service';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input() public product: ProductInfoModel;

  public path;

  constructor(private productService: ProductService, private cartService: CartService) { }

  ngOnInit(): void {
    this.path = `assets/images/${this.product.filename}`;
  }

  handleAddToCart() {
    return this.cartService.addProductToCart(this.product);
  }
  handleAddProduct() {
    return this.productService.addProduct(this.product.title);
  }
  handleItemDelete() {
    return this.productService.deleteProduct(this.product.id);
  }

}
