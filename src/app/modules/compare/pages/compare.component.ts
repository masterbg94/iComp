import { Component, OnInit } from '@angular/core';

import { ProductService } from '../../../core/pruduct.service';

@Component({
  selector: 'app-compare',
  templateUrl: './compare.component.html',
  styleUrls: [ './compare.component.scss' ]
})
export class CompareComponent implements OnInit {

  public phone1selected: any;
  public phone2selected: any;
  public phone3selected: any;
  public iphones: any[];

  constructor(private productService: ProductService) {}

  public ngOnInit(): void {
    this.productService.getIphones()
      .subscribe((data: any) => {
        this.iphones = data;
        console.log(this.iphones);
      });
  }

  phoneChange(event: any) {
    this.phone1selected = this.iphones.find(x => x.name === event.target.value);
  }

  phoneChange2(event: any) {
    this.phone2selected = this.iphones.find(x => x.name === event.target.value);
  }

  phoneChange3(event: any) {
    this.phone3selected = this.iphones.find(x => x.name === event.target.value);
  }

}
