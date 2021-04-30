import {Component, OnInit} from '@angular/core';
import activities from '../../../activities.json';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  title = 'Mögliche Erlebnisse';
  tripList = activities;

  selected = 0;

  dangerousenesses = [
    {value: 0, viewValue: 'Alle'},
    {value: 1, viewValue: '☠️'},
    {value: 2, viewValue: '☠️☠️'},
    {value: 3, viewValue: '☠️☠️☠️'},
    {value: 4, viewValue: '☠️☠️☠️☠️'},
    {value: 5, viewValue: '☠️☠️☠️☠️☠️'}
  ];

  constructor() {
  }

  ngOnInit(): void {
  }

}
