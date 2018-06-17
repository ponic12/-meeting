import { Component, OnInit, OnDestroy } from '@angular/core'
import { NavController, IonicPage, NavParams, ActionSheetController, ModalController, Modal, Platform } from 'ionic-angular'
import { ApplicationService } from '../../shared/services/application.service'
import { GlobalService } from '../../shared/services/global.service';
import { AuthService } from '../../shared/core/auth.service';
import { FirebaseService } from '../../shared/services/firebase.service';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
   selector: 'page-home',
   templateUrl: 'home.html'
})
export class HomePage implements OnInit, OnDestroy {
   title: string = "Meeting Master"
   user: any
   community: any[]
   contactsFull: any[]
   events: any
   photoPath: string
   today: number = new Date().getTime()
   searchText: string
   sortField: string = 'creationDate'
   direction: boolean = false
   private subEvt: Subscription
   private subCom: Subscription

   constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      private actionCtrl: ActionSheetController,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private authSrv: AuthService,
      private modal: ModalController,
      private platform: Platform,
      private fs: FirebaseService
   ) {
      console.log('HomePage contructor')
      this.user = this.navParams.get('usr')
   }

   ngOnInit() {
      console.log('HomePage init')

      this.subEvt = this.fs.getEventsByUid(this.user.uid).subscribe(data => {
         this.events = data
         if (((this.platform.is('mobileweb') == true) || (this.platform.is('core') == true)) == false) {
            this.initFCM()
         }
      })
      console.log('subEvt: ', this.subEvt.closed)

      this.subCom = this.fs.getCommunity().subscribe(data => {
         this.community = data
         this.contactsFull = this.getContactsFull()
      })
      console.log('subCom: ', this.subCom.closed)
   }
   ngOnDestroy() {
      console.log('HomePage destroy')
      this.subEvt.unsubscribe()
      this.subCom.unsubscribe()
   }
   addEvent() {
      this.showEditEvent('Nuevo Evento', { members: [] })
   }
   editEvent(ev, i) {
      this.showEditEvent('Editar Evento', ev)
   }
   showEvent(ev, i) {
      this.navCtrl.push('EventPage', {
         title: 'Evento',
         evt: ev,
         user: this.user,
         membersFull: this.getMembersFull(ev)
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
            // {
            //    text: 'Contactos',
            //    handler: () => {
            //       console.log('Contacts Admin');
            //       this.navCtrl.push('ContactsPage', {
            //          title: 'Contactos',
            //          uid: this.user.uid
            //       })
            //    }
            // },
            {
               text: 'Sugerencias',
               handler: () => {
                  console.log('Suggestions');
                  this.navCtrl.push('SuggestionsPage', {
                     title: 'Sugerencias',
                     user: this.user
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
   private initFCM() {
      this.events.forEach(ev => {
         if (ev.owner == this.user.uid)
            FCMPlugin.subscribeToTopic(ev.id)
      });
      FCMPlugin.subscribeToTopic('config')
      FCMPlugin.subscribeToTopic(this.user.uid)
      //var self = this;
      // FCMPlugin.onNotification(
      //    function (data) {
      //       self.evalNotification(data);
      //    },
      //    function (msg) {
      //       console.log('onNotification: ' + msg);
      //    },
      //    function (err) {
      //       console.log('Error onNotification: ' + err);
      //    }
      // );
   }
   private showEditEvent(tit, ev) {
      const mod: Modal = this.modal.create('EditEventPage', {
         title: tit,
         evt: ev,
         user: this.user,
         contactsFull: this.contactsFull
      }, {})
      mod.present()
      mod.onDidDismiss(data => {
      })
   }
   private getContactsFull() {
      const lst: any = []
      if (this.user.contacts) {
         this.community.forEach(p => {
            const sel = (this.user.contacts[p.uid])
            if (sel == true) {
               lst.push(p)
            }
         });
      }
      return lst
   }
   private getMembersFull(ev) {
      const lst: any = []
      if (ev.members) {
         this.contactsFull.forEach(p => {
            const sel = (ev.members[p.uid])
            if (sel == true) {
               lst.push(p)
            }
         });
      }
      return lst
   }
   private logout() {
      if (((this.platform.is('mobileweb') == true) || (this.platform.is('core') == true)) == false) {
         this.events.forEach(ev => {
            if (ev.owner == this.user.uid)
               FCMPlugin.unsubscribeFromTopic(ev.id)
         })
         FCMPlugin.unsubscribeToTopic('config')
         FCMPlugin.unsubscribeToTopic(this.user.uid)
      }
      this.appSrv.message('Aviso', 'Saliendo...');
      this.authSrv.signOutUser();
      this.navCtrl.setRoot('LoginPage');
   }
}
