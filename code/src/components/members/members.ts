import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-members',
   templateUrl: 'members.html'
})
export class MembersPage implements OnInit, OnDestroy {
   title:string
   members:any
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
      console.log('MembersPage constructor');
   }
   ngOnDestroy() {
      console.warn('MembersPage destroy');
   }
   ngOnInit(): void {
      console.log('MembersPage init');
      this.title = this.navParams.get('title')
      this.members = this.navParams.get('members');
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
         members:this.members
      }
      this.view.dismiss(data)
   }
   getSorted(sort, fab){
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
