import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal, Platform } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Contacts, Contact, ContactField, ContactName } from '@ionic-native/contacts';
import * as moment from 'moment'
import { Subscription } from 'rxjs';
import { Observable } from 'rxjs/Observable'

import { ApplicationService } from '../../shared/services/application.service';
import { FirebaseService } from '../../shared/services/firebase.service';


@IonicPage()
@Component({
   selector: 'page-contacts',
   templateUrl: 'contacts.html'
})
export class ContactsPage implements OnInit, OnDestroy {
   title:string
   user:any
   userObs:Observable<any>
   community:Observable<any[]>
   searchText: string
   sortField: string = 'creationDate'
   direction:boolean = false
   phoneContacts:any[] = []
   selPhotoUrl:SafeUrl
   private uid:string

   constructor(
      private platform: Platform,
      private navParams: NavParams,
      private view: ViewController,
      private fs: FirebaseService,
      private appSrv: ApplicationService,
      private modal: ModalController,
      private contacts: Contacts,
      private sanitizer: DomSanitizer
   ) {
      console.log('ContactsPage constructor')
      if (((this.platform.is('mobileweb') == true) || (this.platform.is('core') == true)) == false) {
         this.contacts.find(["*"],{multiple: true, hasPhoneNumber: true}).then(cts=>{
            this.phoneContacts = cts
         })
      }

      this.title = this.navParams.get('title')
      this.uid = this.navParams.get('uid')
   }
   ngOnDestroy() {
      console.warn('ContactsPage destroy');
   }
   ngOnInit(): void {
      console.log('ContactsPage init');
      this.community = this.fs.getCommunity()
      this.userObs = this.fs.getUserById(this.uid)
      this.userObs.subscribe(o=>{
         this.user = o
      })
   }
   selChanged(ev, ct){
      if (ev.checked == true){
         this.user.contacts[ct.uid] = true
      }
      else{
         delete this.user.contacts[ct.uid]
      }
      this.fs.updateUser(this.user)
   }
   initContacts(ct){
      const res = this.user.contacts[ct.uid] == true
      return res
   }
   getSortedContacts(sort, fab){
      this.sortField = sort
      this.direction = !this.direction
      fab.close()
   }   
   getSortName(){
      if (this.sortField === "displayName")
         return "Persona"
      else
         return "Miembros"
   }   
   getIcon(){
      if (this.direction === true)
         return "arrow-dropdown"
      else 
         return "arrow-dropup"
   }   
   showSelPhoto(ct){
      this.selPhotoUrl = this.getPhoto(ct)
   }
   getPhoto(ct){
      let res:SafeUrl = ""
      
      if(ct.photos != null) {
         console.log(ct.photos);
         res = this.sanitizer.bypassSecurityTrustUrl(ct.photos[0].value);
         console.log(ct);
       } else {
         res = "assets/imgs/person.png";
       }
      return res
   }
   getPhone(ct){
      let res:string = ""
      if (ct.phoneNumbers)
         res = ct.phoneNumbers[0].value
      return res
   }
   closeModal(){
      this.view.dismiss(null)
   }
}
