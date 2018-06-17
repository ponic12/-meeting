import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { CommonModule } from '@angular/common'
import { SocialSharing } from '@ionic-native/social-sharing'
import { Ionic2RatingModule } from 'ionic2-rating'

import { EventPage } from './event'
import { EventService } from './event.service'
import { SharedModule } from '../../shared/shared.module'


@NgModule({
   declarations: [
      EventPage
   ],
   imports: [
      SharedModule.forRoot(),
      CommonModule,
      IonicPageModule.forChild(EventPage),
      Ionic2RatingModule
   ],
   exports: [EventPage],
   providers: [EventService, SocialSharing]
})

export class EventPageModule {
   constructor() {
      console.log('EventPageModule constructor');
   }
};