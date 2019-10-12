import { Component, OnInit } from '@angular/core';
import { MapsApiServiceService } from '../maps-api-service.service';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurants;
  constructor(private restaurantsAPI: MapsApiServiceService) { }
  ngOnInit() {
    this.restaurantsAPI.getRestaurants().subscribe((data) => {
      console.log(data);
      this.restaurants = data['results'];
    })
  }

}
