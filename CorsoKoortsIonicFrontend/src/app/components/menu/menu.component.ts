import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  private id : any;
  private navigate : string;

  constructor(private storage : Storage, private router : Router,
    private route : ActivatedRoute
    ) 
  { 
    this.id = this.route.snapshot.paramMap.get('id');
  }

  ngOnInit() {}

  goToPage(pageName : String) : void
  {
      console.log(this.id);
      this.navigate = "/society/" + this.id + "/" + pageName;
      window.location.href = this.navigate;
  }
}
