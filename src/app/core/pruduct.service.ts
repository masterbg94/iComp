import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';

import { AllProductsData, ProductMock } from './product.mock';

@Injectable()
export class ProductService {
  public iphones: any = ProductMock;
  public prodData: any = AllProductsData;
  pageChanged: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  getIphones(): Observable<any> {
    return of(this.iphones);
  }

  getAllProdData(): Observable<any> {
    return of(this.prodData);
  }
}
