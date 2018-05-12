import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { SharedModule } from '../shared/shared.module';
import { MeetingApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
   MeetingApp,
    HomePage
  ],
  imports: [
   BrowserModule,
   BrowserAnimationsModule,
   IonicModule.forRoot(MeetingApp),
   SharedModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
     MeetingApp,
     HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
