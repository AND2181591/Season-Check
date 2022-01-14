import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeasonDisplayComponent } from './season-display/season-display.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeasonDisplayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
