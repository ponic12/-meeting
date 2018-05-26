import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events,ModalController, Modal } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { ApplicationService } from '../../shared/services/application.service';
import { GlobalService } from '../../shared/services/global.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-editEvent',
   templateUrl: 'editEvent.html'
})
export class EditEventPage implements OnInit, OnDestroy {
   evt:any

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private modal: ModalController,
      private socialSharing: SocialSharing
   ) {
      console.log('EditEventPage constructor');
   }
   ngOnDestroy() {
      console.warn('EditEventPage destroy');
   }
   ngOnInit(): void {
      console.log('EditEventPage init');
      this.evt = this.navParams.get('evt');
   }

   addContact(){
      const mod: Modal = this.modal.create('ContactsPage', {contacts:this.evt.contacts}, {})
      mod.present()
      mod.onDidDismiss(selContacts=>{
         //recorre lista de contactos seleccionados
         //agrega a lista de miembros del evento
      })
   }
   save(){
      const data ={
         evt:this.evt,
         dirty:true
      }
      this.view.dismiss(data)
   }
   closeModal(){
      this.view.dismiss(null)
   }
   
}
