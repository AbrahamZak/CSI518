import { Component, OnInit } from '@angular/core';
import { RestaurantsApiService } from '../restaurants-api.service';
@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurantsResults;
  constructor(private restaurantsAPI: RestaurantsApiService) { }

  ngOnInit() {
    this.restaurantsAPI.getRestaurants().subscribe((data) => {
      console.log(data);
      this.restaurantsResults = data['results'];
    })
  }

}
