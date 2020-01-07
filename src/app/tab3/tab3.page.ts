import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  constructor() {}

  ngOnInit(){}

	age="1995-05-18";
	showAge;

ageCalculator(){
	if(this.age){
		const convertAge = new Date(this.age);
		const timeDiff = Math.abs(Date.now() - convertAge.getTime());
		this.showAge = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
	}
	console.log(this.age);
	console.log(this.showAge);
}

}
