import { Component, OnInit } from '@angular/core';
import { Account } from '../../../models/account';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-account',
  templateUrl: './account.page.html',
  styleUrls: ['./account.page.scss'],
})
export class AccountPage implements OnInit {
  account : Account;

  constructor(
    private authenticationService: AuthenticationService,
    public loadingController: LoadingController
    ) 
    { }

  ngOnInit() {
    this.getAccount();
  }

  async getAccount() : Promise<void> {
    const loading = await this.loadingController.create({
      message: "Please wait...",
    });
    await loading.present();
    this.authenticationService.getAccount()
      .subscribe(account => this.account = account);
    await loading.dismiss();
  }
}
