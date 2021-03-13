import { Component, Input, OnInit } from '@angular/core';
import { Hotel } from 'src/app/model/hotel';

@Component({
  selector: 'app-image-gallery',
  template: `
    <img [src]="activeImage" width="100%" height="150" alt="">
    <div class="nested">
      <div *ngFor="let img of active?.images"
        (click)="activeImage = img"
      >
        <img [src]="img" width="100%" alt=""></div>
    </div>
  `,
  styles: [
  ]
})
export class ImageGalleryComponent implements OnInit {

  @Input() active: Hotel;
  @Input() activeImage: string;

  constructor() { }

  ngOnInit(): void {
  }

}
