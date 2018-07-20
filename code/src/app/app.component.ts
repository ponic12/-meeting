import { Component, OnInit, OnDestroy, NgZone, ViewChild } from '@angular/core'
import { Platform, Events, NavController } from 'ionic-angular'
import { AngularFirestore } from 'angularfire2/firestore'
import { StatusBar } from '@ionic-native/status-bar'
import { SplashScreen } from '@ionic-native/splash-screen'
import { CodePush, SyncStatus } from '@ionic-native/code-push'
import { ApplicationService } from 'fwk-services'

@Component({
   templateUrl: 'app.html'
})
export class MeetingApp implements OnInit, OnDestroy {
   @ViewChild('content') nav: NavController
   progressStatus: string = ""

   constructor(
      private codePush: CodePush,
      private afs: AngularFirestore,
      private appSrv:ApplicationService,
      platform: Platform,
      statusBar: StatusBar,
      splashScreen: SplashScreen
   ) {
      console.log('MeetingApp constructor');
      this.afs.firestore.settings({ timestampsInSnapshots: true })
      this.afs.firestore.enablePersistence()

      platform.ready().then(() => {
         this.codePush.sync({}, (progress) => {
            this.progressStatus = JSON.stringify(progress)
         }).subscribe(status => {
            switch (status) {
               case SyncStatus.CHECKING_FOR_UPDATE:
                  this.appSrv.message('checking for update', '')
                  break;
               case SyncStatus.AWAITING_USER_ACTION:
                  this.appSrv.basicAlert('waiting for user input')
                  break;
               case SyncStatus.IN_PROGRESS:
                  this.appSrv.message('update in progress')
                  break;
               case SyncStatus.DOWNLOADING_PACKAGE:
                  this.appSrv.message('downloading package')
                  break;
               case SyncStatus.UP_TO_DATE:
                  this.appSrv.message('app up to date')
                  break;
               case SyncStatus.INSTALLING_UPDATE:
                  this.appSrv.message('installing update')
                  break;
               case SyncStatus.UPDATE_IGNORED:
                  this.appSrv.message('update ignored')
                  break;
               case SyncStatus.UPDATE_INSTALLED:
                  this.appSrv.message('update installed')
                  setTimeout(() => {
                     window.location.reload();
                  }, 1000);
               case SyncStatus.ERROR:
                  this.appSrv.basicAlert('an error occurred')
                  break;
            }
         })
         // Okay, so the platform is ready and our plugins are available.
         // Here you can do any higher level native things you might need.
         statusBar.styleDefault()
         //statusBar.styleBlackOpaque()
         splashScreen.hide()
      }).catch(err => {
         console.error(err)
         this.appSrv.basicAlert(err, 'Error!')
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

