import {Component, HostListener, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-item-detail-specs',
  templateUrl: 'item-detail-specs.component.html',
  styleUrls: [ 'item-detail-specs.component.scss' ]
})
export class ItemDetailSpecsComponent implements OnInit{
  @Input() productItem: any;
  windowPosTop: number;
  elPosTop: number;

  @HostListener('window:scroll', ['$event'])
  show(event) {
    this.windowPosTop = window.pageYOffset;
    console.log('Scroll Event', window.pageYOffset );
    console.log('windowPosTop', this.windowPosTop );
    console.log('elPosTop', this.elPosTop );

    if (this.windowPosTop > (this.elPosTop + 100)) {
      console.log('vece od elPosTop');
    }
  }

  getNumberWithDot(number: number) {
    return `${ number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }`;
  }

  ngOnInit(): void {
    setTimeout(() => {
      this.elPosTop = document.getElementById('skroler').offsetTop;
    } );
  }

}
