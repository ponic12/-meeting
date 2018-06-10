import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { SharedModule } from '../../shared/shared.module'
import { LoginPage } from './login';

@NgModule({
   imports: [
      SharedModule.forRoot(),
      IonicPageModule.forChild(LoginPage),
   ],
   declarations: [
      LoginPage
   ],
   entryComponents: [],
   providers: []
})
export class LoginModule {
   constructor() {
      console.log('LoginModule constructor');
   }
}

/*https://events-12be3.firebaseapp.com/__/auth/handler */