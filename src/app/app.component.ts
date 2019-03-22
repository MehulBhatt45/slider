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
	image = [ '../assets/welcome-couple.jpg', '../assets/cumbria-web.jpg', '../assets/nothern-web.jpg'];
	slider = [
		{
			image: '../assets/welcome-couple.jpg',
			title: "20% OFF",
			content: "Book your 2019 holiday Now<br>and get an Early Bird Discount",
			button: "GET OFFER" 
		},
		{
			image: '../assets/cumbria-web.jpg',
			title: "VISIT THE CUMBRIAN HILLS",
			content: "luxury campervans in <br>This stunning setting",
			button: "BOOK NOW" 
		},
		{
			image: '../assets/nothern-web.jpg',
			title: "VISIT THE NORTHERN LIGHTS ",
			content: "find out more about this <br>luxury campervans offer",
			button: "BOOK NOW" 
		}];
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
		addStyle: {'padding-left': '25px', 'width': '100%', 'height': '38px'}, // Optional, value to pass to [ngStyle] on the input field
		fieldId: 'my-date-picker', // ID to assign to the input field. Defaults to datepicker-<counter>
		useEmptyBarTitle: false, // Defaults to true. If set to false then barTitleIfEmpty will be disregarded and a date will always be shown
	};
	ngOnInit(){
		var main = document.getElementById('main');
		var title = document.getElementById('title');
		var content = document.getElementById('content');
		var button = document.getElementById('booknow');
		main.style.backgroundImage = "url('"+this.slider[this.couter].image+"')";

		// title.innerHTML = this.slider[this.couter].title;
		title.innerHTML = '<span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;float: left;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-100px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 5s;animation-iteration-count: infinite;white-space: pre-wrap;">' + this.slider[this.couter].title.split('').join('</span><span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;float: left;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-100px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 5s;animation-iteration-count: infinite;white-space: pre-wrap;">') + '</span>';
		content.innerHTML = this.slider[this.couter].content;
		button.innerHTML = this.slider[this.couter].button;
		main.style.backgroundRepeat = "no-repeat";
		main.style.backgroundSize = "cover";
		var node = document.getElementById('title').childNodes;
		console.log("NOdes", node);
		for(var i=0; i<node.length; i++){
			node[i].style.animationDelay = 0.05*(i+1)+'s';
		}
		setTimeout(()=>{
				var x = document.querySelectorAll('.latter')
				x.forEach(ele=>{
					ele.style.animationDelay = '0s';
				})
			},4000);
		setInterval(()=>{
			this.couter++;
			if(this.couter == 3)
				this.couter = 0;
			main.style.backgroundImage = "url('"+this.slider[this.couter].image+"')";
			// title.innerHTML = this.slider[this.couter].title;
			title.innerHTML = '<span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;float: left;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-100px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 5s;animation-iteration-count: infinite;white-space: pre-wrap;">' + this.slider[this.couter].title.split('').join('</span><span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;float: left;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-100px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 5s;animation-iteration-count: infinite;white-space: pre-wrap;">') + '</span>';
			content.innerHTML = this.slider[this.couter].content;
			button.innerHTML = this.slider[this.couter].button;
			node = document.getElementById('title').childNodes;
			console.log("NOdes", node);
			for(var i=0; i<node.length; i++){
				node[i].style.animationDelay = 0.05*(i+1)+'s';
			}
			setTimeout(()=>{
				var x = document.querySelectorAll('.latter')
				x.forEach(ele=>{
					ele.style.animationDelay = '0s';
				})
			},4000);
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
