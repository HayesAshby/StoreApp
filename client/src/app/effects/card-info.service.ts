import { data } from '../../assets/products.json';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class CardInfoService {
    getCardInfo(): Observable<any> {
        return of(data);
    }
}