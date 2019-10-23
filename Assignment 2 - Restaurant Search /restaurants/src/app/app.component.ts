import {} from 'googlemaps';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'restaurants';

constructor(private router: Router) { }

newMessage(search) {
  this.router.navigateByUrl('/restaurants/' + search);
  }
}