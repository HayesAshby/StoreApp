import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-catalog-item',
  templateUrl: './catalog-item.component.html',
  styleUrls: ['./catalog-item.component.scss']
})
export class CatalogItemComponent implements OnInit {

@Input() public title;
@Input() public description;
@Input() public price;
@Input() public rating;
@Input() public filename;

public path; // = `assets/images/${this.filename}`;

  constructor() { }

  ngOnInit(): void {
    this.path = `assets/images/${this.filename}`;
  }

}
