import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {

	imie: string;
	nazwisko: string;
	a: string;
	slowa: string[] = ['Ala', 'ma', 'kota'];
	cyferki: number[] = [0, 1, 2, 3];

  constructor() { }

  ngOnInit() {
  	this.imie='Nina';
  	this.nazwisko='Pikul';
  	this.a = "";
  	this.tabliczka(this.slowa, this.cyferki);
  }

  onKeyUpName(event){
  	this.imie=event.target.value;
  }

  onKeyUpSurname(event){
  	this.nazwisko=event.target.value;
  }

  tabliczka(slowa: string[], cyferki: number[] ){

  	for (let i in slowa) {
  		for (let c in cyferki) {
  			this.a = this.a + slowa[i]+cyferki[c]+" "; 
  		}

  	}

  }

}
