import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { HomePage } from './home'
import { SocialSharing } from '@ionic-native/social-sharing';

import { ParquePageModule } from '../../components/parque/parque.module';


@NgModule({
   declarations: [
      HomePage
   ],
   imports: [
      ParquePageModule,
      SocialSharing,
      IonicPageModule.forChild(HomePage)
   ],
   providers: [ ]
})
export class HomePageModule {
   constructor() {
      console.log('HomePageModule constructor');
   }
}
