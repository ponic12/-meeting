import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { CommonModule } from '@angular/common'

import { EventPage } from './event'
import { EventService } from './event.service'
import { SharedModule } from '../../shared/shared.module'


@NgModule({
   declarations: [
      EventPage
   ],
   imports: [
      SharedModule,
      CommonModule,
      IonicPageModule.forChild(EventPage)
   ],
   exports: [EventPage],
   providers: [EventService]
})

export class EventPageModule {
   constructor() {
      console.log('EventPageModule constructor');
   }
};