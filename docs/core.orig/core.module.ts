import { NgModule, ErrorHandler } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './auth.service';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { UserProfileComponent } from '../components/user-profile/user-profile.component'

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
    providers: [AuthService]
})
export class CoreModule { 
    constructor(){
        console.log('CoreModule constructor');
    }
}
