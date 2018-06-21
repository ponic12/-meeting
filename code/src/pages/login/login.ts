import { Component, OnInit, OnDestroy } from '@angular/core'
import { NavController, IonicPage } from 'ionic-angular'
import { Validators, FormBuilder, FormGroup } from '@angular/forms'

import { AuthService } from '../../shared/core/auth.service'
import { ApplicationService } from '../../shared/services/application.service'
import { FirebaseService } from '../../shared/services/firebase.service'
import { Subscription } from 'rxjs'


@IonicPage()
@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})
export class LoginPage implements OnInit, OnDestroy {
   subUsr: Subscription
   subAuth: Subscription

   loginMode: string = "signIn"
   username: string
   displayName: string
   email: string
   password: string
   todo: FormGroup

   constructor(
      private appSrv: ApplicationService,
      private navCtrl: NavController,
      private authSrv: AuthService,
      private formBuilder: FormBuilder,
      private fs: FirebaseService
   ) {
      console.log('LoginPage constructor');
      this.todo = this.formBuilder.group({
         fcn_email: ['', [Validators.required]],
         fcn_password: ['', [Validators.required]]
      });
   }
   ngOnDestroy() {
      console.warn('LoginPage destroy')
      this.subUsr.unsubscribe()
      this.subAuth.unsubscribe()
   }
   ngOnInit() {
      console.log('LoginPage init');
      this.appSrv.showLoading()
      this.subAuth = this.authSrv.verifyLoggedIn().subscribe(data => {
         this.appSrv.hideLoading()
         if (data) {
            this.subUsr = this.fs.getUserById(this.getUid(data.email)).subscribe(usr => {
               if (usr != null) {
                  this.navCtrl.insert(0, 'HomePage', { usr: usr });
                  this.navCtrl.popToRoot();
                  //this.navCtrl.setRoot('HomePage', { usr: usr })
               }
               else { // New User
                  const u = {
                     contacts:{},
                     uid: this.getUid(data.email),
                     displayName: data.displayName,
                     email: data.email,
                     photoURL: data.photoURL
                  }
                  this.fs.addUser(u).then(x => {
                     this.appSrv.message('Atencion', 'Usuario registrado OK!')
                  })
               }
            })
         }
      })
   }
   register(): void {
      this.authSrv.registerUser(this.email, this.password).then((res) => {
         if (!res) {
            this.appSrv.message('Error', 'Usuario ya registrado!')
            return
         }
         const usr = {
            email: this.email,
            displayName: this.username,
            photoURL: 'assets/imgs/person.png',
            uid: this.getUid(this.email)
         }
         this.fs.addUser(usr).then(x => {
            this.loginMode = 'signIn'
            this.appSrv.message('Atencion', 'Usuario registrado OK!')
         })
      })
   }
   signin() {
      this.appSrv.showLoading()
      this.authSrv.signInUser(this.email, this.password).then(data => {
         if (data === undefined)
            this.appSrv.message('Error', 'Usuario o contraseña no valida!')
         else {
            const uid = this.getUid(data.email)
            this.subUsr = this.fs.getUserById(uid).subscribe(usr => {
               this.navCtrl.insert(0, 'HomePage', { usr: usr });
               this.navCtrl.popToRoot();
            })
         }
         this.appSrv.hideLoading()
      }).catch(err => {
         this.appSrv.message('Error', 'Falla en la autenticacion!')
      });
   }
   loginGoogle() {
      this.appSrv.showLoading()
      this.authSrv.loginGoogle().then((data) => {
         var token = data.credential.accessToken
         const usr = {
            uid: this.getUid(data.user.email),
            displayName: data.user.displayName,
            email: data.user.email,
            photoURL: data.user.photoURL
         }
         console.log(token, data.user)
         this.appSrv.hideLoading()
         this.redirectHome(usr)
      }).catch((err) => {
         console.log('Error: ', err.message)
      })
   }
   loginFacebook() {
      this.appSrv.showLoading()
      this.authSrv.loginFacebook().then((data) => {
         const info = data.additionalUserInfo.profile
         const usr = {
            uid: this.getUid(info.email),
            displayName: info.name,
            email: info.email,
            photoURL: info.picture.data.url
         }
         this.appSrv.hideLoading()
         this.redirectHome(usr)
      })
   }
   logout() {
      this.authSrv.signOutUser()
   }
   download() {
      this.fs.download('MeetingMaster.apk')
   }

   private redirectHome(usr) {
      console.log('login provider: ' + usr)
      this.fs.updateUser(usr)
      this.navCtrl.insert(0, 'HomePage', { usr: usr });
      this.navCtrl.popToRoot();
   }
   private getUid(str) {
      const res = str.replace(/\./gi, '')
      return res
   }
}






