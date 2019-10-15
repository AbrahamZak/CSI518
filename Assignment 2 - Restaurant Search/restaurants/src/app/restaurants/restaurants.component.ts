import { Component, OnInit, SimpleChanges } from '@angular/core';
import { RestaurantsApiService } from '../restaurants-api.service';
import { DataService } from "../data.service";

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurantsResults;
  message: string;

  constructor(private restaurantsAPI: RestaurantsApiService, private data: DataService) { 
  }

  ngOnInit() {
    this.data.currentMessage.subscribe(message => this.message = message)
    this.update(this.message);

    this.data.currentMessage
    .subscribe((value: string) => this.update(value));  }

  update(query){
    this.restaurantsAPI.getRestaurants(query).subscribe((data) => {
      this.restaurantsResults = data['results'];
    })
    }

}
