import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'
import { FirebaseService } from '../../shared/services/firebase.service';
import { Subscription } from 'rxjs';

@IonicPage()
@Component({
   selector: 'page-comments',
   templateUrl: 'comments.html'
})
export class CommentsPage implements OnInit, OnDestroy {
   title:string
   user:any
   evt:any
   subComments:Subscription
   comments=[]
   searchText: string
   confirmFlag:boolean=false
   newComment:string

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
      private modal: ModalController,
      private fs: FirebaseService,
      private socialSharing: SocialSharing
   ) {
      console.log('CommentsPage constructor');
      this.title = this.navParams.get('title')
      this.evt = this.navParams.get('evt')
      this.user =  this.navParams.get('user')
   }
   ngOnDestroy() {
      console.warn('CommentsPage destroy');
      this.subComments.unsubscribe()
   }
   ngOnInit(): void {
      console.log('CommentsPage init');
      this.subComments = this.fs.getCommentsByEvtId(this.evt.id).subscribe(data => {
         this.comments = data      
      })
   }
   selChanged(ct){
      this.confirmFlag = true
   }
   addComment(){
      const cmt = {
         creationDate : new Date().getTime(),
         comment: this.newComment,
         owner: this.user.uid,
         ownerName: this.user.displayName,
         photoURL: this.user.photoURL
      }
      this.fs.saveComment(this.evt.id, cmt)
   }
   closeModal(){
      this.view.dismiss(null)
   }
}
