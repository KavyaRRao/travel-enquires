import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'why-us',
  templateUrl: './why-us.component.html',
  styleUrls: ['./why-us.component.scss']
})
export class WhyUsComponent {
  
  constructor( private router : Router) {

  }

  navToHome() {
    this.router.navigate(['./why-us']);
  }
}
