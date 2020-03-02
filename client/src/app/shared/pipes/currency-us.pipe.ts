import { Pipe, PipeTransform } from '@angular/core';
import { formatCurrency } from '@angular/common';

/**
 * This pipe uselessly nests an existing angular pipe.
 */
@Pipe({
  name: 'usCurrency',
})
export class UsCurrencyPipe implements PipeTransform {
    transform(value: number): string {
        const currencyString = formatCurrency(value, 'en-us', '$');
        return currencyString;
    }
}
