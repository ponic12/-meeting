import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events } from 'ionic-angular';
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-memberStatus',
   templateUrl: 'memberStatus.html'
})
export class MemberStatusPage implements OnInit, OnDestroy {
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
      console.log('MemberStatusPage constructor');
   }
   ngOnDestroy() {
      console.warn('MemberStatusPage destroy');
   }
   ngOnInit(): void {
      console.log('MemberStatusPage init');
      this.title = this.navParams.get('title')
      this.evt = this.navParams.get('evt')
      this.members = this.navParams.get('members');
      this.selectAll()
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
}
