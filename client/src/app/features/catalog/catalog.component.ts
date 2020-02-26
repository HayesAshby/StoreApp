import { Component, OnInit } from '@angular/core';
import { data } from '../../../assets/products.json';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.scss']
})
export class CatalogComponent implements OnInit {

  public products = data;

  // [
  //   {
  //     title: 'dog',
  //     price: 5,
  //     description: 'dogs',
  //     rating: 1
  //   },
  //   {
  //     title: 'dog',
  //     price: 5,
  //     description: 'dogs',
  //     rating: 1
  //   },
  //   {
  //     title: 'dog',
  //     price: 5,
  //     description: 'dogs',
  //     rating: 1
  //   },
  // ];




  constructor() { }

ngOnInit(): void {
  console.log(data);
  }

}
