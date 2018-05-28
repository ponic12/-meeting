import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { CommonModule } from '@angular/common'
import { SocialSharing } from '@ionic-native/social-sharing'
import { ContactsPage } from './contacts'
import { SharedModule } from '../../shared/shared.module'


@NgModule({
   declarations: [
      ContactsPage
   ],
   imports: [
      SharedModule,
      CommonModule,
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