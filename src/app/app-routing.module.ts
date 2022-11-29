import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us.component/about-us.component';
import { AppComponent } from './app.component';
import { ConnectComponent } from './connect.component/connect.component';
import { HomeComponent } from './home.component/home.component';
import { PlacesToGoComponent } from './places-to-go.component/places-to-go.component';
import { TravelQueriesComponent } from './travel-queries.component/travel-queries.component';
import { WhyUsComponent } from './why-us.component/why-us.component';


const routes: Routes = [
  { path: '', component: AppComponent,
    children: [
      { path: '', redirectTo: 'home',  pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'about-us', component: AboutUsComponent },
      { path: 'why-us', component: WhyUsComponent },
      { path: 'places-to-go', component: PlacesToGoComponent },
      { path: 'travel-queries', component: TravelQueriesComponent },
      { path: 'connect', component: ConnectComponent },

    ]
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }