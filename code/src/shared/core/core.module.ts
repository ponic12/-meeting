import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
// import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UserProfileComponent } from '../components/user-profile/user-profile.component';
import { GooglePlus } from '@ionic-native/google-plus'

@NgModule({
    declarations: [
		UserProfileComponent
	],
    imports: [
        CommonModule,
        AngularFireAuthModule
    ], 
    exports: [
        UserProfileComponent
    ],
    providers: [AuthService, GooglePlus]
})
export class CoreModule { 
    constructor(){
        console.log('CoreModule constructor');
    }
}
