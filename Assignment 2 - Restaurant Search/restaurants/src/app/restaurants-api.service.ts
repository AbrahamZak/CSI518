import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsApiService {
  API_KEY:string ="AIzaSyAURLmSdQ6xkXOlp5Bv0D-kDJmHgZUGUOQ";
  constructor(private httpClient: HttpClient) { }
  public getRestaurants(){
    return this.httpClient.get(`https://maps.googleapis.com/maps/api/place/textsearch/xml?query=restaurants+in+Sydney&key=${this.API_KEY}`);
  }
}

