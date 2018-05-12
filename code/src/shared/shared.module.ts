import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';

// import { AngularFireModule } from 'angularfire2';
// import { AngularFirestoreModule } from 'angularfire2/firestore';

import { ApplicationService } from './services/application.service';
import { GlobalService } from './services/global.service';
import { FirebaseService } from './services/firebase.service';


export const firebaseConfig ={
  apiKey: "AIzaSyAfVw8hebQtbQ94K7jILm1tbqbvjNe6FZs",
  authDomain: "tecotoolbox-a4149.firebaseapp.com",
  databaseURL: "https://tecotoolbox-a4149.firebaseio.com",
  projectId: "tecotoolbox-a4149",
  storageBucket: "tecotoolbox-a4149.appspot.com",
  messagingSenderId: "103637821940"
};


@NgModule({
  imports: [
    IonicStorageModule.forRoot(),
   //  AngularFireModule.initializeApp(firebaseConfig),
   //  AngularFirestoreModule
  ],
  declarations: [
  ],
  exports: [ ]
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
