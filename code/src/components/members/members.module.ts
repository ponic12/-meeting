import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { CommonModule } from '@angular/common'
import { OrderModule } from 'ngx-order-pipe'

import { SocialSharing } from '@ionic-native/social-sharing'
import { MembersPage } from './members'
import { SharedModule } from '../../shared/shared.module'
import { PipesModule } from '../../shared/pipes/pipes.module';



@NgModule({
   declarations: [
      MembersPage
   ],
   imports: [
      SharedModule,
      PipesModule,
      CommonModule,
      OrderModule,
      IonicPageModule.forChild(MembersPage)
   ],
   exports: [MembersPage],
   providers: [SocialSharing]
})

export class MembersPageModule {
   constructor() {
      console.log('MembersPageModule constructor');
   }
};