import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-members',
   templateUrl: 'members.html'
})
export class MembersPage implements OnInit, OnDestroy {
   title:string
   evt:any
   members:any

   searchText: string
   sortField: string = 'creationDate'
   direction:boolean = false

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService
   ) {
      console.log('MembersPage constructor');
   }
   ngOnDestroy() {
      console.warn('MembersPage destroy');
   }
   ngOnInit(): void {
      console.log('MembersPage init');
      this.title = this.navParams.get('title')
      this.evt = this.navParams.get('evt')
      this.members = this.navParams.get('members');
   }
   statusChanged(ct){
      ct.onoff = !ct.onoff
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
      const editMode = this.checkEditMode()
      this.view.dismiss(null)
   }

   private checkEditMode(){
      let res = false
      const membersON = []
      this.members.forEach(item => {
         if (item.onoff === true)
            membersON.push(item)
      });
      res = ((membersON.length == 1)&&(membersON[0].uid == this.evt.owner))
      return res
   }

   // availability(username) {
   //    if (!this.assistants) return
   //    const res = !(this.assistants.indexOf(username) == -1)
   //    return res
   // }
}
