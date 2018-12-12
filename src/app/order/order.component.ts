import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

	name: string = "";
	address: string = "";


  constructor() { }

  ngOnInit() {
  }

  isValid() {
  	if (this.name === "" || this.address === "") {
  		return false;
  	}
  	return true;
  }

}
