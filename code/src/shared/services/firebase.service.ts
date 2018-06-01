import { Injectable } from '@angular/core'
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore'
import { AngularFirestoreDocument } from 'angularfire2/firestore'
import { storage, initializeApp } from 'firebase'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/map'
import * as firebaseStorge from 'firebase/storage';

import * as firebase from 'firebase'; // for typings
import { FirebaseApp } from 'angularfire2';



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
   getEventsByUid(uid) {
      const field: string = 'members.' + uid
      const ref = this.afs.collection('events', ref => ref.where(field, '==', true))
      const obs = ref.snapshotChanges().map(actions => {
         return actions.map(a => {
            const data = a.payload.doc.data()
            const id = a.payload.doc.id
            return { id, ...data }
         })
      })
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

   download(filename) {
      // Create a reference with an initial file path and name
      const st = firebase.storage();
      const pathReference = st.ref(filename);
      const refGS = st.refFromURL('gs://events-12be3.appspot.com/'+filename)
      refGS.getDownloadURL().then(function (url) {
         window.open(url, '_system')
      }).catch(function (error) {
         switch (error.code) {
            case 'storage/object_not_found':
               this.appSrv.message('Error', 'No se ha encontrado el archivo!')
               break;

            case 'storage/unauthorized':
               this.appSrv.message('Error', 'No tiene permiso para bajar el archivo!')
               break;

            case 'storage/canceled':
               this.appSrv.message('Error', 'Se ha cancelado la descarga!')
               break;

            case 'storage/unknown':
               this.appSrv.message('Error', 'Ha ocurrido un error desconocido!')
               break;
         }
      });
   }
}
