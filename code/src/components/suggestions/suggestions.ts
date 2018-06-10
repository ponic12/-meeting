import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-suggestions',
   templateUrl: 'suggestions.html'
})
export class SuggestionsPage implements OnInit, OnDestroy {
   title:string
   bitacora=[]
   searchText: string
   confirmFlag:boolean=false

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
      private modal: ModalController
   ) {
      console.log('SuggestionPage constructor');
      this.title = this.navParams.get('title')
   }
   ngOnDestroy() {
      console.warn('SuggestionPage destroy');
   }
   ngOnInit(): void {
      console.log('SuggestionPage init');
   }
   selChanged(ct){
      this.confirmFlag = true
   }
   saveMembers(){
      this.view.dismiss()
   }
   closeModal(){
      this.view.dismiss(null)
   }
}
