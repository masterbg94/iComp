import {Component, HostListener, OnInit} from '@angular/core';
import {ProductService} from '../../../core/pruduct.service';
import {take} from 'rxjs/operators';
import {AccessorizeData} from '../../../core/models/product.model';

@Component({
    templateUrl: 'equipment.component.html',
    styleUrls: ['equipment.component.scss']
})
export class EquipmentComponent implements OnInit {
    innerWidth: number;

    constructor(private productService: ProductService) {
    }

    allAccessorizes: AccessorizeData;
    selectedAcc: any[] = [];

    @HostListener('window:resize')
    public onResize(): void {
        this.innerWidth = window.innerWidth;
        console.log(this.innerWidth);
    }

    ngOnInit(): void {
        this.productService.getAllAccessorizes().pipe(take(1)).subscribe(
            (response: any) => {
                this.allAccessorizes = response;
                this.selectedAcc = response.mac;
            }, (error: any) => {
                console.log('error', error);
            }
        );
    }

    isSidenavOpened() {
        return (innerWidth > 1024);
    }

    toggleSelectedAcc(x) {
        if (x === 'mac') {
            this.selectedAcc = this.allAccessorizes.mac;
        }
        if (x === 'iphone') {
            this.selectedAcc = this.allAccessorizes.iphone;
        }
        if (x === 'ipad') {
            this.selectedAcc = this.allAccessorizes.ipad;
        }
        if (x === 'audio') {
            this.selectedAcc = this.allAccessorizes.audio;
        }
    }

}
