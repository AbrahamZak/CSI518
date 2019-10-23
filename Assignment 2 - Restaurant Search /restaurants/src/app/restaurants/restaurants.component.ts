import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit() {
  let queryEntry = this.route.snapshot.paramMap.get('query');
     var request = {
      query: "restaurants near " + queryEntry
  };
  
  var container = document.getElementById('results') as HTMLDivElement;
  var service = new google.maps.places.PlacesService(container);
  
  service.textSearch(request, callback);
  
  function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
     container.innerHTML += '<a href="/profile/' + results[i].place_id + '"class="list-group-item"><strong>' + results[i].name + '</strong></a>';
          }
        }
      }
    }
    }
  


