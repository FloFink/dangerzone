import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TripListComponent } from './trip-list/trip-list.component';
import {TripDetailsComponent} from './trip-details/trip-details.component';
import {HomeComponent} from './home/home.component';
import {FeedbackFormComponent} from './feedback-form/feedback-form.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'trips', component: TripListComponent },
  { path: 'trip-detail/:id', component: TripDetailsComponent },
  { path: 'feedback', component: FeedbackFormComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
