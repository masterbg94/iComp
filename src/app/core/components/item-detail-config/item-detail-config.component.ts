import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-item-detail-config',
  templateUrl: 'item-detail-config.component.html',
  styleUrls: [ 'item-detail-config.component.scss' ]
})
export class ItemDetailConfigComponent implements OnInit {
  @Input() productItem: any;
  defaultProductPrice: number;
  selectedCpu: any = '';
  selectedMemory: any = '';
  selectedStorage: any = '';
  selectedGpu: any = '';
  selectedMouse: any = '';
  selectedKeyboard: any = '';
  selectedColor: any;
  cpuPrice = 0;
  selectedCpuPrice = 0;
  selectedStoragePrice = 0;
  selectedRamPrice = 0;
  storagePrice = 0;
  gpuPrice = 0;
  mousePrice = 0;
  keyBoardPrice = 0;

  getNumberWithDot(number: number) {
    return `${ number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }`;
  }

  passValue(event, x) {
    if (x === 'cpu') {
      this.selectedCpu = event.name;
      this.selectedCpuPrice = event.price;
      this.productItem.cpu = this.selectedCpu;
    }

    if (x === 'storage') {
      this.selectedStorage = event.name;
      this.selectedStoragePrice = event.price;
      this.productItem.storage = this.selectedStorage;
    }

    if (x === 'ram') {
      this.selectedMemory = event.name;
      this.selectedRamPrice = event.price;
      this.productItem.ram = this.selectedMemory;
    }

    if (x === 'gpu') {
      this.selectedGpu = event.name;
      this.gpuPrice = event.price;
      this.productItem.gpu = this.selectedGpu;
    }

    if (x === 'mouse') {
      this.selectedMouse = event.name;
      this.mousePrice = event.price;
      this.productItem.mouse = this.selectedMouse;
    }

    if (x === 'keyboard') {
      this.selectedKeyboard = event.name;
      this.keyBoardPrice = event.price;
      this.productItem.keyboard = this.selectedKeyboard;
    }

    this.productItem.price = this.defaultProductPrice + this.selectedCpuPrice + this.selectedStoragePrice + this.selectedRamPrice + this.gpuPrice + this.mousePrice + this.keyBoardPrice;
  }

  public onClick(color: any) {
    this.selectedColor = color.colorName;
    console.log(color);
  }

  ngOnInit(): void {
    if (this.productItem.productConfig && this.productItem.productConfig.colorConfig) {
      this.selectedColor = this.productItem.productConfig.colorConfig[0].colorName;
    }

    this.defaultProductPrice = this.productItem.price;
    this.selectedCpu = this.productItem.cpu;
    this.selectedMemory = this.productItem.ram;
    this.selectedGpu = this.productItem.gpu;
    this.selectedMouse = 'Magic Mouse 2';
    this.selectedKeyboard = 'Magic Keyboard';
    this.selectedStorage = this.productItem.storage;
    this.defaultProductPrice = this.productItem.price;
  }

}
