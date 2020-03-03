import { data } from '../../assets/products.json';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable()
export class ProductInfoService {
    getProductInfo(): Observable<any> {
        return of(data);
    }

    
}
