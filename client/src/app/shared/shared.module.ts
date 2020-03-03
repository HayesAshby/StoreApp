import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductItemComponent } from './product-item/product-item.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { MatIconModule } from '@angular/material/icon';
import { UsCurrencyPipe } from './pipes/currency-us.pipe';

@NgModule({
  declarations: [ProductItemComponent, StarRatingComponent, UsCurrencyPipe],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
  ],
  exports: [
    ProductItemComponent,
    UsCurrencyPipe
  ]
})
export class SharedModule { }
