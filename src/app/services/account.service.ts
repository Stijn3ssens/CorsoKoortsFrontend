import { Injectable, SystemJsNgModuleLoader } from '@angular/core';
import { Account } from '../models/account';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';
import { AuthIntercepter } from './auth-intercepter';
import { BaseService } from './base.service';
import { Platform } from '@ionic/angular';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import { CacheService } from 'ionic-cache';

@Injectable({
  providedIn: 'root'
})
export class AccountService extends BaseService {

  private account: Account;
  
  constructor(
    cache : CacheService,
    http : HttpClient
  ) { 
    super(cache, http);
  }

  getAccount(): Observable<Account> {
    return this.http.get(`${this.baseUrl}account/me`).pipe(map(response => this.account = response["result"]));
      }
}
