import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {TripDetailsComponent} from './trip-details/trip-details.component';
import {HomeComponent} from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripListComponent },
  { path: 'trip-detail/:id', component: TripDetailsComponent },
  { path: '', component: TripListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatGridListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
