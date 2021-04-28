import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import {ExampleRoutingComponent} from './example-routing/example-routing.component';

const routes: Routes = [
  { path: 'example', component: ExampleRoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), MatGridListModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
