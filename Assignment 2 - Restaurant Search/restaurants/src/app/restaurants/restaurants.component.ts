import { Component, OnInit, SimpleChanges } from '@angular/core';
import { RestaurantsApiService } from '../restaurants-api.service';
import { DataService } from "../data.service";
import { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } from 'constants';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {
  restaurantsResults;
  parentMessage;
  message: string;
  status = 0;

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
    this.status = 0;
    }

    onSelect(restaurant){
      this.parentMessage = restaurant;
      this.status = 1;
    }

    goBack(){
      this.status = 0;
    }
}
