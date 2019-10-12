import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MapsApiServiceService {

  API_KEY:string ="AIzaSyAURLmSdQ6xkXOlp5Bv0D-kDJmHgZUGUOQ";
  location:string = "Albany"
  constructor(private httpClient: HttpClient) { }
  public getRestaurants(){
    return this.httpClient.get('https://maps.googleapis.com/maps/api/place/textsearch/json?query=$(this.location}+in+11229&key=${this.API_KEY}');
  }
}
