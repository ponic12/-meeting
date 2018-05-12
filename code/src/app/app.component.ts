import { Component, OnInit, OnDestroy, NgZone, ViewChild } from '@angular/core';
import { Platform, NavController, Events } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
//import { AngularFirestore } from 'angularfire2/firestore';

import { ApplicationService } from '../shared/services/application.service';
import { GlobalService } from '../shared/services/global.service';



@Component({
   templateUrl: 'app.html'
})
export class MeetingApp implements OnInit, OnDestroy {
   @ViewChild('content') nav: NavController


   constructor(
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen,
      //private afs: AngularFirestore,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService
   ) {
      console.log('DashboardApp constructor');
      // this.afs.firestore.settings({ timestampsInSnapshots: true });
      // this.afs.firestore.enablePersistence();

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

