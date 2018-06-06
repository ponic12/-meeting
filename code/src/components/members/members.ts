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
   title: string
   evt: any
   members: any
   selectFlag: boolean = false
   searchText: string
   sortField: string = 'creationDate'
   direction: boolean = false

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
   statusChanged(m) {
      m.onoff = !m.onoff
   }
   selectAll(){
      this.selectFlag = !this.selectFlag
      this.members.forEach(item => {
         item.onoff = this.selectFlag
      });
   }
   getSorted(sort, fab) {
      this.sortField = sort
      this.direction = !this.direction
      fab.close()
   }
   getSortName() {
      let res = ""
      switch (this.sortField) {
         case "displayName":
            res = "Alfabetico"
            break;
         case "onoff":
            res = "Miembros"
            break;
         case "present":
            res = "Presentes"
            break;
         case "pending":
            res = "Pendientes"
            break;
         default:
            break;
      }
      return res
   }
   getIcon() {
      if (this.direction === true)
         return "arrow-dropdown"
      else
         return "arrow-dropup"
   }
   closeModal() {
      this.view.dismiss(this.members)
   }


   // availability(username) {
   //    if (!this.assistants) return
   //    const res = !(this.assistants.indexOf(username) == -1)
   //    return res
   // }
}
