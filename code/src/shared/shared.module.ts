import { NgModule, ModuleWithProviders } from '@angular/core'
import { IonicModule } from 'ionic-angular'
import { IonicStorageModule } from '@ionic/storage'
import { CommonModule } from '@angular/common'

import { HoursComponent } from './components/hours/hours.component'
import { ToolsBarComponent } from './components/tools-bar/tools-bar.component'

import { FwkServicesModule, ApplicationService, GlobalService } from 'fwk-services';
import { FwkAuthModule, AuthService } from 'fwk-auth'
import { AngularFireAuth } from 'angularfire2/auth'

@NgModule({
   imports: [
      FwkAuthModule,
      FwkServicesModule,
      CommonModule,
      IonicModule,
      IonicStorageModule.forRoot()
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
            ApplicationService,
            GlobalService
         ]
      };
   }
}
