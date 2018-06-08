import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'
import { FirebaseService } from '../../shared/services/firebase.service';

@IonicPage()
@Component({
   selector: 'page-contacts',
   templateUrl: 'contacts.html'
})
export class ContactsPage implements OnInit, OnDestroy {
   title:string
   user:any
   community:any
   searchText: string
   sortField: string = 'creationDate'
   direction:boolean = false
   confirmFlag:boolean=false

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private fs: FirebaseService,
      private appSrv: ApplicationService,
      private modal: ModalController
   ) {
      console.log('ContactsPage constructor')
      this.title = this.navParams.get('title')
      this.user = this.navParams.get('user')
      this.community = this.navParams.get('community')
   }
   ngOnDestroy() {
      console.warn('ContactsPage destroy');
   }
   ngOnInit(): void {
      console.log('ContactsPage init');
      this.community.forEach(p => {
         p.selected = (this.user.contacts[p.uid]==true)
      });
   }
   selChanged(ct){
      this.confirmFlag = true
   }
   saveToContacts(){
      const friends = {}
      this.community.forEach(p => {
         if (p.selected == true){         
            friends[p.uid] = true
         }
      });
      this.user.contacts = friends
      this.fs.updateUser(this.user)
      this.view.dismiss()
   }
   getSortedContacts(sort, fab){
      this.sortField = sort
      this.direction = !this.direction
      fab.close()
   }   
   getSortName(){
      if (this.sortField === "displayName")
         return "Persona"
      else
         return "Miembros"
   }   
   getIcon(){
      if (this.direction === true)
         return "arrow-dropdown"
      else 
         return "arrow-dropup"
   }   
   closeModal(){
      this.view.dismiss(null)
   }
}
