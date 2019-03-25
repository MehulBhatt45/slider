import { Component, OnInit } from '@angular/core';
import { DatepickerOptions } from 'ng2-datepicker';
import * as enLocale from 'date-fns/locale/en';

@Component({
	selector: 'app-carousel',
	templateUrl: './carousel.component.html',
	styleUrls: ['./carousel.component.sass']
})
export class CarouselComponent implements OnInit {
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

	constructor() { }

	ngOnInit() {
		var main = document.getElementById('main');
		var title = document.getElementById('title');
		var content = document.getElementById('content');
		var button = document.getElementById('booknow');
		main.style.backgroundImage = "url('"+this.slider[this.couter].image+"')";

		// title.innerHTML = this.slider[this.couter].title;
		title.innerHTML = '<span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;float: left;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-150px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 8s;animation-iteration-count: infinite;white-space: pre-wrap;">' + this.slider[this.couter].title.split('').join('</span><span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;float: left;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-150px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 8s;animation-iteration-count: infinite;white-space: pre-wrap;">') + '</span>';
		content.innerHTML = this.slider[this.couter].content;
		button.innerHTML = this.slider[this.couter].button;
		main.style.backgroundRepeat = "no-repeat";
		main.style.backgroundSize = "cover";
		var node = document.getElementById('title').childNodes;
		console.log("NOdes", node);
		for(var i=0; i<node.length; i++){
			var n:any = node[i];
			n.style.animationDelay = 0.05*(i+1)+'s';
		}
		setTimeout(()=>{
			var x:any = document.querySelectorAll('.latter')
			x.forEach(ele=>{
				ele.style.animationDelay = '0s';
			})
			// for(var i=0; i<x.length; i++){
				// 	x[i].style.animationDelay = '0s';
				// }
			},4000);
		setInterval(()=>{
			// main.style.overflow= 'auto';
			this.couter++;
			if(this.couter == 3)
				this.couter = 0;
			main.style.backgroundImage = "url('"+this.slider[this.couter].image+"')";
			// title.innerHTML = this.slider[this.couter].title;
			title.innerHTML = '<span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;float: left;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-150px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 8s;animation-iteration-count: infinite;white-space: pre-wrap;">' + this.slider[this.couter].title.split('').join('</span><span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;float: left;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-150px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 8s;animation-iteration-count: infinite;white-space: pre-wrap;">') + '</span>';
			content.innerHTML = this.slider[this.couter].content;
			button.innerHTML = this.slider[this.couter].button;
			node = document.getElementById('title').childNodes;
			// console.log("NOdes", node);
			for(var i=0; i<node.length; i++){
				var n:any = node[i];
				n.style.animationDelay = 0.05*(i+1)+'s';
			}
			setTimeout(()=>{
				var x:any = document.querySelectorAll('.latter')
				x.forEach(ele=>{
					ele.style.animationDelay = '0s';
				})
			},4000);
		},8000);

	}

}
