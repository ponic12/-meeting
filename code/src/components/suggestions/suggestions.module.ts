import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { CommonModule } from '@angular/common'
import { OrderModule } from 'ngx-order-pipe'

import { SocialSharing } from '@ionic-native/social-sharing'
import { SuggestionsPage } from './suggestions'
import { SharedModule } from '../../shared/shared.module'
import { PipesModule } from '../../shared/pipes/pipes.module';



@NgModule({
   declarations: [
      SuggestionsPage
   ],
   imports: [
      SharedModule,
      PipesModule,
      CommonModule,
      OrderModule,
      IonicPageModule.forChild(SuggestionsPage)
   ],
   exports: [SuggestionsPage],
   providers: [SocialSharing]
})

export class BitacoraPageModule {
   constructor() {
      console.log('SuggestionsPageModule constructor');
   }
};