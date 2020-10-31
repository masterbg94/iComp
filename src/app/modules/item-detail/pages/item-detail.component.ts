import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { ProductService } from '../../../core/pruduct.service';

declare const MagicZoom: any;
declare const MagicScroll: any;

@Component({
  templateUrl: 'item-detail.component.html',
  styleUrls: [ 'item-detail.component.scss' ]
})
export class ItemDetailComponent implements OnInit, AfterViewInit, OnDestroy {
  public productItem: any = null;
  public allProducts: any;
  productImages = [];
  defaultProductPrice: number;
  selectedPrice = 0;
  reloaded = false;
  destroy$: Subject<null> = new Subject();

  public selectedCpu: any;
  public selectedMemory: any;
  public selectedStorage: any;
  public selectedGpu: any;
  public selectedMouse: any;
  public selectedKeyboard: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private matSnackBar: MatSnackBar,
  ) {
  }

  ngOnInit(): void {
    this.route.params.subscribe(r => {
      MagicZoom.stop();
      this.returnDataById(r);
    });
  }

  public ngAfterViewInit(): void {
    MagicScroll.start();
    MagicZoom.start();

    if (!this.productItem.available) {
      this.matSnackBar.open('Izvinjavamo se trazeni prozivod ' +
        'trenutno nije dostupan ali ga mozete naruciti. Vreme cekanja je 3 radne nedelje.',
        'Zatvori', {
          verticalPosition: 'bottom',
          panelClass: [ 'warn-snack-bar' ]
        });
    }
  }

  public ngOnDestroy() {
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

  returnDataById(params) {
    this.reloaded = false;
    this.allProducts = null;

    this.productService.getAllProdData().pipe(takeUntil(this.destroy$))
      .subscribe((resp: any) => {
        this.allProducts = resp;
        if (params.item === 'imac') {
          this.productItem = this.allProducts.imacs.find(x => x.id === parseInt(params.id, 10));
        } else if (params.item === 'macbook-air') {
          this.productItem = this.allProducts.macbookAir.find(x => x.id === parseInt(params.id, 10));
        } else if (params.item === 'macbook-pro') {
          this.productItem = this.allProducts.macbookPro.find(x => x.id === parseInt(params.id, 10));
        } else if (params.item === 'iphone') {
          this.productItem = this.allProducts.iphones.find(x => x.id === parseInt(params.id, 10));
        } else if (params.item === 'ipad') {
          this.productItem = this.allProducts.ipads.find(x => x.id === parseInt(params.id, 10));
        } else if (params.item === 'iwatch') {
          this.productItem = this.allProducts.iwatch.find(x => x.id === parseInt(params.id, 10));
        } else if (params.item === 'mac-pro') {
          this.productItem = this.allProducts.macPro.find(x => x.id === parseInt(params.id, 10));
        } else if (params.item === 'mac-mini') {
          this.productItem = this.allProducts.macMini.find(x => x.id === parseInt(params.id, 10));
        }

        this.productImages.push(...this.productItem.images);
        console.log('Product images', this.productImages);

        this.selectedCpu = this.productItem.cpu;
        this.selectedMemory = this.productItem.ram;
        this.selectedGpu = this.productItem.gpu;
        this.selectedMouse = 'Magic Mouse 2';
        this.selectedKeyboard = 'Magic Keyboard';
        this.selectedStorage = this.productItem.storage;
        this.defaultProductPrice = this.productItem.price;

        this.reloaded = true;
      });
  }

  passValue(event, x) {
    if (x === 'cpu') {
      this.selectedCpu = event.name;
      this.selectedPrice = this.selectedPrice + event.price;
      this.productItem.cpu = this.selectedCpu;
      this.productItem.price = this.defaultProductPrice;
      this.productItem.price = this.productItem.price + this.selectedPrice;
    }

    if (x === 'storage') {
      this.selectedStorage = event.name;
      this.selectedPrice = this.selectedPrice + event.price;
      this.productItem.storage = this.selectedStorage;
      this.productItem.price = this.defaultProductPrice;
      this.productItem.price = this.productItem.price + event.price + this.selectedPrice;
    }

    if (x === 'ram') {
      this.selectedMemory = event.name;
      this.selectedPrice = this.selectedPrice + event.price;
      this.productItem.ram = this.selectedMemory;
      this.productItem.price = this.defaultProductPrice;
      this.productItem.price = this.productItem.price + this.selectedPrice;
    }

    if (x === 'gpu') {
      this.selectedGpu = event.name;
      this.selectedPrice = this.selectedPrice + event.price;
      this.productItem.gpu = this.selectedGpu;
      this.productItem.price = this.defaultProductPrice;
      this.productItem.price = this.productItem.price + this.selectedPrice;
    }

    if (x === 'mouse') {
      this.selectedMouse = event.name;
      this.selectedPrice = this.selectedPrice + event.price;
      this.productItem.price = this.defaultProductPrice;
      this.productItem.price = this.productItem.price + event.price;
      this.productItem.price = this.productItem.price + this.selectedPrice;
    }

    if (x === 'keyboard') {
      this.selectedKeyboard = event.name;
      this.selectedPrice = this.selectedPrice + event.price;
      this.productItem.price = this.defaultProductPrice;
      this.productItem.price = this.productItem.price + event.price;
      this.productItem.price = this.productItem.price + this.selectedPrice;
    }
  }

  saveDataToLocalStorage(data) {
    let a = [];
    // Parse the serialized data back into an aray of objects
    a = JSON.parse(localStorage.getItem('cart')) || [];
    // Push the new data (whether it be an object or anything else) onto the array
    a.push(data);
    // Alert the array value

    this.matSnackBar.open('Proizvod je dodat u korpu. Proverite korpu ili nastavite sa kupovinom.', 'Zatvori');
    // Re-serialize the array back into a string and store it in localStorage
    localStorage.setItem('cart', JSON.stringify(a));
  }

  addToCard() {
    const newProdItem = {
      id: this.productItem.id,
      name: this.productItem.name,
      cpu: this.productItem.cpu,
      storage: this.productItem.storage,
      ram: this.productItem.ram,
      gpu: this.productItem.gpu,
      image: this.productItem.images[0],
      mouse: this.selectedMouse,
      keyboard: this.selectedKeyboard,
      price: this.productItem.price,
    };

    this.saveDataToLocalStorage(newProdItem);
  }

  getNumberWithDot(number: number) {
    return `${ number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }`;
  }
}
