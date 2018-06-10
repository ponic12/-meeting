import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-comments',
   templateUrl: 'comments.html'
})
export class CommentsPage implements OnInit, OnDestroy {
   title:string
   comments=[]
   searchText: string
   confirmFlag:boolean=false

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
      private modal: ModalController,
      private socialSharing: SocialSharing
   ) {
      console.log('CommentsPage constructor');
      this.title = this.navParams.get('title')
   }
   ngOnDestroy() {
      console.warn('CommentsPage destroy');
   }
   ngOnInit(): void {
      console.log('CommentsPage init');
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
