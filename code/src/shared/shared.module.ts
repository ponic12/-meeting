import { NgModule, ModuleWithProviders } from '@angular/core'
import { IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { CommonModule } from '@angular/common'

import { HoursComponent } from './components/hours/hours.component'
import { ToolsBarComponent } from './components/tools-bar/tools-bar.component'

import { FwkServicesModule, ApplicationService, GlobalService } from 'fwk-services';
import { FwkAuthModule, AuthService } from 'fwk-auth'

import 'firebase/storage'; 
import { AngularFireModule } from 'angularfire2'
import { AngularFireAuth } from 'angularfire2/auth'
import { AngularFirestoreModule } from 'angularfire2/firestore'
import { FirebaseService } from './services/firebase.service'
import { FIREBASE_CONFIG } from './services/firebase.config'

@NgModule({
   imports: [
      FwkAuthModule,
      FwkServicesModule,
      CommonModule,
      IonicModule,
      IonicStorageModule.forRoot(),
      AngularFirestoreModule,
      AngularFireModule.initializeApp(FIREBASE_CONFIG)
   ],
   declarations: [
      HoursComponent,
      ToolsBarComponent
   ],
   exports: [
      HoursComponent,
      ToolsBarComponent
   ]
})
export class SharedModule {
   static forRoot(): ModuleWithProviders {
      return {
         ngModule: SharedModule,
         providers: [
            AuthService,
            AngularFireAuth,
            FirebaseService,
            ApplicationService,
            GlobalService
         ]
      };
   }
}
