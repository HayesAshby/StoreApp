import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProductInfoModel } from 'src/app/reducers/product-info.model';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {

  // TODO: refactor @Output in sibling and parent components to use a service instead
  // have the service use an observable and be able to update dynamically
  // with data to populate the form and also no data.
  @Input() public productItem: ProductInfoModel;

  public path: string;

  public productForm = new FormGroup({
    id: new FormControl(''),
    title: new FormControl(''),
    type: new FormControl(''),
    description: new FormControl(''),
    filename: new FormControl(''),
    price: new FormControl(''),
    rating: new FormControl(''),
  });

  constructor() { }

  ngOnInit(): void {
  }

}
