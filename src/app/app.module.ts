import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DatePickerComponent } from './datePickerComponent/date-picker/date-picker.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
  declarations: [AppComponent, DatePickerComponent],
  imports: [BrowserModule, AppRoutingModule, FontAwesomeModule],
  providers: [
    { provide: Window, useValue: window },
    { provide: LocationStrategy, useClass: HashLocationStrategy },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
