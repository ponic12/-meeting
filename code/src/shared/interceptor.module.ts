import { Injectable, NgModule } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { HTTP_INTERCEPTORS } from '@angular/common/http';

import 'rxjs/add/operator/map'
import 'rxjs/add/observable/throw'
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';


import { ApplicationService } from './services/application.service';
import { GlobalService } from './services/global.service';

@Injectable()
export class HttpsRequestInterceptor implements HttpInterceptor {
    user: any;

    constructor(
        private appSrv: ApplicationService,
        private globalSrv: GlobalService
    ) {
        console.log('HttpsRequestInterceptor constructor');
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let as = this.appSrv;
        this.user = this.globalSrv.getVar('user');
        if (this.user) {
            req = req.clone({ headers: req.headers.set("legajo", this.user.username) });
        }
        req = req.clone({ headers: req.headers.set("fecha", new Date().getTime().toString()) });

        as.showLoading();
        return next.handle(req)
            .map(resp => {
                console.log("Response:" + JSON.stringify(resp));
                return resp;
            })
            .do(event => {
                if (event instanceof HttpResponse) {
                    as.hideLoading();
                }
            })
            .catch((error, caught) => {
                console.log('Error:', error);
                as.hideLoading();
                return Observable.throw(error);
            }) as any;
    }
}

@NgModule({
    providers: [
        { 
            provide: HTTP_INTERCEPTORS, useClass: HttpsRequestInterceptor, multi: true 
        }
    ]
   })
   export class InterceptorModule { }
