import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  currentTab = 'about-us';
  
  constructor( private router : Router) {

  }

  navToHome() {
    this.router.navigate(['./']);
  }

  setCurrentTab(currentTab: string) {
    this.currentTab = currentTab;
  }
}
