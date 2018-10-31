import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { PoniesComponent } from './ponies/ponies.component';
import { RaceDetailsComponent } from './race-details/race-details.component';
import { RacesComponent } from './races/races.component';

@NgModule({
  declarations: [
    AppComponent,
    PonyDetailsComponent,
    PoniesComponent,
    RaceDetailsComponent,
    RacesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
