import {Injectable} from '@angular/core';

import {ProductMock} from './product.mock';
import {Observable, of} from 'rxjs';

@Injectable()
export class ProductService {
   public iphones: any = ProductMock;

    getIphones(): Observable<any> {
        return of(this.iphones);
    }
}
