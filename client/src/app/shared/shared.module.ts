import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogItemComponent } from './catalog-item/catalog-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { UsCurrencyPipe } from './pipes/currency-us.pipe';

@NgModule({
  declarations: [CatalogItemComponent, StarRatingComponent, UsCurrencyPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    CatalogItemComponent,
    UsCurrencyPipe
  ]
})
export class SharedModule { }
