import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import { TravelPlaceComponent } from '../TravelPlaceComponent/travel-place.component';


@Component({
  selector: 'places-to-go',
  templateUrl: './places-to-go.component.html',
  styleUrls: ['./places-to-go.component.scss']
})
export class PlacesToGoComponent {

  places = [{
    name:   'Coorg',
    image: '../../assets/coorg.jpg',
    description: `Known as the “Scotland of India”, the wildlife sanctuaries, the birthplace of rivers, waterfalls, mountains, and much more, enthrall tourists making them
    want to come back for more..`
  },
  {
    name:   'Cochin',
    image: '../../assets/coc.jpg',
    description: `Kochin, also known as Cochin is a major port city on the Malabar Coast of India bordering the Laccadive Sea,which is a part of the Arabian Sea. It is part of the district of Ernakulam in the state of Kerala and is commonly referred to as Ernakulam.The current metropolitan limits of Kochi include the mainland Ernakulam, Fort Kochi, the suburbs of Edapally Kalamassery, Aluva and Kakkanad to the northeast;Tripunithura to the southeast; and a group of islands closely scattered in the Vembanad Lake.Called the "Queen of the Arabian Sea",`
  },
  {
    name:   'Dandeli',
    image: '../../assets/Dan.jpg',
    description: `Dandeli resorts have become an attraction for wealthier, mobile residents from India and elsewhere. The biodiversity in the forest has attracted sufficient tourism to support a number of resorts in the vicinity of Dandeli.The government has promoted eco-tourism with proper planning of the healthy breeding of wild animals.The natural environment of the area attracts tourists from other parts of India and abroad.It is an adventure sports destination, and a white-water rafting destination in South India.It is one of the few locations where rafting is possible even in peak summer months of March to June.Dandeli also offers many other adventure activities like Kayaking also known as Canoeing, Zorbing, Jungle safari, River crossing etc.`
  },
  {
    name:   'Goa',
    image: '../../assets/goa.jpg',
    description: `Tourism is generally focused on the coastal areas of Goa, with lower tourist activity inland. In 2010, there were more than 2 million tourists reported to have visited Goa, about 1.2 million of whom were from abroad. As of 2013, Goa was a destination of choice for Indian and foreign tourists, particularly Britons and Russians, with limited means who wanted to party.The state was hopeful that changes could be made which would attract a more upscale demographic.`
  },
  {
    name:   'Gokarna',
    image: '../../assets/gok.jpg',
    description: `Gokarna is not very conventionally touristy. The beaches are meant for a slow, relaxed holiday and everything on the beach goes at the same relaxed pace.Full of coconut and palm trees, the ocean and clean sands, Gokarna is a 'one of a kind' place in the country.`
  },
  {
    name:   'Munnar',
    image: '../../assets/mun.jpg',
    description: `Munnar is a town and hill station in the Idukki district of the southwestern Indian state of Kerala. Munnar is situated at around 1,600 metres (5,200 ft) above mean sea level,in the Western Ghats mountain range. Munnar is also called the "Kashmir of South India" and is a popular honeymoon destination Munnar is famous for its tea estates, greenery, blankets of mist forming natural-view points.`
  },
  {
    name:   'Mangalore',
    image: '../../assets/mang.jpg',
    description: `Mangalore lies between the Arabian Sea and the Western Ghats.The city's temples and buildings include the Mangaladevi Temple, Kadri Manjunath Temple,St Aloysius Chapel, the Rosario Cathedral, Milagres Church, Dargah of Hazrat Shareef ul Madni at Ullal,& the Zeenath Baksh Jumma Masjid in Bunder.The city is known for beaches such as Panambur, Tannirbhavi,NITK beach, Sasihithlu beach, Someshwara beach, Ullal beach, Kotekar beach and Batapady beach.Panambur and Thannirbhavi beaches attract tourists from across the country.`
  },
  {
    name:   'Ooty',
    image: '../../assets/ooty.jpg',
    description: `Nestled amidst Nilgiri hills, Ooty, also known as Udagamandalam, is a hill station in Tamil Nadu which serves as a top-rated tourist destination. Once regarded as the summer headquarters of the East India Company, the Queen of the hills is a picturesque getaway. Dotted with tea gardens, serene waterfalls, winding country lanes, and charming colonial architecture,Ooty is the perfect respite everyone. Popular among couples and honeymooners, s Ooty allures its visitors with the panoramic views of the Nilgiri mountains.`
  },
  {
    name:   'Pondicherry',
    image: '../../assets/pon.jpg',
    description: `Blossoming bougainvilleas, crumbling cathedrals on leafy boulevards and 18th-century colonial buildings colour the former French colony of Pondy, which sits on the Bay of Bengal. But it's also unmistakably Indian, with colourful festivals throughout the year, several mosques and the Sri Aurobindo Ashram. Quiet beaches stretch north and south from town, good for swimming and sunrise strolls. Pondy is a popular weekend getaway destination from Chennai and is easy to navigate on foot or by bicycle.`
  },
  {
    name:   'Sakleshpur',
    image: '../../assets/sak.jpg',
    description: `A hill station in the heights of Western Ghats of India, Sakleshpur is a small town located in the state of Karnataka. Famous for being surrounded by a surprising number of plantations of coffee, tea and spices, Sakleshpur’s economy thrives on these. Apart from that, with the recent development in the tourism happening around the town, places to visit in Sakleshpur have recently gathered a lot of fame for themselves because of their beauty and the kind of experiences that they harbour, both of which are unparalleled.`
  },
  {
    name:   'Udupi',
    image: '../../assets/ud.jpg',
    description: `Udupi is a coastal town in Karnataka, most famous for its vegetarian cuisine and South Indian restaurants all over the country. With beautifully carved ancient temples, laidback beaches and unexplored forests, Udupi is also the place where the educational hub of Manipal is located. Situated 60 km from Mangalore, Udupi is famous for its temple culture and beautiful beaches.`
  },
  {
    name:   'Wayanad',
    image: '../../assets/way.jpg',
    description: `Wayanad Tourism replete with waterfalls, historical caves, comfortable resorts and homestays,Wayanad in Kerala is famous for its spice plantations and wildlife. Walking through the sprawling spice plantations, trekking to the pre-historic caves and experiencing a resort holiday are one of the many things you can do to get a taste of Wayanad.`
  },
  
  ]
  
  constructor( private router : Router, private dialog : MatDialog) {

  }

  navToHome() {
    this.router.navigate(['./']);
  }

  openDialog(place: any) {
    let dialogRef = this.dialog.open(TravelPlaceComponent, {
     data: {place}
    });
  }
}
