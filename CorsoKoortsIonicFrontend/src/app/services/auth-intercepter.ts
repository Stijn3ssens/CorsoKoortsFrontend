import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Storage } from '@ionic/storage';
import { Observable, from, throwError } from 'rxjs';
import { map, catchError, switchMap } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthIntercepter implements HttpInterceptor {
    constructor(
        private storage : Storage
    ) {

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.storage.set("TOKEN", "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWNodGVudm9vcmRlIiwiaWQiOjcsImV4cCI6MTYxODgyNTMwMywiaWF0IjoxNTg3Mjg5MzAzfQ.WBDfCQmBYVD7bL24luri0SNp3OL9BzURy9MZekKYEprVSWnZsq0euN5-ZOmII6tuYu2bfe4ZVUPCE1mZGD3NOg")
        return from(this.storage.get("TOKEN"))
            .pipe(
                switchMap(result => {

                    if (result) {
                        req = req.clone({ headers: req.headers.append('Authorization', `Bearer ${result}`) });
                    }

                    return next.handle(req);
                })
            );
    }
}
