import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';

@Component({
	selector: 'app-home-navigation',
	templateUrl: './home-navigation.component.html',
	styleUrls: ['./home-navigation.component.sass']
})
export class HomeNavigationComponent implements OnInit {
	startDate;
	endDate;
	datePickerToShow: boolean = true;
	startoptions: DatepickerOptions = {
		minYear: 1970,
		maxYear: 2030,
		displayFormat: 'MMM D[,] YYYY',
		barTitleFormat: 'MMMM YYYY',
		dayNamesFormat: 'dd',
		firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
		locale: enLocale,
		minDate: new Date(Date.now()), // Minimal selectable date
		placeholder: 'Check in', // HTML input placeholder attribute (default: '')
		addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
		addStyle: {'padding-left': '25px', 'width': '100%', 'height': '38px'}, // Optional, value to pass to [ngStyle] on the input field
		fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
		useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown 
	};
	endoptions: DatepickerOptions = {
		minYear: 1970,
		maxYear: 2030,
		displayFormat: 'MMM D[,] YYYY',
		barTitleFormat: 'MMMM YYYY',
		dayNamesFormat: 'dd',
		firstCalendarDay: 0, // 0 - Sunday, 1 - Monday
		locale: enLocale,
		minDate: this.startDate?this.addDays(this.startDate, 1):new Date(Date.now()), // Minimal selectable date
		placeholder: 'Check out', // HTML input placeholder attribute (default: '')
		addClass: 'form-control', // Optional, value to pass on to [ngClass] on the input field
		addStyle: {'padding-left': '25px', 'width': '100%', 'height': '38px', 'cursor': 'not-allowed'}, // Optional, value to pass to [ngStyle] on the input field
		fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
		useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
	};
	constructor() { }

	ngOnInit() {
	}
	onChange(event){
		console.log(this.startDate);
		this.endoptions.minDate = this.addDays(this.startDate, 1);
		this.endoptions.addStyle.cursor = 'text'
	}

	addDays(date, days) {
		var result = new Date(date);
		result.setDate(result.getDate() + days);
		console.log(result);
		return result;
	}


}
