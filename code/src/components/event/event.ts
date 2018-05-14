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
   editFlag: boolean = false
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
      this.editFlag = this.evt.creationDate
   }

}
