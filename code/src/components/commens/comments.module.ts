import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { CommonModule } from '@angular/common'
import { OrderModule } from 'ngx-order-pipe'

import { SocialSharing } from '@ionic-native/social-sharing'
import { CommentsPage } from './comments'
import { SharedModule} from '../../shared/shared.module'
import { PipesModule } from '../../shared/pipes/pipes.module';



@NgModule({
   declarations: [
      CommentsPage
   ],
   imports: [
      SharedModule,
      PipesModule,
      CommonModule,
      OrderModule,
      IonicPageModule.forChild(CommentsPage)
   ],
   exports: [CommentsPage],
   providers: [SocialSharing]
})

export class CommentsPageModule {
   constructor() {
      console.log('CommentsPageModule constructor');
   }
};