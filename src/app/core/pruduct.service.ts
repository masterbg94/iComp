import {Injectable} from '@angular/core';

import {AllProductsData, ProductMock} from './product.mock';
import {Observable, of} from 'rxjs';

@Injectable()
export class ProductService {
   public iphones: any = ProductMock;
   public prodData: any = AllProductsData;

    getIphones(): Observable<any> {
        return of(this.iphones);
    }

    getAllProdData(): Observable<any> {
        return of(this.prodData);
    }
}
