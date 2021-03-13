import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartService } from 'src/app/core/services/cart.service';
import { Hotel, Room } from 'src/app/model/hotel';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  text = "Milan";
  hotels: Hotel[];
  active: Hotel;
  activeImage: string;

  constructor(
      private http: HttpClient,
      private cart: CartService,
      private router: Router
    ) {
    this.searchHotels(this.text);
   }

  ngOnInit(): void {
  }

  searchHotels(text: string){
    this.text = text;
    this.http.get<Hotel[]>("http://localhost:3000/hotels?q=" + text).subscribe(result => {
      if (!result.length) {
        this.router.navigateByUrl('no-results');
        return;
      }
      this.hotels = result;
      // this.active= this.hotels[0];
      this.setActive(this.hotels[0]);
    })
  }

  setActive(hotel: Hotel){
   this.active = hotel;
   this.activeImage = hotel.images[0];
  }

  sendEmail({email, msg}){
    window.alert(`sent:
    ${email}
    ${msg}
    ${this.active.email}
    `);
  }

  addToCart(active: Hotel, room: Room){
    this.cart.addToCart(active, room);

  }

}
