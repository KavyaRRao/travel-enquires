import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'travel-queries',
  templateUrl: './travel-queries.component.html',
  styleUrls: ['./travel-queries.component.scss']
})
export class TravelQueriesComponent {
  
  constructor( private router : Router) {

  }

  navToHome() {
    this.router.navigate(['./']);
  }
}
