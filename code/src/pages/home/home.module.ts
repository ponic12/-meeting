import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { HomePage } from './home'
import { OrderModule } from 'ngx-order-pipe'
import { CommonModule } from '@angular/common'

import { SharedModule } from '../../shared/shared.module'
import { EventPageModule } from '../../components/event/event.module'
import { SearchInfoPipe } from '../../shared/pipes/search-info.pipe'

@NgModule({
   declarations: [
      HomePage,
      SearchInfoPipe
   ],
   imports: [
      SharedModule,
      EventPageModule,
      OrderModule,
      CommonModule,
      IonicPageModule.forChild(HomePage)
   ],
   providers: []
})
export class HomeModule {
   constructor() {
      console.log('HomeModule constructor');
   }
}
