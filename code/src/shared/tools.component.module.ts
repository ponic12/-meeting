import { NgModule } from '@angular/core';
import { IonicModule } from 'ionic-angular';

import { ToolsGridComponent } from './components/tools-grid/tools-grid.component';
import { ToolsBarComponent } from './components/tools-bar/tools-bar.component';
import { ToolsAboComponent } from './components/tools-abo/tools-abo.component';
import { ToolsFirmaComponent } from './components/tools-firma/tools-firma.component';
import { SignaturePadModule } from 'angular2-signaturepad';



@NgModule({
	declarations: [
		ToolsGridComponent,
		ToolsBarComponent,
		ToolsAboComponent,
		ToolsFirmaComponent
	],
	imports: [
		IonicModule,
		SignaturePadModule
	],
	exports: [
		ToolsGridComponent,
		ToolsBarComponent,
		ToolsAboComponent,
		ToolsFirmaComponent
    ],
    providers:[]
})
export class ToolsComponentModule {
	constructor(){
		console.log('ToolsComponentModule constructor');
	}
}
