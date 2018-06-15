import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Contacts } from '@ionic-native/contacts'
import { Facebook } from '@ionic-native/facebook'
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SharedModule } from '../shared/shared.module';
import { MeetingApp } from './app.component';


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
