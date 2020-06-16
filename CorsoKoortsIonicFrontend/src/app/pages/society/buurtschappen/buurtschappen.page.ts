import { Component, OnInit } from '@angular/core';
import { Buurtschap } from 'src/app/models/buurtschap';
import { BuurtschapService } from 'src/app/services/buurtschap.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-buurtschappen',
  templateUrl: './buurtschappen.page.html',
  styleUrls: ['./buurtschappen.page.scss'],
})
export class BuurtschappenPage implements OnInit {
  societies: Buurtschap[];

  constructor
  (
    private buurtschapService: BuurtschapService,
    public loadingController: LoadingController
    ) 
  { 
  }

  ngOnInit() {
    this.getBuurtschappen();
  }

  async getBuurtschappen(): Promise<void> {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();
    this.buurtschapService.getBuurtschappen()
      .subscribe(buurtschappen => this.societies = buurtschappen);
    await loading.dismiss();
  }

}
