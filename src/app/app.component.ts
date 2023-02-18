import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'customDatePicker';
  minDate: Date; //This is lower limit to select the date
  maxDate: Date = new Date(); //What is the max date user can select used to restrict the user to selecting the future dates
  year: any = 112; //Till when user can select the date that need to passed;
  today: any = new Date();

  selectedValue: any = new Date();
  dateSelected(e) {
    //call back function where you will recieve the data
    console.log(e);
    this.selectedValue = e;
  }
}
