import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-imac-subpage-component',
  templateUrl: './imac-subpage.component.html',
  styleUrls: [ './imac-subpage.component.scss' ]
})
export class ImacSubpageComponent implements OnInit {
  @Input() subpageData: any;

  ngOnInit(): void {
  }

  returnScreenSize(screenSize) {
    return this.subpageData.filter((m) => m.screenSize === screenSize);
  }

  getNumberWithDot(number: number) {
    return `${ number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.') }`;
  }
}
