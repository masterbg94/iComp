import { AfterViewInit, Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {ActivatedRoute} from '@angular/router';

import {ProductService} from '../../../core/pruduct.service';

declare const MagicZoom: any;
declare const MagicScroll: any;

@Component({
    templateUrl: 'item-detail.component.html',
    styleUrls: ['item-detail.component.scss']
})
export class ItemDetailComponent implements OnInit, AfterViewInit {
    constructor(
        private route: ActivatedRoute,
        private productService: ProductService,
        private matSnackBar: MatSnackBar,
    ) {
    }

    public productItem: any;
    public allProducts: any;
    defaultProductPrice: number;
    selectedPrice = 0;

    public selectedCpu: any;
    public selectedMemory: any;
    public selectedStorage: any;
    public selectedGpu: any;
    public selectedMouse: any;
    public selectedKeyboard: any;

    returnDataById(params) {
        this.productService.getAllProdData().subscribe((resp: any) => {
            this.allProducts = resp;
            if (params.item === 'imac') {
                this.productItem = this.allProducts.imacs.find(x => x.id === parseInt(params.id, 10));
            } else if (params.item === 'macbook-air') {
                this.productItem = this.allProducts.macbookAir.find(x => x.id === parseInt(params.id, 10));
            } else if (params.item === 'macbook-pro') {
                this.productItem = this.allProducts.macbookPro.find(x => x.id === parseInt(params.id, 10));
            } else if (params.item === 'iphone') {
                this.productItem = this.allProducts.iphones.find(x => x.id === parseInt(params.id, 10));
            }
            console.log('productItem', this.productItem);

            this.selectedCpu = this.productItem.cpu;
            this.selectedMemory = this.productItem.ram;
            this.selectedGpu = this.productItem.gpu;
            this.selectedMouse = 'Magic Mouse 2';
            this.selectedKeyboard = 'Magic Keyboard';
            this.selectedStorage = this.productItem.storage;
            this.defaultProductPrice = this.productItem.price;
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
          panelClass: ['warn-snack-bar']
      });
    }
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
            console.log(event);
            this.productItem.storage = this.selectedStorage;
            this.productItem.price = this.defaultProductPrice;
            this.productItem.price = this.productItem.price + event.price  + this.selectedPrice;
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

    addToCard() {
        const newProdItem = {
            name: this.productItem.name,
            cpu: this.productItem.cpu,
            storage: this.productItem.storage,
            ram: this.productItem.ram,
            gpu: this.productItem.gpu,
        };
        console.log('Dodato u korpu:', newProdItem);
    }


    ngOnInit(): void {
        this.route.params.subscribe(r => {
            this.returnDataById(r);
        });
    }

    getNumberWithDot(number: number) {
        return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    }
}
