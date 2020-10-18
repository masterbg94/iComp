import {Component, Input} from "@angular/core";

@Component({
    selector: 'app-item-detail-specs',
    templateUrl: 'item-detail-specs.component.html',
    styleUrls: ['item-detail-specs.component.scss']
})
export class ItemDetailSpecsComponent {
    @Input() productItem: any;

    getNumberWithDot(number: number) {
        return `${number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.')}`;
    }
}
