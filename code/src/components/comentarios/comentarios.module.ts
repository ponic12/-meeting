import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { CommonModule } from '@angular/common'
import { OrderModule } from 'ngx-order-pipe'

import { SocialSharing } from '@ionic-native/social-sharing'
import { ComentariosPage } from './comentarios'
import { SharedModule } from '../../shared/shared.module'
import { PipesModule } from '../../shared/pipes/pipes.module';



@NgModule({
   declarations: [
      ComentariosPage
   ],
   imports: [
      SharedModule,
      PipesModule,
      CommonModule,
      OrderModule,
      IonicPageModule.forChild(ComentariosPage)
   ],
   exports: [ComentariosPage],
   providers: [SocialSharing]
})

export class ComentariosPageModule {
   constructor() {
      console.log('ComentariosPageModule constructor');
   }
};