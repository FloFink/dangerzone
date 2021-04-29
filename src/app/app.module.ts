import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { TripDetailsComponent } from './trip-details/trip-details.component';
import { MatSliderModule } from '@angular/material/slider';
import {MatCardModule} from '@angular/material/card';
import { TripListComponent } from './trip-list/trip-list.component';
import { MatListModule } from '@angular/material/list';
import {HeaderMenuComponent} from './header-menu/header-menu.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TripDetailsComponent,
    TripListComponent,
    HeaderMenuComponent,
    FeedbackFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatCardModule,
    MatListModule,
    MatToolbarModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
