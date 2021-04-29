import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-trip-details',
  templateUrl: './trip-details.component.html',
  styleUrls: ['./trip-details.component.scss']
})
export class TripDetailsComponent implements OnInit {

  public id: number = 0;
  public title: string = '';
  public description: string = '';
  public url: string = '';

  tripList = [
    {
      'id': 1,
      'title': 'Tauche zum tiefsten Punkt der Erde',
      'description': 'Tauche ab in den Mariannengraben bis zum tiefsten Punkt der Erde. Mit modernsten Technologien konnten wir eine Überlebensrate von über 50% erreichen. Es gibt also keinen Grund mehr es nicht zu tun.',
      'url': 'https://www.ard.de/image/104108/16x9/4788850120469361433/512'
    },
    {
      'id': 2,
      'title': 'Erlebe einen Flugzeugabsturz',
      'description': 'Sei Teil eines Flugzeugabsturzes und erlebe was es heisst dem Tod ins Auge zu blicken.',
      'url': 'https://i.ytimg.com/vi/SmHY3xqRmP4/maxresdefault.jpg'
    },
    {
      'id': 3,
      'title': 'Sei ein Auto',
      'description': 'Du wolltest schon immer einmal erleben wie sich Geschwindigkeit am eigenen Leib anfühlt? Dann sei Teil eines Autos und erlebe es! Zur Wahl steht eine Montage an der Front, Seite oder dem Heck.',
      'url': 'https://drivetribe.imgix.net/XgpFfu-4RDqvfHbIpyuNwA?w=2200&h=1237&fm=pjpg&auto=compress&fit=crop&crop=faces&max-w=1280&max-h=720'
    }
  ];

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id'))|| 0
    
    this.title = this.tripList[this.id]['title'];
    this.description = this.tripList[this.id]['description'];
    this.url = this.tripList[this.id]['url'];
  }

}
