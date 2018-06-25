import { Component, OnInit, OnDestroy } from '@angular/core'
import { NavController, IonicPage, NavParams, ModalController, Modal, AlertController } from 'ionic-angular'
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { ApplicationService } from '../../shared/services/application.service'
import { GlobalService } from '../../shared/services/global.service';
import { AuthService } from '../../shared/core/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { HttpClient } from '@angular/common/http'

import { Subscription } from 'rxjs';

@IonicPage()
@Component({
   selector: 'page-sign',
   templateUrl: 'sign.html'
})
export class SignPage implements OnInit, OnDestroy {
   signMode:string
   email:string
   password:string
   username:string
   todo: FormGroup

   constructor(
      private alertCtrl: AlertController,
      private navParams: NavParams,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private authSrv: AuthService,
      private modal: ModalController,
      private formBuilder: FormBuilder,
      private fs: FirebaseService
   ) {
      console.log('SignPage contructor')
      this.todo = this.formBuilder.group({
         fcn_email: ['', [Validators.required]],
         fcn_password: ['', [Validators.required]]
      });
      this.signMode = this.navParams.get('signMode')
   }

   ngOnInit() {
      console.log('SignPage init')
      
   }
   ngOnDestroy() {
      console.log('SignPage destroy')
   }

   signIn(){
      this.appSrv.showLoading()
      this.authSrv.signInUser(this.email, this.password).then(data => {
         if (data === undefined){
            this.appSrv.hideLoading()
            this.appSrv.message('Error', 'Usuario o contraseña no valida!')
         }
      }).catch(err => {
         this.appSrv.message('Error', 'Falla en la autenticacion!')
      })
   }
   signUp(){
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
            this.appSrv.message('Atencion', 'Usuario registrado OK!')
         })
      })   
   }

   private getUid(str) {
      const res = str.replace(/\./gi, '')
      return res
   }
}
