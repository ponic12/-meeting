import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'
import { FirebaseService } from '../../shared/services/firebase.service';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
   selector: 'page-suggestions',
   templateUrl: 'suggestions.html'
})
export class SuggestionsPage implements OnInit, OnDestroy {
   title:string
   user:any
   searchText: string
   suggestions:any = []
   newSuggestion:string = ""
   subSug: Subscription

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
      private fs: FirebaseService,
      private modal: ModalController
   ) {
      console.log('SuggestionPage constructor');
      this.title = this.navParams.get('title')
      this.user = this.navParams.get('user')
   }
   ngOnDestroy() {
      console.warn('SuggestionPage destroy');
      this.subSug.unsubscribe()
   }
   ngOnInit(): void {
      console.log('SuggestionPage init');
      this.subSug = this.fs.getSuggestions().subscribe(data => {
         this.suggestions = data      
      })      
   }
   add(){
      const sg = {
         creationDate : new Date().getTime(),
         suggestion: this.newSuggestion,
         owner: this.user.uid,
         ownerName: this.user.displayName,
         photoURL: this.user.photoURL
      }
      this.fs.saveSuggestion(sg)
      this.newSuggestion = ""
   }   
   closeModal(){
      this.view.dismiss(null)
   }
}
