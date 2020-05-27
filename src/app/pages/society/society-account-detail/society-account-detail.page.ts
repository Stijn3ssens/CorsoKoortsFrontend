import { Component, OnInit } from '@angular/core';
import { AccountService } from 'src/app/services/account.service';
import { Society } from 'src/app/models/society';
import { BuurtschapService } from 'src/app/services/buurtschap.service';
import { CorsoService } from 'src/app/services/corso.service';
import { LoadingController } from '@ionic/angular';
import { SocietyService } from 'src/app/services/society.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-society-account-detail',
  templateUrl: './society-account-detail.page.html',
  styleUrls: ['./society-account-detail.page.scss'],
})
export class SocietyAccountDetailPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
