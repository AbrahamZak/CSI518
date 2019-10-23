import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router) { 
    this.router.routeReuseStrategy.shouldReuseRoute = () => false; 
  }

  ngOnInit() {
    let placeID = this.route.snapshot.paramMap.get('id');
    var request = {
      placeId: placeID,
    };
    var container = document.getElementById('details') as HTMLDivElement;
  var service = new google.maps.places.PlacesService(container);
  
  service.getDetails(request, callback);
  
  function callback(results, status) {
      if (status == google.maps.places.PlacesServiceStatus.OK) {
            var image = '<img src="' + results.photos[0].getUrl({maxWidth: 400, maxHeight: 400}) + '" class="card-img-top">'
            container.innerHTML += image + '<h5 class = "card-title">' +  results.name + '</h5> <p class="card-text"><strong>' + parseFloat(results.rating).toFixed(2); + ' / 5</strong></p>'
            container.innerHTML += '<p class= "card-text">' + results.formatted_address + '</p>'
        }
      }
    }
  }
