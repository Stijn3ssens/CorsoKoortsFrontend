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

    // intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    //     this.storage.set("TOKEN", "Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJlZWxkZSIsImlkIjo0LCJleHAiOjE2MjE4NTYxMTQsImlhdCI6MTU5MDMyMDExNH0.-CJlIRLBHqwcM1dhv11aUEX-tPqWP5ZTNGXiPKDeQ8HyUzBGfVL0F4sfRjkdcAPNA3MVH0eU18ttRfeSII4v8A");
    //     console.log(this.storage.get("TOKEN"));
    //     return from(this.storage.get("TOKEN"))
    //         .pipe(
    //             switchMap(result => {

    //                 if (result) {
    //                     req = req.clone({ headers: req.headers.set('Authorization', `Bearer ${result}`) });
    //                     console.log(result);
    //                 }

    //                 return next.handle(req);
    //             })
    //         );
    // }


    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return from(this.storage.get("TOKEN"))
            .pipe(
                switchMap(result => {
                    if (result) {
                        console.log(result);
                        let newreq = req.clone({ headers: req.headers.append('Authorization', `Bearer ${result}`) });
                        // newreq = req.clone({ headers: req.headers.append('Authorization', 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWNodGVudm9vcmRlIiwiaWQiOjcsImV4cCI6MTYxODgyNTMwMywiaWF0IjoxNTg3Mjg5MzAzfQ.WBDfCQmBYVD7bL24luri0SNp3OL9BzURy9MZekKYEprVSWnZsq0euN5-ZOmII6tuYu2bfe4ZVUPCE1mZGD3NOg') });
                        // const newreq = req.clone({ setHeaders: { Authorization: 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWNodGVudm9vcmRlIiwiaWQiOjcsImV4cCI6MTYxODgyNTMwMywiaWF0IjoxNTg3Mjg5MzAzfQ.WBDfCQmBYVD7bL24luri0SNp3OL9BzURy9MZekKYEprVSWnZsq0euN5-ZOmII6tuYu2bfe4ZVUPCE1mZGD3NOg'}});
                        return next.handle(newreq);
                    }
                    else {
                        return next.handle(req);
                    }
                    // req = req.clone({ headers: req.headers.append('Authorization', `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWNodGVudm9vcmRlIiwiaWQiOjcsImV4cCI6MTYxODgyNTMwMywiaWF0IjoxNTg3Mjg5MzAzfQ.WBDfCQmBYVD7bL24luri0SNp3OL9BzURy9MZekKYEprVSWnZsq0euN5-ZOmII6tuYu2bfe4ZVUPCE1mZGD3NOg`) });
                    // const newreq = req.clone(); 
                    // newreq.headers.append('Authorization', `Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWNodGVudm9vcmRlIiwiaWQiOjcsImV4cCI6MTYxODgyNTMwMywiaWF0IjoxNTg3Mjg5MzAzfQ.WBDfCQmBYVD7bL24luri0SNp3OL9BzURy9MZekKYEprVSWnZsq0euN5-ZOmII6tuYu2bfe4ZVUPCE1mZGD3NOg`);
                   
                })
            );









//             // let changedReq = req;
//             // const settings: {[name: string]: string | string[]; } = {};
//             // for (const key of req.headers.keys()){
//             //     settings[key] = req.headers.getAll(key);
//             // }
//             // settings['Authorization'] = 'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJsaWNodGVudm9vcmRlIiwiaWQiOjcsImV4cCI6MTYxODgyNTMwMywiaWF0IjoxNTg3Mjg5MzAzfQ.WBDfCQmBYVD7bL24luri0SNp3OL9BzURy9MZekKYEprVSWnZsq0euN5-ZOmII6tuYu2bfe4ZVUPCE1mZGD3NOg';
//             // settings['Content-Type'] = 'application/json';
//             // const newHeader = new HttpHeaders(settings);
//             // changedReq = req.clone({headers: newHeader});
    }
}    
