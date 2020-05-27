import { Injectable } from '@angular/core';
import { Corso } from '../models/corso';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { CacheService } from 'ionic-cache';

@Injectable({
  providedIn: 'root'
})
export class CorsoService extends BaseService {
 
  constructor(
    cache : CacheService,
    http : HttpClient
  ) { 
    super(cache, http);
  }

  getCorsos(): Observable<Corso[]> {
    return this.http.get(`${this.baseUrl}api/corso/`)
    .pipe(map(results => results["result"]));
  }

  getCorso(id : bigint): Observable<Corso> {
    return this.http.get(`${this.baseUrl}api/corso/${id}`)
    .pipe(map(results => results["result"]));
  }
}
