import { NgModule, ModuleWithProviders } from '@angular/core'
import { IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { CommonModule } from '@angular/common'

import { HoursComponent } from './components/hours/hours.component'
import { ToolsBarComponent } from './components/tools-bar/tools-bar.component';
import { ApplicationService } from './services/application.service'
import { GlobalService } from './services/global.service'
import { FirebaseService } from './services/firebase.service'


export const firebaseConfig = {
   apiKey: "AIzaSyAfVw8hebQtbQ94K7jILm1tbqbvjNe6FZs",
   authDomain: "tecotoolbox-a4149.firebaseapp.com",
   databaseURL: "https://tecotoolbox-a4149.firebaseio.com",
   projectId: "tecotoolbox-a4149",
   storageBucket: "tecotoolbox-a4149.appspot.com",
   messagingSenderId: "103637821940"
};


@NgModule({
   imports: [
      CommonModule,
      IonicModule,
      IonicStorageModule.forRoot(),
      //  AngularFireModule.initializeApp(firebaseConfig),
      //  AngularFirestoreModule
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
