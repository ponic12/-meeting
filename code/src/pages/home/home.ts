import { Component, OnInit, OnDestroy } from '@angular/core'
import { NavController, IonicPage, NavParams, ActionSheetController, ModalController, Modal } from 'ionic-angular'
import { ApplicationService } from '../../shared/services/application.service'
import { GlobalService } from '../../shared/services/global.service';
import { AuthService } from '../../shared/core/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';

@IonicPage()
@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {
   title: string = "Meeting Master"
   user: any
   photoPath: string
   today: number = new Date().getTime()
   searchText: string
   field: string = 'creationDate'
   userInfo: any
   //    { creationDate: 1526296836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Consorcio Besares 3950', description: 'Reunion de consorcio para definir tareas' },
   //    { creationDate: 1524295836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Cumple Gallo', description: 'Fiesta sorpresa' },
   //    { creationDate: 1522294836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Vacaciones invierno 2018', description: 'Rango de fechas de vacas' },
   //    { creationDate: 1521293836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Viaje Espana 2018', description: 'Reunion de integrantes' },
   //    { creationDate: 1520292836286, lastModification: 1526297935286, estimatedDate: 1526398936286, eventName: 'Reunion Siemens', description: 'Ex trabajadores de Siemens' }
   // ]

   constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private actionCtrl: ActionSheetController,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private authSrv: AuthService,
      private modal: ModalController,
      private fs:FirebaseService
   ) {
      console.log('HomePage contructor')

      this.user = this.globalSrv.getVar('user')
      
      let ph = this.navParams.get('photoURL')
      if (ph)
         this.photoPath = ph
      else
         this.photoPath = "assets/imgs/person.png"
   }

   ngOnInit() {
      console.log('HomePage init')
      this.fs.getUserData(this.user.email).subscribe(data=>{
         this.userInfo = data
      })
   }
   ngOnDestroy() {
      console.log('HomePage destroy')
   }

   addEvent() {
      const mod: Modal = this.modal.create('EditEventPage', {evt:{}}, {})
      mod.present()
      mod.onDidDismiss(evt=>{
         this.fs.addEvent(evt)
      })
   }
   removeEvent(ev, i) {

   }
   showEvent(ev, i) {
      this.navCtrl.push('EventPage', { evt: ev })
   }
   editEvent(ev, i){
      const mod: Modal = this.modal.create('EditEventPage', {evt:ev}, {})
      mod.present()
      mod.onDidDismiss(evt=>{
         this.fs.saveEvent(evt)
      })
   }

   openMenuSheet() {
      let actionSheet = this.actionCtrl.create({
         title: 'Opciones',
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
   private logout() {
      this.appSrv.message('Aviso', 'Saliendo...');
      this.globalSrv.save('user', null);
      this.authSrv.signOutUser();
      this.navCtrl.setRoot('LoginPage');
   }
}
