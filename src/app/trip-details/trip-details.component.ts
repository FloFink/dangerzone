import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';

import activities from '../../../activities.json';
import { ImageModalComponent } from '../image-modal/image-modal.component';

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
  public danger: number = 1;


  openDialog() {
    const dialogRef = this.dialog.open(ImageModalComponent, {
      height: '90%',
      width: '90%',
      panelClass: 'full-screen-modal',
      data: this.url
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
  constructor(private route: ActivatedRoute, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.id = Number(this.route.snapshot.paramMap.get('id')) - 1 || 0

    this.title = activities[this.id]['title'];
    this.description = activities[this.id]['description'];
    this.url = activities[this.id]['url'];
    this.danger = activities[this.id]['danger'] || 3;
  }

}