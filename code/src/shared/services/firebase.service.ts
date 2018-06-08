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

   
   ///////////////////////////////////////////////
   // USUARIOS
   ///////////////////////////////////////////////
   getCommunity(){
      const ref = this.afs.collection('users')
      const obs = ref.valueChanges()
      // const obs = ref.snapshotChanges().map(actions => {
      //    return actions.map(a => {
      //       const data = a.payload.doc.data()
      //       const id = a.payload.doc.id
      //       return { id, ...data }
      //    })
      // })
      return obs
   }
   getUserById(uid){
      const ref = this.afs.collection('users').doc(uid)
      const obs = ref.valueChanges()
      return obs
   }
   addUser(usr) {
      const ref = this.afs.collection('users').doc(usr.uid).set(usr)
      return ref;
   }
   updateUser(usr) {
      const ref = this.afs.collection('users').doc(usr.uid).set(usr, { merge: true })
   }


   ///////////////////////////////////////////////
   // EVENTOS
   ///////////////////////////////////////////////   
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
   saveEvent(evt) {
      evt.modificationDate = new Date().getTime()
      if (!evt.id){
         evt.creationDate = new Date().getTime()
         this.afs.collection('events').add(evt)
      }
      else
         this.afs.collection('events').doc(evt.id).set(evt)
   }
   deleteEvent(evt){
      const ref = this.afs.collection('events').doc(evt.id).delete()
      return ref
   }



   ///////////////////////////////////////////////
   // COMENTARIOS
   ///////////////////////////////////////////////
   getCommentsByEvtId(eid){
      const ref = this.afs.collection('events').doc(eid).collection('comments')
      const obs = ref.snapshotChanges().map(actions => {
         return actions.map(a => {
            const data = a.payload.doc.data()
            const id = a.payload.doc.id
            return { id, ...data }
         })
      })
      return obs
   }
   saveComment(evt, comment) {
      if (!comment.id){
         this.afs.collection('events').doc(evt.id).collection('comments').add(evt)
      }
      else
         this.afs.collection('events').doc(evt.id).collection('comments').doc(comment.id).set(comment)
   }


   ///////////////////////////////////////////////
   // SUGERENCIAS
   ///////////////////////////////////////////////
   getSuggestions(){
      const ref = this.afs.collection('suggestions')
      const obs = ref.snapshotChanges().map(actions => {
         return actions.map(a => {
            const data = a.payload.doc.data()
            const id = a.payload.doc.id
            return { id, ...data }
         })
      })
      return obs
   }
   saveSuggestions(sug) {
      if (!sug.id){
         this.afs.collection('suggestions').add(sug)
      }
      else
         this.afs.collection('suggestions').doc(sug.id).set(sug)
   }


   ///////////////////////////////////////////////
   // Descarga de APP
   ///////////////////////////////////////////////
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
