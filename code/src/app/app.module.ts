import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { Contacts } from '@ionic-native/contacts'
import { Facebook } from '@ionic-native/facebook'
import { CodePush } from '@ionic-native/code-push'

import { MeetingApp } from './app.component'
import { SharedModule } from '../shared/shared.module'

import 'firebase/storage'; 
import { AngularFireModule } from 'angularfire2'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FirebaseService } from '../shared/services/firebase.service'
import { FIREBASE_CONFIG } from '../shared/services/firebase.config'

@NgModule({
   declarations: [
      MeetingApp
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      IonicModule.forRoot(MeetingApp),
      AngularFirestoreModule,
      AngularFireModule.initializeApp(FIREBASE_CONFIG),
      SharedModule.forRoot()
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MeetingApp
   ],
   providers: [
      FirebaseService,
      CodePush,
      Contacts,
      StatusBar,
      SplashScreen,
      Facebook,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
   ]
})
export class AppModule {
   constructor() {
      console.log('AppModule constructor');
   }
}
