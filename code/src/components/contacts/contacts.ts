import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';
import { GlobalService } from '../../shared/services/global.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-contacts',
   templateUrl: 'contacts.html'
})
export class ContactsPage implements OnInit, OnDestroy {
   title:string
   contacts:any

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private modal: ModalController,
      private socialSharing: SocialSharing
   ) {
      console.log('ContactsPage constructor');
   }
   ngOnDestroy() {
      console.warn('ContactsPage destroy');
   }
   ngOnInit(): void {
      console.log('ContactsPage init');
      this.title = this.navParams.get('title')
      this.contacts = this.navParams.get('contacts');
   }

   save(){
      const data ={
         contacts:this.contacts
      }
      this.view.dismiss(data)
   }
   closeModal(){
      this.view.dismiss(null)
   }
   
}
