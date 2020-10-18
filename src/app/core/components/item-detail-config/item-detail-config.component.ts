import {Component, Input} from '@angular/core';

@Component({
    selector: 'app-item-detail-config',
    templateUrl: 'item-detail-config.component.html',
    styleUrls: ['item-detail-config.component.scss']
})
export class ItemDetailConfigComponent {
    @Input() productItem: any;

    defaultProductPrice: number;
    selectedPrice = 0;
    
    public selectedCpu: any;
    public selectedMemory: any;
    public selectedStorage: any;
    public selectedGpu: any;
    public selectedMouse: any;
    public selectedKeyboard: any;

    getNumberWithDot(number: number) {
        return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
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

}
