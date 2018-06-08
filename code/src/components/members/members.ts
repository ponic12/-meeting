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
   contactsFull: any
   selectFlag: boolean = false
   searchText: string
   sortField: string = 'creationDate'
   direction: boolean = false
   confirmFlag: boolean = false

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
      this.contactsFull = this.navParams.get('contactsFull');
   }
   selectAll() {
      this.selectFlag = !this.selectFlag
      this.contactsFull.forEach(item => {
         item.selected = this.selectFlag
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
      this.view.dismiss(this.contactsFull)
   }
}
