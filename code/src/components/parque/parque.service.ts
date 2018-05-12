import { Injectable } from '@angular/core';
// import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
// import { AngularFirestoreDocument } from 'angularfire2/firestore';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ParqueService {

    constructor(
      //  private afs: AngularFirestore
   ) {
        console.log('ParqueService constructor');
    }

    getDevices(): any {
      // const devicesRef = this.afs.collection('devices')
      // const devices$ = devicesRef.valueChanges()
      // return devices$;
   }
}
