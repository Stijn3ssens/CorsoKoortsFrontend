import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Platform, ToastController, AlertController } from '@ionic/angular';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { decode } from 'jwt-decode';

import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { CacheService } from 'ionic-cache';
import { User } from '../models/user';
import { TokenResponse } from '../models/TokenResponse';
import { Account } from '../models/account';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService extends BaseService {

  authState = new BehaviorSubject(false);

  result : any = null;

  constructor(
    private router : Router,
    private storage : Storage,
    private platform : Platform,
    private toastController : ToastController,
    private alertController : AlertController,
    cache : CacheService,
    http : HttpClient
  ) { 
    super(cache, http);
    this.platform.ready().then(() => {
      this.ifLoggedIn();
    })
  }

  ifLoggedIn() {
    this.storage.get("TOKEN").then((response) => {
      if(response) {
        this.authState.next(true);
      }
    })
  }

  getAccount() : Observable<Account> {
    return this.http.get(`${this.baseUrl}account/me`)
      .pipe(map(response => this.result = response["result"]));
  }

  async login(login : User) {
    this.storage.remove("TOKEN").then(() => {
      this.authState.next(false);
    })

    this.http.post<TokenResponse>(`${this.baseUrl}account/login`, login)
      .pipe(map(response => this.result = response["token"]))
      .subscribe(async () => {
          this.storage.set("TOKEN", this.result).then((response) => {
            this.router.navigate(['']);
            this.authState.next(true);
            return true;
          });
        }, async error => {
          const alert = await this.alertController.create({
            header: 'Login unsuccessfull',
            message: 'Credentials did not match any user.',
            buttons: ['OK']
          });
      
          await alert.present();
        });
        this.authState.next(true);
  }

  logout() {
    this.storage.remove("TOKEN").then(() => {
      this.router.navigate(['login']);
      this.authState.next(false);
    })
  }

  isAuthenticated() : boolean {
    return this.authState.value;
  }
}
