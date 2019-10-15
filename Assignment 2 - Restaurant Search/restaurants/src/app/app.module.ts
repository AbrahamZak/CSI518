import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RestaurantsApiService } from './restaurants-api.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    RestaurantsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [RestaurantsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { 
  RestaurantsComponent;
}
