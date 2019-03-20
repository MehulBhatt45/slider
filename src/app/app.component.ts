import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';
@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
	title = 'app';
	image = ['../assets/cumbria-web.jpg', '../assets/nothern-web.jpg', '../assets/welcome-couple.jpg'];
	couter = 0;
	startDate;
	endDate;
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
		addStyle: {'padding-left': '25px'}, // Optional, value to pass to [ngStyle] on the input field
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
		addStyle: {'padding-left': '25px'}, // Optional, value to pass to [ngStyle] on the input field
		fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
		useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
	};
	ngOnInit(){
		var main = document.getElementById('main'); 
		// main.style.backgroundColor = this.image[this.couter];
		main.style.backgroundImage = "url('"+this.image[this.couter]+"')";
		main.style.backgroundRepeat = "no-repeat";
		main.style.backgroundSize = "cover";
		main.style.backgroundAttachment = "fixed";
		main.style.transition = "all 3s";
		setInterval(()=>{
			if(this.couter == 4){
				this.couter = 0;
				main.style.backgroundImage = "url('"+this.image[this.couter]+"')";
			}else{
				main.style.backgroundImage = "url('"+this.image[this.couter]+"')";
			}
			this.couter++;
		},5000);

	}

	onChange(event){
		console.log(this.startDate);
		this.endoptions.minDate = this.addDays(this.startDate, 1);
	}

	addDays(date, days) {
		var result = new Date(date);
		result.setDate(result.getDate() + days);
		console.log(result);
		return result;
	}
}
