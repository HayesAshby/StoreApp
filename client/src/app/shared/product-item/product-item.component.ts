import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/reducers';
import { deleteProduct, addProduct } from 'src/app/actions/product-info.actions';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

@Input() public title;
@Input() public description;
@Input() public price;
@Input() public rating;
@Input() public filename;

public path; // = `assets/images/${this.filename}`;

  constructor(private store: Store<State>) { }

  ngOnInit(): void {
    this.path = `assets/images/${this.filename}`;
  }

  handleAddToCart() {
    this.store.dispatch(addProduct({title: this.title}));
  }
  handleItemDelete() {
    this.store.dispatch(deleteProduct({title: this.title}));
  }

}
