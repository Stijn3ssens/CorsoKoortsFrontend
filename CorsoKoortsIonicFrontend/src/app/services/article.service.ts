import { Injectable } from '@angular/core';
import { Article } from '../models/article';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { BaseService } from './base.service';
import { CacheService } from 'ionic-cache';

@Injectable({
  providedIn: 'root'
})
export class ArticleService extends BaseService {
 
  constructor(
    cache : CacheService,
    http : HttpClient
  ) { 
    super(cache, http);
  }

  getObjects(societyId : String, tabId : String): Observable<Article[]> {
    return this.http.get(`${this.baseUrl}api/article/`)
    .pipe(map(results => results["result"]));
  }

  getObject(id : bigint): Observable<Article> {
    return this.http.get(`${this.baseUrl}api/article/${id}`)
    .pipe(map(results => results["result"]));
  }
}
