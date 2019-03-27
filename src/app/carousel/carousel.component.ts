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
		content1: "Book your 2019 holiday Now",
		content2: "and get an Early Bird Discount",
		button: "GET OFFER" 
	},
	{
		image: '../assets/cumbria-web.jpg',
		title: "VISIT THE CUMBRIAN HILLS",
		content1: "luxury campervans in",
		content2: "This stunning setting",
		button: "BOOK NOW" 
	},
	{
		image: '../assets/nothern-web.jpg',
		title: "VISIT THE NORTHERN LIGHTS ",
		content1: "find out more about this",
		content2: "luxury campervans offer",
		button: "BOOK NOW" 
	}];
	couter = 0;

	constructor() { }

	ngOnInit() {
		var main = document.getElementById('main');
		var title = document.getElementById('title');
		var content1 = document.getElementById('content1');
		var content2 = document.getElementById('content2');
		var button = document.getElementById('booknow');
		main.style.backgroundImage = "url('"+this.slider[this.couter].image+"')";

		// title.innerHTML = this.slider[this.couter].title;
		title.innerHTML = '<span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-150px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 8s;animation-iteration-count: infinite;white-space: pre-wrap;">' + this.slider[this.couter].title.split('').join('</span><span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-150px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 8s;animation-iteration-count: infinite;white-space: pre-wrap;">') + '</span>';
		content1.innerHTML = this.slider[this.couter].content1;
		content2.innerHTML = this.slider[this.couter].content2;
		button.innerHTML = this.slider[this.couter].button;
		main.style.backgroundRepeat = "no-repeat";
		main.style.backgroundSize = "100%";
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
			title.innerHTML = '<span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-150px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 8s;animation-iteration-count: infinite;white-space: pre-wrap;">' + this.slider[this.couter].title.split('').join('</span><span class="latter" style="color: #ffffff;opacity: 1;display: inline-block;clip-path: polygon(100% 0, 100% 100%, 0 100%, 0 0);transform: rotate(45deg) translateY(-150px);animation-name: titleAnimation;animation-timing-function: linear;animation-duration: 8s;animation-iteration-count: infinite;white-space: pre-wrap;">') + '</span>';
			content1.innerHTML = this.slider[this.couter].content1;
			content2.innerHTML = this.slider[this.couter].content2;
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
