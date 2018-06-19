import { Component, OnInit, OnDestroy } from '@angular/core'
import { NavController, IonicPage, ActionSheetController } from 'ionic-angular'
import { Validators, FormBuilder, FormGroup } from '@angular/forms'
import { HttpClient } from '@angular/common/http'

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
   idevt: string
   isLogged:boolean = false
   usr:any

   subUsr: Subscription
   subNotify: Subscription
   subAuth: Subscription

   loginMode: string = "signIn"
   username: string
   displayName: string
   email: string
   password: string
   todo: FormGroup

   constructor(
      private actionCtrl: ActionSheetController,
      private appSrv: ApplicationService,
      private navCtrl: NavController,
      private authSrv: AuthService,
      private formBuilder: FormBuilder,
      private fs: FirebaseService,
      public http: HttpClient
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
      this.subNotify.unsubscribe()
   }
   ngOnInit() {
      console.log('LoginPage init');
      this.subAuth = this.authSrv.verifyLoggedIn().subscribe(data => {
         this.isLogged = (data != undefined)
         this.usr = data
         if (data) {
            this.subUsr = this.fs.getUserById(this.getUid(data.email)).subscribe(usr => {
               if (usr != null)
                  this.navCtrl.setRoot('HomePage', { usr: usr })
               else
                  this.appSrv.message('Error', 'El usuario no esta registrado')
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
      this.authSrv.signInUser(this.email, this.password).then(data => {
         if (data === undefined)
            this.appSrv.message('Error', 'Usuario o contraseña no valida!')
         else {
            const uid = this.getUid(data.email)
            this.subUsr = this.fs.getUserById(uid).subscribe(usr => {
               this.notifyMemberInEvent(uid)
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
   googleLogin() {
      this.authSrv.googleLogin().then(data=>{
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
   openMenuSheet() {
      let actionSheet = this.actionCtrl.create({
         title: 'OPCIONES:',
         cssClass: 'action-sheets-basic-page',
         buttons: [
            {
               text: 'Salir',
               handler: () => {
                  console.log('Logout!!!');
                  this.logout();
               }
            }, {
               text: 'Cancelar',
               role: 'cancel',
               handler: () => {
                  console.log('Cancel clicked');
               }
            }
         ]
      });
      actionSheet.present();
   }
   logout(){
      this.authSrv.signOutUser()
   }
   download() {
      this.fs.download('MeetingMaster.apk')
   }

   private notifyMemberInEvent(uid){
      this.idevt = idEvtParam
      if (this.idevt){
         this.subNotify = this.http.get<any>('https://us-central1-events-12be3.cloudfunctions.net/notifyMember/'+ this.idevt + '/' + uid)
         .subscribe(o=>{
            console.log('Notify ok: ', o)
         })
         // .catch((error, caught) => {
         //     console.log('Error HTTPS: ', error)
         //     return caught //Observable.throw(error);
         // }) as any;         // Call HttpRequest to communicate new User to Event's Owner (this.idevt)
      }
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






