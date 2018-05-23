import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { AngularFirestoreDocument } from 'angularfire2/firestore';


import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class FirebaseService {

    //userRef: AngularFirestoreDocument<any>;
    user$: Observable<any>;

    uuid:string;
    leg:string;

    constructor(
        private afs: AngularFirestore
    ) {
        console.log('FirebaseService constructor');
        //afs.firestore.settings({timestampsInSnapshots:true})
    }

    getUserData(usrId): Observable<any>{
      const ref = this.afs.collection('users').doc(usrId)
      const obs = ref.valueChanges()
      return obs
    }
    setDeviceData(payload):void{
        //this.afs.collection('devices').doc(payload.uuid).set(payload, { merge: true });
    }

    saveToolEvent(group, tool){
        let d = new Date().getTime();
        //this.afs.collection('toolsEvents').doc(d.toString()).set({'group':group, 'tool':tool});
    }
}
