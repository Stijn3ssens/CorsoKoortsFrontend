import { Injectable } from '@angular/core';
import { Buurtschap } from '../models/buurtschap';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { CacheService } from 'ionic-cache';
import { stringify } from 'querystring';
import { Society } from '../models/society';
import { Member } from '../models/member';

@Injectable({
  providedIn: 'root'
})
export class SocietyService extends BaseService {
 
  constructor(
    cache : CacheService,
    http : HttpClient
  ) { 
    super(cache, http);
  }

  getAccountPageInfo(isCorso: any, id: any): Observable<Society> {
    let society; 
    if (isCorso == 1) {society = "corso"}
    else {society = "buurtschap"}

    console.log(society);
    return this.http.get(`${this.baseUrl}api/${society}/${id}`)
    .pipe(map(results => results["result"]));
  }

  changeMemberStatus(societyId: any, memberStatus: any): Observable<Member> {
    return this.http.get(`${this.baseUrl}api/member/change/${societyId}/${memberStatus}`)
    .pipe(map(results => results["result"]));
  }
}
