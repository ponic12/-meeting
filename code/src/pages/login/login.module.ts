import { NgModule } from '@angular/core'
import { RouterModule, Routes } from '@angular/router';
import { IonicPageModule } from 'ionic-angular'

import { SharedModule } from '../../shared/shared.module'
import { LoginPage } from './login';

const routes: Routes = [
   { path: '', redirectTo: '/', pathMatch: 'full' }
 ];

@NgModule({
   imports: [
      RouterModule.forRoot(routes),
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
      console.log('LoginModule constructor')
   }
}

/*https://events-12be3.firebaseapp.com/__/auth/handler */