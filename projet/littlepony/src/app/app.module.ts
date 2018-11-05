import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesComponent } from './races/races.component';
import { PonyFormComponent } from './pony-form/pony-form.component';

import {RouterModule, Routes } from  '@angular/router';
import { FormsModule } from '@angular/forms';
import { RaceFormComponent } from './race-form/race-form.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {PickListModule} from 'primeng/picklist';

import{ReactiveFormsModule} from  '@angular/forms';
import { PoneyReactiveFormComponent } from './poney-reactive-form/poney-reactive-form.component';
const routes : Routes =
[
  {path:'',component:RacesComponent},
  {path:'Ponies',component:PoniesComponent},
  {path:'Races', component:RacesComponent},
  {path:'addPony',component:PonyFormComponent},
  {path:'addRace',component:RaceFormComponent},
  {path:'addPonyRF', component: PoneyReactiveFormComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    PonyDetailsComponent,
    PoniesComponent,
    RaceDetailsComponent,
    RacesComponent,
    PonyFormComponent,
    RaceFormComponent,
    PoneyReactiveFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    PickListModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
