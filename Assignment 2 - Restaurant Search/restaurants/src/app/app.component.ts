import { Component } from '@angular/core';
import { RestaurantsApiService } from './restaurants-api.service';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { DataService } from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent{
  title = 'restaurants';
  message:string;
  status = 0;

  constructor(private data: DataService) { }

  newMessage(value: string) {
    this.status = 1;
    this.data.changeMessage(value);
  }
}

