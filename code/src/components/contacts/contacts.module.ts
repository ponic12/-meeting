import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { CommonModule } from '@angular/common'
import { OrderModule } from 'ngx-order-pipe'

import { SocialSharing } from '@ionic-native/social-sharing'
import { ContactsPage } from './contacts'
import { SharedModule } from '../../shared/shared.module'
import { PipesModule } from '../../shared/pipes/pipes.module';



@NgModule({
   declarations: [
      ContactsPage
   ],
   imports: [
      SharedModule.forRoot(),
      PipesModule,
      CommonModule,
      OrderModule,
      IonicPageModule.forChild(ContactsPage)
   ],
   exports: [ContactsPage],
   providers: [SocialSharing]
})

export class ContactsPageModule {
   constructor() {
      console.log('ContactsPageModule constructor');
   }
};