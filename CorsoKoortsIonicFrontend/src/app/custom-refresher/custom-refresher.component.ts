import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custom-refresher',
  templateUrl: './custom-refresher.component.html',
  styleUrls: ['./custom-refresher.component.scss'],
})
export class CustomRefresherComponent implements OnInit {

  constructor() { }

  ngOnInit() {}

  doRefresh(event) {
    console.log("Beginning refresh...");
    
    event.target.complete();
  }
}
