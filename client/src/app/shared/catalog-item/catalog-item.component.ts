import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

@Input() public productName;
@Input() public price;
  constructor() { }

  ngOnInit(): void {
  }

}
