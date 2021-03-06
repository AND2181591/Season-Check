import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SeasonDisplayComponent } from './season-display/season-display.component';
import { ErrorComponent } from './error/error.component';
import { SpinnerComponent } from './spinner/spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SeasonDisplayComponent,
    ErrorComponent,
    SpinnerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
