import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { AuthService } from '../../shared/core/auth.service';
import { ApplicationService } from '../../shared/services/application.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Subscription } from 'rxjs';


@IonicPage()
@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})
export class LoginPage implements OnInit, OnDestroy {
   idevt: string;

   subUsr: Subscription
   loginMode: string = "signIn"
   username: string
   displayName: string
   email: string;
   password: string;
   todo: FormGroup;
   obsAuth: any

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
      //this.obsAuth.unsubscribe()
   }
   ngOnInit() {
      console.log('LoginPage init');
      this.obsAuth = this.authSrv.verifyLoggedIn().subscribe(data => {
         if (data) {
            this.subUsr = this.fs.getUserById(this.getUid(data.email)).subscribe(usr => {
               this.navCtrl.setRoot('HomePage', { usr: usr })
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
            this.subUsr = this.fs.getUserById(this.getUid(data.email)).subscribe(usr => {
               this.idevt = this.getParameterByName('idevt');
               if (this.idevt){
                                 // Call HttpRequest to communicate new User to Event's Owner (this.idevt)
               }
               this.navCtrl.setRoot('HomePage', { usr: usr })
            })
         }
      }).catch(err => {
         this.appSrv.message('Error', 'Falla en la autenticacion!')
      });
   }
   loginGoogle() {
      this.authSrv.loginGoogle().then((data) => {
         this.redirectHome(data)
      }).catch((err) => {
         console.log('Error: ', err.message)
      })
   }
   loginFacebook() {
      this.authSrv.loginFacebook().then((data) => {
         this.redirectHome(data)
      })
   }
   download() {
      this.fs.download('MeetingMaster.apk')
   }

   private getParameterByName(name) {
      const url = window.location.href;
      name = name.replace(/[\[\]]/g, "\\$&");
      var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
         results = regex.exec(url);
      if (!results) return null;
      if (!results[2]) return '';
      return decodeURIComponent(results[2].replace(/\+/g, " "));
   }
   private redirectHome(data) {
      console.log('login provider: ' + data)
      const usr = {
         displayName: data.displayName,
         email: data.email,
         photoURL: data.photoURL
      }
      this.fs.updateUser(usr)
      this.navCtrl.setRoot('HomePage', { usr: usr })
   }
   private getUid(str) {
      const res = str.replace(/\./gi, '')
      return res
   }
}






