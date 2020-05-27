import { Injectable } from '@angular/core';
import { Buurtschap } from '../models/buurtschap';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { CacheService } from 'ionic-cache';

@Injectable({
  providedIn: 'root'
})
export class BuurtschapService extends BaseService {
 
  constructor(
    cache : CacheService,
    http : HttpClient
  ) { 
    super(cache, http);
  }

  getBuurtschappen(): Observable<Buurtschap[]> {
    return this.http.get(`${this.baseUrl}api/buurtschap/`)
    .pipe(map(results => results["result"]));
  }

  getBuurtschap(id : bigint): Observable<Buurtschap> {
    return this.http.get(`${this.baseUrl}api/buurtschap/${id}`)
    .pipe(map(results => results["result"]));
  }
}
