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
   user: Observable<User>;

   constructor(
      private platform: Platform,
      private afAuth: AngularFireAuth,
      private afs: AngularFirestore, 
      private facebook:Facebook
   ) {
      console.log('AuthService constructor');

      // this.user = this.afAuth.authState
      //    .switchMap(user => {
      //       if (user)
      //          return this.afs.doc<User>(`users/${user.uid}`).valueChanges();
      //       else
      //          return Observable.of(null);
      //    });
   }

   verifyLoggedIn() { 
      return this.afAuth.authState;
   }

   loginGoogle() {
      const provider = new firebase.auth.GoogleAuthProvider();
      return this.oAuthLogin(provider);
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

   loginFacebook() {
      if (this.platform.is('cordova')){
         return this.facebook.login(['public_profile','email']).then(res =>{
            const facebookCredential = firebase.auth.FacebookAuthProvider.credential(res.authResponse.accessToken)
            return firebase.auth().signInWithCredential(facebookCredential)
         })
      }
      else{
         return this.afAuth.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider()).then(res =>{
            const fbo = {
               displayName: res.user.displayName,
               photoURL: res.user.photoURL,
               email: res.user.email,
               uid: res.user.uid,
               username: res.user.username
            }
            this.updateUserData(fbo)
            console.log(fbo)
         })
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
   logoutFacebook(){
      this.afAuth.auth.signOut();
   }

   
   async signInUser(email, pass) {
      const res = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      console.log(res)
      return res
      // try {
      //    const res = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)
      //    console.log(res)
      // }
      // catch (err) {
      //    console.error(err)
      // }
   }
   async registerUser(email, pass) {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      console.log(res)
      return res
   }


   private oAuthLogin(provider) {
      return this.afAuth.auth.signInWithRedirect(provider)// signInwithPopup para Browser
         .then(()=>{
            this.afAuth.auth.getRedirectResult()
               .then((result)=>{
                  this.updateUserData(result);
                  console.log("res: ", result)
            })
            .catch((err)=>{
               console.log(err)
            })
         })
         // .then((cred) => {
         //    this.updateUserData(cred.user);
         //    // this.afAuth.auth.getRedirectResult().then(res=>                
         //    //     console.log('logged in Google')
         //    // )
         // })
   }

   private updateUserData(user) {
      const userRef: AngularFirestoreDocument<User> = this.afs.doc(`users/${user.uid}`);
      const data: User = {
         uid: user.uid,
         email: user.email,
         displayName: user.displayName,
         photoURL: user.photoURL,
         username: user.uid
      }
      return userRef.set(data);
   }
}