import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class EventService {

    constructor(
      //  private afs: AngularFirestore
   ) {
        console.log('EventService constructor');
    }

    getDevices(): any {
      // const devicesRef = this.afs.collection('devices')
      // const devices$ = devicesRef.valueChanges()
      // return devices$;
   }
}
