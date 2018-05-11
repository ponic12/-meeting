import { Injectable } from '@angular/core';
import { AlertController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

import { GlobalService } from './global.service';
import { ApplicationService } from './application.service';
import { FirebaseService } from './firebase.service';



@Injectable()
export class NetworkService {
    private urlBase: string;

    constructor(
        private globalSrv: GlobalService,
        private appSrv: ApplicationService,
        private alertCtrl: AlertController,
        private fs: FirebaseService,
        public http: HttpClient
    ) {
        console.log('NetworkService constructor');
    }

    callSrv(method: string, group: string, tool: string, path: string, params: any):Observable<any> {
        this.urlBase = this.globalSrv.getVar('urlBase')
        if (tool != '')
            this.fs.saveToolEvent(group, tool);
        if (method == "GET")
            return this.http.get<any>(this.urlBase + path)
                .catch((error, caught) => {
                    this.impactError(error, tool);
                    return Observable.throw(error);
                }) as any;
        if (method == "POST")
            return this.http.post<any>(this.urlBase + path, params)
                .catch((error, caught) => {
                    this.impactError(error, tool);
                    return Observable.throw(error);
                }) as any;
    }

    private impactError(error, tool) {
        let fecha = new Date();
        let obj = {
            title: 'Error ' + ("0" + fecha.getDate()).slice(-2) + '/' + ("0" + (fecha.getMonth() + 1)).slice(-2) + '/' + fecha.getFullYear() + ' ' + ("0" + fecha.getHours()).slice(-2) + ':' + ("0" + fecha.getMinutes()).slice(-2),
            message: error.message,
            buttons: [{
                text: 'Aceptar',
                handler: () => {
                }
            }]
        };
        this.appSrv.showAlert(obj);

        let name = tool + 'Page';
        let vm = this.globalSrv.getVar(name);
        if (!vm) vm={};
        vm.error = obj;
        this.globalSrv.save('name', obj);
    }
}
