import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { HomePage } from './home'

import { ParquePageModule } from '../../components/parque/parque.module';


@NgModule({
   declarations: [
      HomePage
   ],
   imports: [
      ParquePageModule,
      IonicPageModule.forChild(HomePage)
   ],
   providers: [ ]
})
export class HomePageModule {
   constructor() {
      console.log('HomePageModule constructor');
   }
}
