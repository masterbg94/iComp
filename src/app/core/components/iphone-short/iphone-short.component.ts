import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-iphone-short-component',
  templateUrl: './iphone-short.component.html',
  styleUrls: [ './iphone-short.component.scss' ]
})
export class IphoneShortComponent {
  @Input()
  data: any;
}
