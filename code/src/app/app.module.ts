import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { Facebook } from '@ionic-native/facebook'
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { CoreModule } from '../shared/core/core.module';
import { SharedModule } from '../shared/shared.module';
import { MeetingApp } from './app.component';
import { SearchInfoPipe } from '../shared/pipes/search-info.pipe';


@NgModule({
   declarations: [
      MeetingApp,
      SearchInfoPipe
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
      Facebook,
      { provide: ErrorHandler, useClass: IonicErrorHandler }
   ]
})
export class AppModule {
   constructor() {
      console.log('AppModule constructor');
   }
}
