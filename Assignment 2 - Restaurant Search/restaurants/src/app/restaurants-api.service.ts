import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RestaurantsApiService {
  API_KEY:string = "XXXXXXXXX";
  
  constructor(private httpClient: HttpClient) { }

  public getRestaurants(query){
    return this.httpClient.get(`https://maps.googleapis.com/maps/api/place/textsearch/json?query=restaurants+near+${query}&key=${this.API_KEY}`);
  }
}

