import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-comments',
   templateUrl: 'comments.html'
})
export class CommentsPage implements OnInit, OnDestroy {
   title:string
   contacts:any[] = []
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
      console.log('CommentsPage constructor');
      this.title = this.navParams.get('title')
      const origContacts = this.navParams.get('contacts')
      Object.assign(this.contacts, origContacts)
   }
   ngOnDestroy() {
      console.warn('CommentsPage destroy');
   }
   ngOnInit(): void {
      console.log('CommentsPage init');
   }
   selChanged(ct){
      this.confirmFlag = true
   }
   saveMembers(){
      const data ={
         members:this.contacts
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
