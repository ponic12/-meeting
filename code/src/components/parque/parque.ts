import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavParams, Events } from 'ionic-angular';

import { ParqueService } from './parque.service'
import { ApplicationService } from '../../shared/services/application.service';
import { GlobalService } from '../../shared/services/global.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-parque',
   templateUrl: 'parque.html'
})
export class ParquePage implements OnInit, OnDestroy {
   title: string = "Parque"


   constructor(
      private navParams: NavParams,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private parqueSrv:ParqueService,
      private evt: Events
   ) {
      console.log('ParquePage constructor');
   }
   ngOnDestroy() {
      console.warn('ParquePage destroy');
   }
   ngOnInit(): void {
      console.log('ParquePage init');

   }

}
