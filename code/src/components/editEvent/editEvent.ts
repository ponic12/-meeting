import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-editEvent',
   templateUrl: 'editEvent.html'
})
export class EditEventPage implements OnInit, OnDestroy {
   title:string
   evt:any
   contacts:any

   constructor(
      private platform: Platform,
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
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
      this.contacts = this.navParams.get('contacts')
   }

   addContact(){
      const mod: Modal = this.modal.create('ContactsPage', {
         title:"Contactos",
         contacts:this.contacts
      }, {})
      mod.present()
      mod.onDidDismiss(x=>{
      })
   }
   save(){
      const data ={
         evt:this.evt,
         contacts: this.contacts
      }
      this.view.dismiss(data)
   }
   closeModal(){
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
}
