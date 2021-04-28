import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ExampleRoutingComponent} from './example-routing/example-routing.component';

const routes: Routes = [
  { path: 'example', component: ExampleRoutingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
