import { Component, OnInit, OnDestroy } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

import { GlobalService } from '../../shared/services/global.service';
import { AuthService } from '../../shared/core/auth.service';
import { ApplicationService } from '../../shared/services/application.service';
import { FirebaseService } from '../../shared/services/firebase.service';


@IonicPage()
@Component({
   selector: 'page-login',
   templateUrl: 'login.html'
})
export class LoginPage implements OnInit, OnDestroy {
   username: string;
   email: string;
   password: string;
   todo: FormGroup;

   constructor(
      private globalSrv: GlobalService,
      private appSrv: ApplicationService,
      private navCtrl: NavController,
      private authSrv: AuthService,
      private formBuilder: FormBuilder,
      private fs: FirebaseService
   ) {
      console.log('LoginPage constructor');
      this.todo = this.formBuilder.group({
         fcn_username: ['', [Validators.required]],
         fcn_password: ['', [Validators.required]]
      });
   }
   ngOnDestroy() {
      console.warn('HomePage destroy')
   }
   ngOnInit() {
      console.log('LoginPage init');
      // this.globalSrv.get('user').subscribe(data =>
      //   this.go(data)
      // );
      this.authSrv.verifyLoggedIn().subscribe(data => {
         if (data) {
            var o = {
               username:data.displayName,
               email: data.email,
               photoURL: data.photoURL
            };
            this.globalSrv.save('user', o);
            this.go(o);
         }
      });
   }
   signup(): void {
      this.navCtrl.push('SignUpPage');
   }
   signin() {
      // this.authSrv.signInUser(this.email, this.password).then(data =>{
      //   this.initUser(data)
      // });
      var data = { displayName: this.username };
      this.initUser(data);
   }
   loginGoogle() {
      this.authSrv.loginGoogle().then(x => {
         this.navCtrl.push('HomePage')
      })
      // .then(data =>
      //   this.initUser(data)
      // );
   }

   loginFacebook(){
      this.authSrv.loginFacebook().then(x => {
         this.navCtrl.push('HomePage')
      })
   }

   private initUser(data) {
      var o = {
         username: this.username.toUpperCase(),
         email: this.email
      };
      this.globalSrv.save('user', o);
      this.go(data);
   }
   private go(data) {
      if (data)
         this.navCtrl.setRoot('HomePage', data);
   }
}






