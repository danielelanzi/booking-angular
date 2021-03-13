import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { GmapComponent } from './components/gmap/gmap.component';
import { HotelListComponent } from './components/hotel-list/hotel-list.component';
import { HotelFormComponent } from './components/hotel-form/hotel-form.component';
import { ImageGalleryComponent } from './components/image-gallery/image-gallery.component';
import { NoResultsComponent } from './no-results.component';
import { RatesComponent } from './components/rates/rates.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { ServicesComponent } from './components/services/services.component';
import { StarsComponent } from './components/stars/stars.component';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search-routing.module';



@NgModule({
  declarations: [
    SearchComponent,
    HotelListComponent,
    HotelFormComponent,
    GmapComponent,
    ContactFormComponent,
    RatesComponent,
    ReservationsComponent,
    ServicesComponent,
    ImageGalleryComponent,
    StarsComponent,
    NoResultsComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    SearchRoutingModule
  ]
})
export class SearchModule { }
