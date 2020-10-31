import { Component } from '@angular/core';

@Component({
  selector: 'app-agmap-component',
  templateUrl: './agmap.component.html',
  styleUrls: [ './agmap.component.scss' ]
})
export class AgmapComponent {
  lat = 43.851752;
  lng = 19.842029;
  zoom = 15;
  disejblskrol = false;
}
