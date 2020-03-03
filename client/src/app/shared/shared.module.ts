import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { UsCurrencyPipe } from './pipes/currency-us.pipe';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [StarRatingComponent, UsCurrencyPipe],
  imports: [
    CommonModule,
    MatIconModule

  ],
  exports: [
    StarRatingComponent,
    UsCurrencyPipe
  ]
})
export class SharedModule { }
