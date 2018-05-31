import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-contacts',
   templateUrl: 'contacts.html'
})
export class ContactsPage implements OnInit, OnDestroy {
   title:string
   contacts:any
   searchText: string
   sortField: string = 'creationDate'
   direction:boolean = false
   confirmFlag:boolean=false

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
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

   addMember(){
      // copiar los seleccionaods a los miembros
   }
   statusChanged(ct){
      ct.selected = true
      this.confirmFlag = true
   }
   save(){
      const data ={
         contacts:this.contacts
      }
      this.view.dismiss(data)
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
