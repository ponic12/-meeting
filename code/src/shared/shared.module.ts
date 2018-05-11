import { NgModule, ModuleWithProviders } from '@angular/core';
import { IonicStorageModule } from '@ionic/storage';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuth } from 'angularfire2/auth';

import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApplicationService } from './services/application.service';
import { GlobalService } from './services/global.service';
import { NetworkService } from './services/network.service';
import { FirebaseService } from './services/firebase.service';
import { InterceptorModule } from './interceptor.module';


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
    InterceptorModule,
    HttpClientModule,
    IonicStorageModule.forRoot(),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule
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
        ApplicationService, 
        GlobalService,
        NetworkService,
        FirebaseService,
        AngularFireAuth,
        AngularFireDatabase
      ]
    };
  }
}
