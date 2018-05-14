import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { HomePage } from './home'
import { SocialSharing } from '@ionic-native/social-sharing';

import { ParquePageModule } from '../../components/parque/parque.module';
import { SearchInfoPipe } from '../../shared/pipes/search-info.pipe';



@NgModule({
   declarations: [
      HomePage,
      SearchInfoPipe
   ],
   imports: [
      ParquePageModule,
      IonicPageModule.forChild(HomePage)
   ],
   providers: [       
      SocialSharing,
   ]
})
export class HomePageModule {
   constructor() {
      console.log('HomePageModule constructor');
   }
}
