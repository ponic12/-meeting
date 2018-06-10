import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events, ModalController, Modal, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'
import { FirebaseService } from '../../shared/services/firebase.service';

@IonicPage()
@Component({
   selector: 'page-editEvent',
   templateUrl: 'editEvent.html'
})
export class EditEventPage implements OnInit, OnDestroy {
   title: string
   evt: any
   user: any
   contactsFull: any[]
   question: string
   answerType: string
   selectionItems: string[] = []
   newItem: string

   constructor(
      private platform: Platform,
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
      private fs: FirebaseService,
      private modal: ModalController,
      private socialSharing: SocialSharing
   ) {
      console.log('EditEventPage constructor')
   }
   ngOnDestroy() {
      console.warn('EditEventPage destroy')
   }
   ngOnInit(): void {
      console.log('EditEventPage init')
      this.title = this.navParams.get('title')
      this.evt = this.navParams.get('evt')
      this.user = this.navParams.get('user')
      this.contactsFull = this.navParams.get('contactsFull')

      this.evt.owner = this.user.uid
      this.evt.ownerName = this.user.displayName
      this.evt.ownerPhotoURL = this.user.photoURL
      this.setMembersToContacts()

      if (this.evt.type == 'calendario')
         this.evt.availability = {}
      else {
         this.question = this.evt.question
         if (this.evt.type == 'seleccion') {
            this.selectionItems = this.evt.selectionItems
            this.answerType = this.evt.answerType
         }
      }
   }

   adminMembers() {
      const mod: Modal = this.modal.create('MembersPage', {
         title: "Miembros",
         owner: this.evt.owner,
         contactsFull: this.contactsFull
      }, {})
      mod.present()
      mod.onDidDismiss(cf => {
      })
   }
   save() {
      this.getMembersFromContacts()
      switch (this.evt.type) {
         case 'seleccion':
            this.evt.question = this.question
            this.evt.selectionItems = this.selectionItems
            this.evt.answerType = this.answerType
            break;
         default:
            this.evt.question = this.question
            break;
      }
      this.fs.saveEvent(this.evt)
      this.view.dismiss()
   }
   closeModal() {
      this.view.dismiss(null)
   }
   share() {
      if (this.platform.is('cordova')) {
         //const url = "https://firebasestorage.googleapis.com/v0/b/events-12be3.appspot.com/o/MeetingMaster.apk?alt=media&token=66af8eb0-463c-44ed-a596-5a7b21ff5d8a"
         const url = 'https://events-12be3.firebaseapp.com'
         this.socialSharing.shareViaWhatsApp('Invitacion a evento!', '', url).then(() => {
            this.appSrv.message('Aviso', 'Se ha enviado notificacion a evento!')
         }).catch(() => {
            this.appSrv.message('Error', 'No posee Whatsapp')
         })
         // this.socialSharing.canShareVia('Whatsapp').then(() => {
         //    this.socialSharing.shareViaWhatsApp('Invitacion a evento!', 'http://www.clarin.com').then(() => {
         //       this.appSrv.message('Aviso', 'Se ha enviado notificacion a evento!')
         //    }).catch(() => {
         //       this.appSrv.message('Error', 'No posee Whatsapp')
         //    })
         // })
      }

      // this.socialSharing.canShareViaEmail().then(() => {
      //    // Sharing via email is possible
      // }).catch(() => {
      //    // Sharing via email is not possible
      // });

      // // Share via email
      // this.socialSharing..shareViaEmail('Body', 'Subject', ['recipient@example.org']).then(() => {
      //    // Success!
      // }).catch(() => {
      //    // Error!
      // });
   }
   addItem() {
      this.selectionItems.push(this.newItem)
   }
   removeItem(item) {
      this.selectionItems.splice(item, 1)
   }

   private setMembersToContacts() {
      this.contactsFull.forEach(item => {
         item.selected = (this.evt.members[item.uid] == true)
      })
   }
   private getMembersFromContacts() {
      this.contactsFull.forEach(item => {
         if (item.selected == true)
            this.evt.members[item.uid] = true
      })
   }
}
