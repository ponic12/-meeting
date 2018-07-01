import { NgModule, ErrorHandler } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { SplashScreen } from '@ionic-native/splash-screen'
import { StatusBar } from '@ionic-native/status-bar'
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular'
import { Contacts } from '@ionic-native/contacts'
import { Facebook } from '@ionic-native/facebook'

import { MeetingApp } from './app.component'
import { SharedModule } from '../shared/shared.module'


@NgModule({
   declarations: [
      MeetingApp
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      IonicModule.forRoot(MeetingApp),
      SharedModule.forRoot()
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MeetingApp
   ],
   providers: [
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
