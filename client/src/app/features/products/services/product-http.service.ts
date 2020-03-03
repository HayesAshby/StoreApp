import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { data } from '../../../../assets/products.json';
@Injectable({
  providedIn: 'root'
})
export class ProductHttpService {

  constructor() { }

  getProductInfo(): Observable<any> {
    return of(data);
}
}
