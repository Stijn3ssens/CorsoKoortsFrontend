import { Component, OnInit } from '@angular/core';
import { Corso } from '../../../models/corso';
import { CorsoService } from '../../../services/corso.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-corsos',
  templateUrl: './corsos.page.html',
  styleUrls: ['./corsos.page.scss'],
})
export class CorsosPage implements OnInit {
  societies: Corso[];

  constructor
  (
    private corsoService: CorsoService,
    public loadingController: LoadingController
    ) 
  { 
  }

  ngOnInit() {
    this.getCorsos();
  }

  async getCorsos(): Promise<void> {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();
    this.corsoService.getCorsos()
      .subscribe(corsos => this.societies = corsos);
    await loading.dismiss();
  }
}
