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

    addUser(usr){
      const ref = this.afs.collection('users').doc(usr.email).set(usr)
      return ref; 
    }
    updateUser(usr){
       const ref = this.afs.collection('users').doc(usr.email).set(usr, { merge: true })
    }
    getUserData(usrId): Observable<any>{
      const ref = this.afs.collection('users').doc(usrId)
      const obs = ref.valueChanges()
      return obs
    }

    addEvent(evt){
      evt.creationDate = new Date().getTime()
      evt.modificationDate = new Date().getTime()
      this.afs.collection('events').add(evt)
    }
    saveEvent(evt){
        evt.modificationDate = new Date().getTime()
        this.afs.collection('events').doc(evt.id).set(evt)
    }
}
