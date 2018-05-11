import { NgModule } from '@angular/core'
import { IonicPageModule } from 'ionic-angular'
import { ChartsModule } from 'ng2-charts'

import { ParquePage } from './parque'
import { ParqueService } from './parque.service'
import { SharedModule } from '../../shared/shared.module'

 
@NgModule({
    declarations: [
        ParquePage
    ],
    imports: [
        SharedModule,
        ChartsModule,
        IonicPageModule.forChild(ParquePage)
    ],
    exports: [ParquePage],
    providers: [ParqueService]
})

export class ParquePageModule {
    constructor() {
        console.log('ParquePageModule constructor');
    }
};