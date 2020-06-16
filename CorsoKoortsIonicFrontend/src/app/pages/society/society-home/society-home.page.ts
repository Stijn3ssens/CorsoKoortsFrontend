import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-society-home',
  templateUrl: './society-home.page.html',
  styleUrls: ['./society-home.page.scss'],
})
export class SocietyHomePage implements OnInit {

  private id : String;

  constructor(private activatedRoute: ActivatedRoute, private storage : Storage) { 
    this.activatedRoute.queryParams.subscribe(params => {
      this.id = params['id'];
      console.log(this.id);
      this.storage.set("hopplakee", "fiets");
    })
  }

  ngOnInit() {
  }

}
