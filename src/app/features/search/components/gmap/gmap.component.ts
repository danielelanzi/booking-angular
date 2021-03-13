import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-gmap',
  template: `
    <img src="https://maps.googleapis.com/maps/api/staticmap?center={{active?.location.address}}&zoom=15&size=500x200&key=" width="100%" height="200">
    <div class="address">
      <div class="font-big">{{active?.name}}</div>
      <div class="font-small">{{active?.location.address}}</div>
    </div>
  `,
  styles: [
  ]
})
export class GmapComponent implements OnInit {

  @Input() active: Hotel;

  constructor() { }

  ngOnInit(): void {
  }

}
