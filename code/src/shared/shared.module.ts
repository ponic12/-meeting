import { NgModule, ModuleWithProviders } from '@angular/core'
import { IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { CommonModule } from '@angular/common'

import { HoursComponent } from './components/hours/hours.component'
import { ToolsBarComponent } from './components/tools-bar/tools-bar.component';
import { ApplicationService } from './services/application.service'
import { GlobalService } from './services/global.service'
import { FirebaseService } from './services/firebase.service'

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

export const firebaseConfig = {
   apiKey: "AIzaSyB1RfoKAz26WPlfiG7jHNt4nUqthyBRWQM",
   authDomain: "events-12be3.firebaseapp.com",
   databaseURL: "https://events-12be3.firebaseio.com",
   projectId: "events-12be3",
   storageBucket: "events-12be3.appspot.com",
   messagingSenderId: "342119302614"
 };


@NgModule({
   imports: [
      CommonModule,
      IonicModule,
      IonicStorageModule.forRoot(),
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFirestoreModule
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
            GlobalService,
            ApplicationService,
            FirebaseService,
            //   AngularFireAuth,
            //   AngularFireDatabase
         ]
      };
   }
}
