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
   events: any
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
      
      // let ph = this.user.photoURL// this.navParams.get('photoURL')
      // if (ph)
      //    this.photoPath = ph
      // else
      //    this.photoPath = "assets/imgs/person.png"
   }

   ngOnInit() {
      console.log('HomePage init')
      this.fs.getContactsByUid(this.user.uid).subscribe(data=>{
         this.user.contacts = data
      })
      this.fs.getEventsByUid(this.user.uid).subscribe(data=>{
         this.events = data
      })
   }
   ngOnDestroy() {
      console.log('HomePage destroy')
   }

   addEvent() {
      const mod: Modal = this.modal.create('EditEventPage', {
         title:'Nuevo Evento',
         evt:{}, 
         contacts:this.user.contacts
      }, {})
      mod.present()
      mod.onDidDismiss(evt=>{
         this.fs.addEvent(evt)
      })
   }
   removeEvent(ev, i) {

   }
   showEvent(ev, i) {
      const mod: Modal = this.modal.create('EventPage', {
         title:'Evento',
         evt:{ev}, 
         contacts: this.mapMembersToContacts(ev)
      }, {})
      mod.present()
      mod.onDidDismiss(evt=>{
      })
   }
   editEvent(ev, i){
      const mod: Modal = this.modal.create('EditEventPage', {
         title:'Editar Evento',
         evt:ev,
         contacts: this.mapMembersToContacts(ev)
      }, {})
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

   private mapMembersToContacts(ev){
      const lst:any = []
      this.user.contacts.forEach(item => {
         const sel = ev.members[item.id]
         item.selected = (sel != undefined)
         lst.push(item)
      });
      return lst
   }
   private logout() {
      this.appSrv.message('Aviso', 'Saliendo...');
      this.globalSrv.save('user', null);
      this.authSrv.signOutUser();
      this.navCtrl.setRoot('LoginPage');
   }
}
