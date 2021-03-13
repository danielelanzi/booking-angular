import { Component, HostBinding, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  template: `
    <div>
      <div class="title" *ngIf="title">{{title}}</div>
      <div [ngClass]="{
        'content': padding,
        'center': centeredContent
      }">
        <ng-content></ng-content>
      </div>
    </div>
  `,
  styles: [
  ]
})
export class CardComponent implements OnInit {

  @Input() title: string;
  @Input() isScrollable: boolean;
  @Input() customCls: string;
  @Input() centeredContent: boolean;
  @Input() padding = true;

  @HostBinding('className') get className(){
    let cls = 'card';
    cls += this.isScrollable ? ' scrollable' : '';
    cls += this.customCls ? ` ${this.customCls}` : '';
    return cls;
  }

  constructor() { }

  ngOnInit(): void {
  }

}
