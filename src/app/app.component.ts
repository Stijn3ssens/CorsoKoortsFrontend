import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { Router } from '@angular/router';
import { AuthenticationService } from './services/authentication.service';
import { CacheService } from "ionic-cache";

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor(
    private router: Router,
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService : AuthenticationService,
    private cache: CacheService
  ) {
    this.initializeApp();
    this.cache.setDefaultTTL(1);
    // this.cache.setDefaultTTL(60 * 60);
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();

      // this.authenticationService.authState.subscribe(state => {
      //   if (state) {
      //     this.router.navigate(['']);
      //   } else {
      //     this.router.navigate(['login']);
      //   }
      // });
    });
  }
}
