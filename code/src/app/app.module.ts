import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CoreModule } from '../shared/core/core.module';
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
      SharedModule.forRoot(),
      CoreModule
   ],
   bootstrap: [IonicApp],
   entryComponents: [
      MeetingApp
   ],
   providers: [
      StatusBar,
      SplashScreen,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
   ]
})
export class AppModule {
   constructor() {
      console.log('AppModule constructor');
   }
}
