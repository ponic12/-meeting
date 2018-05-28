import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { AngularFirestoreDocument } from 'angularfire2/firestore'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'


@Injectable()
export class FirebaseService {

   //userRef: AngularFirestoreDocument<any>;
   user$: Observable<any>;

   constructor(
      private afs: AngularFirestore
   ) {
      console.log('FirebaseService constructor');
      //afs.firestore.settings({timestampsInSnapshots:true})
   }

   addUser(usr) {
      const ref = this.afs.collection('users').doc(usr.uid).set(usr)
      return ref;
   }
   updateUser(usr) {
      const ref = this.afs.collection('users').doc(usr.uid).set(usr, { merge: true })
   }

   getContactsByUid(uid) {
      const ref = this.afs.collection('users').doc(uid).collection('contacts')
      const obs = ref.snapshotChanges().map(actions => {
         return actions.map(a => {
            const data = a.payload.doc.data()
            const id = a.payload.doc.id
            return { id, ...data }
         })
      })
      return obs
   }
   getEventsByUid(uid): Observable<any> {
      const field: string = 'members.' + uid
      const ref = this.afs.collection('events', ref => ref.where(field, '==', true))
      const obs = ref.valueChanges()
      return obs
   }

   addEvent(evt) {
      evt.creationDate = new Date().getTime()
      evt.modificationDate = new Date().getTime()
      this.afs.collection('events').add(evt)
   }
   saveEvent(evt) {
      evt.modificationDate = new Date().getTime()
      this.afs.collection('events').doc(evt.id).set(evt)
   }
}
