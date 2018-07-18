import { Component, OnInit, OnDestroy, NgZone, ViewChild } from '@angular/core';
import { Platform, Events, NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
   templateUrl: 'app.html'
})
export class MeetingApp implements OnInit, OnDestroy {
   @ViewChild('content') nav: NavController


   constructor(
      private afs: AngularFirestore,
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen
   ) {
      console.log('MeetingApp constructor');
      platform.ready().then(() => {
         this.afs.firestore.settings({ timestampsInSnapshots: true });
         this.afs.firestore.enablePersistence();
         // Okay, so the platform is ready and our plugins are available.
         // Here you can do any higher level native things you might need.
         statusBar.styleDefault()
         //statusBar.styleBlackOpaque()
         splashScreen.hide()
      })      
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

