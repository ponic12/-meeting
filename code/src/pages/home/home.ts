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
   sortField: string = 'creationDate'
   direction:boolean = false
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
      private fs: FirebaseService
   ) {
      console.log('HomePage contructor')
      this.user = this.navParams.get('usr')
   }

   ngOnInit() {
      console.log('HomePage init')
      this.fs.getContactsByUid(this.user.uid).subscribe(data => {
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
         title: 'Nuevo Evento',
         evt: {members:[]},
         contacts: this.mapMembersToContacts(this.user.contacts, [])
      }, {})
      mod.present()
      mod.onDidDismiss(data => {
         if (data === null) return
         data.evt.members = this.mapContactsToMembers(data.contacts)
         data.evt.creationDate = new Date().getTime()
         data.evt.modificationDate = new Date().getTime()
         data.evt.owner = this.user.uid
         this.fs.addEvent(data.evt)
      })
   }
   editEvent(ev, i) {
      const mod: Modal = this.modal.create('EditEventPage', {
         title: 'Editar Evento',
         evt: ev,
         contacts: this.mapMembersToContacts(this.user.contacts, ev.members)
      }, {})
      mod.present()
      mod.onDidDismiss(data => {
         if (data === null) return
         data.evt.members = this.mapContactsToMembers(data.contacts)
         data.evt.modificationDate = new Date().getTime()
         this.fs.saveEvent(data.evt)
      })
   }
   showEvent(ev, i) {
      const mod: Modal = this.modal.create('EventPage', {
         title: 'Evento',
         evt: { ev },
         contacts: this.mapMembersToContacts(this.user.contacts, ev.members)
      }, {})
      mod.present()
      mod.onDidDismiss(evt => {
      })
   } 

   removeEvent(ev, i) {

   }
   openMenuSheet() {
      let actionSheet = this.actionCtrl.create({
         title: 'OPCIONES:',
         cssClass: 'action-sheets-basic-page',
         buttons: [
            {
               text: 'Bajar App',
               handler: () => {
                  console.log('Download App!!!');
                  window.open('https://firebasestorage.googleapis.com/v0/b/events-12be3.appspot.com/o/MeetingMaster.apk?alt=media&token=66af8eb0-463c-44ed-a596-5a7b21ff5d8a', '_system')
               }
            },
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

   getSortedEvents(sort, fab){
      this.sortField = sort
      this.direction = !this.direction
      fab.close()
   }
   getSortName(){
      if (this.sortField === "creationDate")
         return "Fecha"
      else
         return "Evento"
   }
   getIcon(){
      if (this.direction === true)
         return "arrow-dropdown"
      else 
         return "arrow-dropup"
   }
   private mapMembersToContacts(contacts, members) {
      const lst: any = []
      contacts.forEach(item => {
         const sel = members[item.id]
         item.selected = (sel != undefined)
         lst.push(item)
      });
      return lst
   }
   private mapContactsToMembers(contacts){
      const members:any = {}
      contacts.forEach(item => {
         if (item.selected)
            members[item.id] = true
      });
      return members
   }
   private logout() {
      this.appSrv.message('Aviso', 'Saliendo...');
      //this.globalSrv.save('user', null);
      this.authSrv.signOutUser();
      this.navCtrl.setRoot('LoginPage');
   }
}
