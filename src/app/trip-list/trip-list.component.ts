import {Component, OnInit} from '@angular/core';
import activities from '../../../activities.json';

@Component({
  selector: 'app-trip-list',
  templateUrl: './trip-list.component.html',
  styleUrls: ['./trip-list.component.scss']
})
export class TripListComponent implements OnInit {

  title = 'Available Trips';
  tripList = activities;

  constructor() {
  }

  ngOnInit(): void {
  }

}
