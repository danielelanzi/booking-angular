import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-no-results',
  template: `
    <!-- CONTENT -->
      <div class="wrapper centered">
        <div class="card vh-centered">
          <div class="title">No Results</div>
          <div class="content">
            In this demo you can find results only Milano and Roma
          </div>
          <button type="submit" routerLink="../">Back</button>
        </div>
      </div>
  `,
  styles: [
  ]
})
export class NoResultsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
