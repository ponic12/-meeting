import { Injectable } from '@angular/core'
import { Platform } from 'ionic-angular'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook'

import * as firebase from 'firebase/app'; // ANDROID
//import firebase from 'firebase'   // WEB

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

// import { Observable } from 'rxjs/observable';
import { Observable } from 'rxjs/Rx';
import 'rxjs/operator/switchMap';
// import 'rxjs/add/observable/throw';

import { User } from './user';
import { FirebaseApp } from 'angularfire2';


@Injectable()
export class AuthService {
   user: Observable<User>

   constructor(
      private platform: Platform,
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore,
      private facebook: Facebook
   ) {
      console.log('AuthService constructor')
   }

   verifyLoggedIn() {
      const res = this.afAuth.authState
         .switchMap(user => {
            if (user)
               return this.afs.doc(`users/${user.uid}`).valueChanges();
            else
               return Observable.of(null);
         });
      return res
   }
   loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
   }
   loginFacebook() {
      if (this.platform.is('cordova')) {
         return this.facebook.login(['public_profile', 'email']).then(res => {
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
            return firebase.auth().signInWithCredential(facebookCredential)
         })
      }
      else {
         return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
      }
      // if (((this.platform.is('mobileweb') == true) || (this.platform.is('core') == true)) == false) {
      //    const prom = this.facebook.login(['public_profile','email']).then((loginResponse)=>{
      //       let credential = firebase.auth.FacebookAuthProvider.credential(loginResponse.authResponse.accessToken)
      //       firebase.auth().signInWithCredential(credential).then((info)=>{
      //          console.log('info: ', info)
      //       })
      //       .catch((err)=>{
      //          console.log('Error: ', err)
      //       })
      //    })
      //    return prom
      // }
      // else{
      //    const provider = new firebase.auth.FacebookAuthProvider();  
      //    return this.oAuthLogin(provider);
      // }
   }
   signOutUser() {
      this.afAuth.auth.signOut();
      //this.provider.loggedin = false;

      //     mAuth.signOut();

      //     // Google sign out
      //     Auth.GoogleSignInApi.signOut(mGoogleApiClient).setResultCallback(
      //         new ResultCallback<Status>() {
      //             @Override
      //     public void onResult(@NonNull Status status) {
      //         updateUI(null);
      //     }
      // });
   }
   async signInUser(email, pass) {
      try {
         const res = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)
         console.log('Login x email: ' + res)
         return res
      }
      catch (err) {
         console.error(err)
      }
   }
   async registerUser(email, pass) {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      console.log(res)
      return res
   }


   private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithRedirect(provider)// signInwithPopup para Browser
         .then((cred) => {
            console.log('cred: ', cred)
            return this.afAuth.auth.getRedirectResult()
         })
   }
}