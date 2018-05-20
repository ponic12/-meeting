import { Component, OnInit, OnDestroy, NgZone, ViewChild } from '@angular/core';
import { Platform, Events, NavController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
   templateUrl: 'app.html'
})
export class MeetingApp implements OnInit, OnDestroy {
   @ViewChild('content') nav: NavController


   constructor(
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen
   ) {
      console.log('MeetingApp constructor');
      platform.ready().then(() => {
         statusBar.styleDefault();
         splashScreen.hide();
      });
   }

   ngOnDestroy() {
      console.warn('MeetingApp destroy');
   }
   ngOnInit(): void {
      console.log('MeetingApp init');
   }
   // download() {
   //    window.open('http://190.225.183.34:8080/toolbox/apks/dbm.apk', '_system');
   // }
}

