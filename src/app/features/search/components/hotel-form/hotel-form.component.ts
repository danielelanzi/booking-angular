import { Component, EventEmitter,Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-hotel-form',
  template: `
    <form #f="ngForm" (submit)="search.emit(f.value.text)">
      <input type="text" placeholder="City (Rome or Milan)" [ngModel]="text" name="text">
      <button type="submit">SEARCH</button>
    </form>
  `,
  styles: [
  ]
})
export class HotelFormComponent implements OnInit {

  @Input() text: string;
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

}
