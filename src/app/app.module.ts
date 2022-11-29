import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutUsComponent } from './about-us.component/about-us.component';
import { WhyUsComponent } from './why-us.component/why-us.component';
import { HomeComponent } from './home.component/home.component';
import { PlacesToGoComponent } from './places-to-go.component/places-to-go.component';
import { TravelQueriesComponent } from './travel-queries.component/travel-queries.component';
import { ConnectComponent } from './connect.component/connect.component';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { TravelPlaceComponent } from './TravelPlaceComponent/travel-place.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    WhyUsComponent,
    HomeComponent,
    PlacesToGoComponent,
    TravelQueriesComponent,
    ConnectComponent,
    TravelPlaceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [TravelPlaceComponent],
})
export class AppModule { }
