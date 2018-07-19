import { Component, OnInit, OnDestroy } from '@angular/core'
import { NavController, IonicPage, ModalController, Modal, Platform } from 'ionic-angular'
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { CodePush, SyncStatus } from '@ionic-native/code-push'

import { AuthService } from 'fwk-auth';
import { ApplicationService } from 'fwk-services'
import { FirebaseService } from '../../shared/services/firebase.service'
import { Subscription } from 'rxjs'


@IonicPage()
@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})
export class LoginPage implements OnInit, OnDestroy {
   progressStatus: string = ""

   subUsr: Subscription
   subAuth: Subscription

   loginMode: string = "signIn"
   username: string
   displayName: string
   email: string
   password: string
   todo: FormGroup

   constructor(
      private codePush: CodePush,
      private platform: Platform,
      private appSrv: ApplicationService,
      private navCtrl: NavController,
      private modal: ModalController,
      private authSrv: AuthService,
      private fs: FirebaseService
   ) {
      console.log('LoginPage constructor');
   }
   ngOnDestroy() {
      console.warn('LoginPage destroy')
      this.subUsr.unsubscribe()
      //this.subAuth.unsubscribe()
   }
   ngOnInit() {
      console.log('LoginPage init');
      this.appSrv.showLoading()
      this.platform.ready().then(() => {
         this.codePush.sync({}, (progress) => {
            this.progressStatus = JSON.stringify(progress)
         }).subscribe(status => {
            switch (status) {
               case SyncStatus.CHECKING_FOR_UPDATE:
                  this.appSrv.showAlert('cheking for update')
                  break;
               case SyncStatus.AWAITING_USER_ACTION:
                  this.appSrv.showAlert('waiting for user input')
                  break;
               case SyncStatus.IN_PROGRESS:
                  this.appSrv.showAlert('update in progress')
                  break;
               case SyncStatus.DOWNLOADING_PACKAGE:
                  this.appSrv.showAlert('downloading package')
                  break;
               case SyncStatus.UP_TO_DATE:
                  this.appSrv.showAlert('app up to date')
                  break;
               case SyncStatus.INSTALLING_UPDATE:
                  this.appSrv.showAlert('installing update')
                  break;
               case SyncStatus.UPDATE_IGNORED:
                  this.appSrv.showAlert('update ignored')
                  break;
               case SyncStatus.UPDATE_INSTALLED:
                  this.appSrv.showAlert('update installed')
                  break;
               case SyncStatus.ERROR:
                  this.appSrv.showAlert('an error occurred')
                  break;
            }
         })
      }).catch(err => {
         console.error(err)
         this.appSrv.message(err.message)
      })

      this.authSrv.verifyLoggedIn().subscribe(data => {
         this.appSrv.hideLoading()
         if (data) {
            this.subUsr = this.fs.getUserById(this.getUid(data.email)).subscribe(usr => {
               if (usr != null)
                  this.redirectHome(usr)
               else { // New User
                  const u = {
                     contacts: {},
                     uid: this.getUid(data.email),
                     displayName: data.displayName,
                     email: data.email,
                     photoURL: data.photoURL
                  }
                  this.fs.addUser(u).then(x => {
                     this.appSrv.message('Usuario registrado OK!')
                  })
               }
            })
         }
      })
   }
   signIn() {
      const mod: Modal = this.modal.create('SignPage', {
         signMode: 'signIn'
      }, {})
      mod.present()
      mod.onDidDismiss(data => {

      })
   }
   signUp(): void {
      const mod: Modal = this.modal.create('SignPage', {
         signMode: 'signUp'
      }, {})
      mod.present()
      mod.onDidDismiss(data => {
      })
   }
   loginGoogle() {
      this.appSrv.showLoading()
      this.authSrv.loginGoogle().then((data) => {
         var token = data.credential.accessToken
         const usr = {
            uid: this.getUid(data.user.email),
            displayName: data.user.displayName,
            photoURL: data.user.photoURL
         }
         this.fs.updateUser(usr)
         console.log(token, data.user)
         this.appSrv.hideLoading()
         this.redirectHome(usr)
      }).catch((err) => {
         console.log('Error: ', err.message)
      })
   }
   loginFacebook() {
      // this.appSrv.showLoading()
      // this.authSrv.loginFacebook().then((data) => {
      //    const info = data.additionalUserInfo.profile
      //    const usr = {
      //       uid: this.getUid(info.email),
      //       displayName: info.name,
      //       email: info.email,
      //       photoURL: info.picture.data.url
      //    }
      //    this.appSrv.hideLoading()
      //    this.redirectHome(usr)
      // })
   }
   logout() {
      this.authSrv.signOutUser()
   }
   download() {
      this.fs.download('MeetingMaster.apk')
   }

   private redirectHome(usr) {
      console.log('login provider: ' + usr)
      this.navCtrl.insert(0, 'HomePage', { usr: usr });
      this.navCtrl.popToRoot();
   }
   private getUid(str) {
      const res = str.replace(/\./gi, '')
      return res
   }
}






