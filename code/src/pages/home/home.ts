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
   direction: boolean = false
   events: any

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
      this.fs.getEventsByUid(this.user.uid).subscribe(data => {
         this.events = data
      })
   }
   ngOnDestroy() {
      console.log('HomePage destroy')
   }
   addEvent() {
      const mod: Modal = this.modal.create('EditEventPage', {
         title: 'Nuevo Evento',
         evt: { members: [] },
         contacts: this.mapMembersToContacts(this.user.contacts, [])
      }, {})
      mod.present()
      mod.onDidDismiss(data => {
         this.save(data)
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
         this.save(data)
      })
   }
   showEvent(ev, i) {
      this.navCtrl.push('EventPage', {
         title: 'Evento',
         evt: ev,
         contacts: this.mapMembersToContacts(this.user.contacts, ev.members)
      })
   }
   removeEvent(ev, i) {
      this.fs.deleteEvent(ev)
   }
   openMenuSheet() {
      let actionSheet = this.actionCtrl.create({
         title: 'OPCIONES:',
         cssClass: 'action-sheets-basic-page',
         buttons: [
            {
               text: 'Contactos',
               handler: () => {
                  console.log('Contacts Admin');
                  this.navCtrl.push('CommunityPage', {
                     title: 'Contactos'
                  })
               }
            },            
            {
               text: 'Sugerencias',
               handler: () => {
                  console.log('Suggestions');
                  this.navCtrl.push('SuggestionsPage', {
                     title: 'Sugerencias'
                  })
               }
            },
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
   evalTypeIcon(t) {
      let src = ""
      switch (t) {
         case "calendario":
            src = "assets/imgs/cal.png"
            break;
         case "seleccion":
            src = "assets/imgs/seleccion.png"
            break;
         case "votacion":
            src = "assets/imgs/votacion.png"
            break;
         case "clasificacion":
            src = "assets/imgs/clasificacion.png"
            break;
         default:
            break;
      }
      return src
   }
   getSortedEvents(sort, fab) {
      this.sortField = sort
      this.direction = !this.direction
      fab.close()
   }
   getSortName() {
      if (this.sortField === "creationDate")
         return "Fecha"
      else
         return "Evento"
   }
   getIcon() {
      if (this.direction === true)
         return "arrow-dropdown"
      else
         return "arrow-dropup"
   }
   private save(data) {
      if (data === null) return
      data.evt.members = this.mapContactsToMembers(data.contacts)
      data.evt.owner = this.user.uid
      data.evt.ownerName = this.user.displayName
      this.fs.saveEvent(data.evt)
   }
   private mapMembersToContacts(contacts, members) {
      const lst: any = []
      contacts.forEach(item => {
         const sel = members[item.id]
         item.selected = (sel != undefined)
         item.onoff = item.selected
         lst.push(item)
      });
      return lst
   }
   private mapContactsToMembers(contacts) {
      const members: any = {}
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
