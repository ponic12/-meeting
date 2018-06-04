import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-suggestions',
   templateUrl: 'suggestions.html'
})
export class SuggestionsPage implements OnInit, OnDestroy {
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
      private modal: ModalController
   ) {
      console.log('SuggestionPage constructor');
      this.title = this.navParams.get('title')
      const origContacts = this.navParams.get('contacts')
      Object.assign(this.contacts, origContacts)
   }
   ngOnDestroy() {
      console.warn('SuggestionPage destroy');
   }
   ngOnInit(): void {
      console.log('SuggestionPage init');
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
