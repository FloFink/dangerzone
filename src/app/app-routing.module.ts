import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { MatGridListModule } from '@angular/material/grid-list';

const routes: Routes = [
  { path: 'trip-list', component: TripListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatGridListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
