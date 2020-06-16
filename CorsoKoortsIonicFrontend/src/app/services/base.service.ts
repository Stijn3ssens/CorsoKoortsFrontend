import { CacheService } from 'ionic-cache';
import { HttpClient } from '@angular/common/http';

export class BaseService {
    constructor(
        protected cache : CacheService,
        protected http : HttpClient
    ) {
    }

    loadFromCache(key : string, object : any) : any {
        return this.cache.loadFromObservable(key, object);
    }

    public clearCache(key : string) {
    this.cache.clearGroup(key);
    }

    clearAll() {
    this.cache.clearAll();
    }

    protected baseUrl : string = "http://localhost:33333/";
}
