import { Injectable } from '@angular/core'
import { Platform } from 'ionic-angular'
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook'

import * as firebase from 'firebase/app'; // ANDROID
//import firebase from 'firebase'   // WEB

import { AngularFireAuth } from 'angularfire2/auth'

// import { Observable } from 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'
import 'rxjs/operator/switchMap';

import { User } from './user';
import { FirebaseApp } from 'angularfire2';


@Injectable()
export class AuthService {
   user: Observable<firebase.User>
   //user: Observable<firebase.User>

   authState: any = null;


   constructor(
      private platform: Platform,
      private afAuth: AngularFireAuth,
      private facebook: Facebook
   ) {
      console.log('AuthService constructor')
      this.afAuth.authState.subscribe((auth) => {
         this.authState = auth
      });
   }

   verifyLoggedIn() {
      const res = this.afAuth.authState
      // .switchMap(d => {
      //    if (d)
      //       return Observable.of({
      //          displayName:d.displayName,
      //          email: d.email,
      //          photoURL: d.photoURL
      //       })// this.afs.doc(`users/${user.uid}`).valueChanges();
      //    else
      //       return Observable.of("")
      // })
      return res
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

   async signInUser(email, pass):Promise<any> {
      try {
         const res = await this.afAuth.auth.signInWithEmailAndPassword(email, pass)
         console.log('Login x email')
         return res
      }
      catch (err) {
         console.error(err)
      }
   }
   async registerUser(email, pass):Promise<any> {
      const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, pass)
      console.log('Registration')
      return res
   }

   loginGoogle():Promise<void> {
      const provider = new firebase.auth.GoogleAuthProvider();
      console.log('Login x google')
      return this.socialSignIn(provider);
   }

   private socialSignIn(provider):Promise<any> {
      // return this.afAuth.auth.signInWithRedirect(provider)// signInwithPopup para Browser
      //    .then((credential) => {
      //       console.log('cred: ', credential)
      //       return this.afAuth.auth.getRedirectResult()
      //    })
      //    .catch(error => console.log(error));

      return this.afAuth.auth.signInWithPopup(provider)
         .then((credential) => {
            console.log('Cred: ', credential)
            this.authState = credential.user
            return this.authState
         })
         .catch(error => console.log(error));
   }
}