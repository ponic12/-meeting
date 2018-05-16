import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavParams, Events } from 'ionic-angular';

import { EventService } from './event.service'
import { ApplicationService } from '../../shared/services/application.service';
import { GlobalService } from '../../shared/services/global.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-event',
   templateUrl: 'event.html'
})
export class EventPage implements OnInit, OnDestroy {
   title: string = "Evento"
   editEventNameFlag: boolean = false
   editUsernameFlag: boolean = false
   evt: any

   constructor(
      private navParams: NavParams,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private evtSrv: EventService
   ) {
      console.log('EventPage constructor');
   }
   ngOnDestroy() {
      console.warn('EventPage destroy');
   }
   ngOnInit(): void {
      console.log('EventPage init');
      this.evt = this.navParams.get('evt')
      this.editEventNameFlag = (this.evt.creationDate === undefined)
      this.editUsernameFlag = this.editEventNameFlag
      this.evt.members = []
      this.evt.days = [
         {
            day: 'LU', dic: [
               { hour: 0, value: 0 },
               { hour: 1, value: 0 },
               { hour: 2, value: 0 },
               { hour: 3, value: 0 },
               { hour: 4, value: 0 },
               { hour: 5, value: 0 },
               { hour: 6, value: 0 },
               { hour: 7, value: 0 },
               { hour: 8, value: 1 },
               { hour: 9, value: 1 },
               { hour: 10, value: 1 },
               { hour: 11, value: 1 },
               { hour: 12, value: 0 },
               { hour: 13, value: 0 },
               { hour: 14, value: 0 },
               { hour: 15, value: 0 },
               { hour: 16, value: 0 },
               { hour: 17, value: 0 },
               { hour: 18, value: 0 },
               { hour: 19, value: 1 },
               { hour: 20, value: 1 },
               { hour: 21, value: 1 },
               { hour: 22, value: 0 },
               { hour: 23, value: 0 }
            ]
         },
         {
            day: 'MA', dic: [
               { hour: 0, value: 0 },
               { hour: 1, value: 0 },
               { hour: 2, value: 0 },
               { hour: 3, value: 0 },
               { hour: 4, value: 0 },
               { hour: 5, value: 0 },
               { hour: 6, value: 0 },
               { hour: 7, value: 0 },
               { hour: 8, value: 1 },
               { hour: 9, value: 1 },
               { hour: 10, value: 1 },
               { hour: 11, value: 1 },
               { hour: 12, value: 0 },
               { hour: 13, value: 0 },
               { hour: 14, value: 0 },
               { hour: 15, value: 0 },
               { hour: 16, value: 0 },
               { hour: 17, value: 0 },
               { hour: 18, value: 0 },
               { hour: 19, value: 1 },
               { hour: 20, value: 1 },
               { hour: 21, value: 1 },
               { hour: 22, value: 0 },
               { hour: 23, value: 0 }
            ]
         },
         {
            day: 'MI', dic: [
               { hour: 0, value: 0 },
               { hour: 1, value: 0 },
               { hour: 2, value: 0 },
               { hour: 3, value: 0 },
               { hour: 4, value: 0 },
               { hour: 5, value: 0 },
               { hour: 6, value: 0 },
               { hour: 7, value: 0 },
               { hour: 8, value: 0 },
               { hour: 9, value: 0 },
               { hour: 10, value: 0 },
               { hour: 11, value: 0 },
               { hour: 12, value: 0 },
               { hour: 13, value: 0 },
               { hour: 14, value: 0 },
               { hour: 15, value: 0 },
               { hour: 16, value: 0 },
               { hour: 17, value: 0 },
               { hour: 18, value: 0 },
               { hour: 19, value: 0 },
               { hour: 20, value: 0 },
               { hour: 21, value: 0 },
               { hour: 22, value: 0 },
               { hour: 23, value: 0 }
            ]
         },
         {
            day: 'JU', dic: [
               { hour: 0, value: 0 },
               { hour: 1, value: 0 },
               { hour: 2, value: 0 },
               { hour: 3, value: 0 },
               { hour: 4, value: 0 },
               { hour: 5, value: 0 },
               { hour: 6, value: 0 },
               { hour: 7, value: 0 },
               { hour: 8, value: 0 },
               { hour: 9, value: 0 },
               { hour: 10, value: 0 },
               { hour: 11, value: 0 },
               { hour: 12, value: 0 },
               { hour: 13, value: 0 },
               { hour: 14, value: 0 },
               { hour: 15, value: 0 },
               { hour: 16, value: 0 },
               { hour: 17, value: 1 },
               { hour: 18, value: 1 },
               { hour: 19, value: 1 },
               { hour: 20, value: 1 },
               { hour: 21, value: 1 },
               { hour: 22, value: 1 },
               { hour: 23, value: 1 }
            ]
         },
         {
            day: 'VI', dic: [
               { hour: 0, value: 0 },
               { hour: 1, value: 0 },
               { hour: 2, value: 0 },
               { hour: 3, value: 0 },
               { hour: 4, value: 0 },
               { hour: 5, value: 0 },
               { hour: 6, value: 0 },
               { hour: 7, value: 0 },
               { hour: 8, value: 0 },
               { hour: 9, value: 0 },
               { hour: 10, value: 0 },
               { hour: 11, value: 1 },
               { hour: 12, value: 0 },
               { hour: 13, value: 0 },
               { hour: 14, value: 0 },
               { hour: 15, value: 0 },
               { hour: 16, value: 0 },
               { hour: 17, value: 0 },
               { hour: 18, value: 0 },
               { hour: 19, value: 1 },
               { hour: 20, value: 1 },
               { hour: 21, value: 1 },
               { hour: 22, value: 0 },
               { hour: 23, value: 0 }
            ]
         },
         {
            day: 'SA', dic: [
               { hour: 0, value: 0 },
               { hour: 1, value: 0 },
               { hour: 2, value: 0 },
               { hour: 3, value: 0 },
               { hour: 4, value: 0 },
               { hour: 5, value: 0 },
               { hour: 6, value: 0 },
               { hour: 7, value: 0 },
               { hour: 8, value: 1 },
               { hour: 9, value: 1 },
               { hour: 10, value: 1 },
               { hour: 11, value: 1 },
               { hour: 12, value: 0 },
               { hour: 13, value: 0 },
               { hour: 14, value: 0 },
               { hour: 15, value: 0 },
               { hour: 16, value: 0 },
               { hour: 17, value: 0 },
               { hour: 18, value: 0 },
               { hour: 19, value: 1 },
               { hour: 20, value: 1 },
               { hour: 21, value: 1 },
               { hour: 22, value: 0 },
               { hour: 23, value: 0 }
            ]
         },
         {
            day: 'DO', dic: [
               { hour: 0, value: 0 },
               { hour: 1, value: 0 },
               { hour: 2, value: 0 },
               { hour: 3, value: 0 },
               { hour: 4, value: 0 },
               { hour: 5, value: 0 },
               { hour: 6, value: 0 },
               { hour: 7, value: 0 },
               { hour: 8, value: 0 },
               { hour: 9, value: 0 },
               { hour: 10, value: 0 },
               { hour: 11, value: 0 },
               { hour: 12, value: 0 },
               { hour: 13, value: 0 },
               { hour: 14, value: 0 },
               { hour: 15, value: 0 },
               { hour: 16, value: 0 },
               { hour: 17, value: 0 },
               { hour: 18, value: 0 },
               { hour: 19, value: 0 },
               { hour: 20, value: 0 },
               { hour: 21, value: 0 },
               { hour: 22, value: 0 },
               { hour: 23, value: 0 }
            ]
         }
      ]
   }
   onKeyEvent(event) {
      if (event.keyCode == 13) {
         this.editEventNameFlag = false
      }
   }
   onKeyUser(event) {
      if (event.keyCode == 13) {
         this.editUsernameFlag = false
      }
   }
}
