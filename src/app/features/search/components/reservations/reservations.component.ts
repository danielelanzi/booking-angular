import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Hotel, Room } from 'src/app/model/hotel';

@Component({
  selector: 'app-reservations',
  template: `
    <div class="horiz-grid separator" *ngFor="let room of active?.rooms"
      (click)="addToCart.emit(room)"
    >
      <div>{{room.label}}</div>
      <div>
        € {{room.price}}
        <i class="ion-ios-cart"></i>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class ReservationsComponent implements OnInit {

  @Input() active: Hotel;
  @Output() addToCart: EventEmitter<Room> = new EventEmitter<Room>();

  constructor() { }

  ngOnInit(): void {
  }

}
