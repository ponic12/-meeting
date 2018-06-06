import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../shared/core/auth.service';
import { ApplicationService } from '../../shared/services/application.service';
import { FirebaseService } from '../../shared/services/firebase.service';


@IonicPage()
@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})
export class LoginPage implements OnInit, OnDestroy {
   loginMode: string = "signIn"
   username: string
   displayName: string
   email: string;
   password: string;
   todo: FormGroup;
   obsAuth:any

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
      console.warn('HomePage destroy')
      this.obsAuth.unsubscribe()
   }
   ngOnInit() {
      console.log('LoginPage init');
      this.obsAuth = this.authSrv.verifyLoggedIn().subscribe(data => {
         if (data) {
            this.fs.getUserById(this.getUid(data.email)).subscribe(usr=>{
               this.navCtrl.setRoot('HomePage', { usr: usr });               
            })
         }
      });
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
      this.authSrv.signInUser(this.email, this.password).then(data => {
         if (data === undefined)
            this.appSrv.message('Error', 'Usuario o contraseña no valida!')
         else {
            const o = {
               email: data.email,
               displayName: data.displayName,
               photoURL: 'assets/imgs/person.png',
               uid: this.getUid(data.email)
            }
            this.fs.updateUser(o)
            this.navCtrl.setRoot('HomePage', { usr: o })
         }
      }).catch(err => {
         this.appSrv.message('Error', 'Falla en la autenticacion!')
      });
   }
   loginGoogle() {
      this.authSrv.loginGoogle().then(x => {
         this.fs.updateUser(x)
         this.navCtrl.push('HomePage')
      })
   }
   loginFacebook() {
      this.authSrv.loginFacebook().then(x => {
         this.fs.updateUser(x)
         this.navCtrl.push('HomePage')
      })
   }
   download() {
      this.fs.download('MeetingMaster.apk')
   }

   private getUid(str) {
      const res = str.replace(/\./gi, '')
      return res
   }
}






