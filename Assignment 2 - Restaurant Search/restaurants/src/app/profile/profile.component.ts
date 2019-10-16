import { Component, OnInit, SimpleChanges, Input } from '@angular/core';
import { RestaurantsApiService } from '../restaurants-api.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  @Input() childMessage;

  constructor(private restaurantsAPI: RestaurantsApiService) { 
  }

  ngOnInit() {
  }


}
