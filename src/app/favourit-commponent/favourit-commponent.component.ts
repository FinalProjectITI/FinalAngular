import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favourit-commponent',
  templateUrl: './favourit-commponent.component.html',
  styleUrls: ['./favourit-commponent.component.scss']
})
export class FavouritCommponentComponent implements OnInit {

  constructor() { }

  logged:boolean=false;
  
  ngOnInit(): void {
  }

}
