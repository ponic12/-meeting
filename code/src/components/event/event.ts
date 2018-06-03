import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Slides, IonicPage, ViewController, NavParams, Events, Modal, ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { EventService } from './event.service'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-event',
   templateUrl: 'event.html'
})
export class EventPage implements OnInit, OnDestroy {
   @ViewChild(Slides) slides: Slides

   title: string = "Evento"
   evt: any
   members: any

   assistants: any
   editMode: boolean = true
   dayKeys: any

   constructor(
      private navParams: NavParams,
      private view: ViewController,
      private appSrv: ApplicationService,
      private evtSrv: EventService,
      private modal: ModalController,
      private socialSharing: SocialSharing
   ) {
      console.log('EventPage constructor');
   }
   ngOnDestroy() {
      console.warn('EventPage destroy');
   }
   ngOnInit(): void {
      console.log('EventPage init');
      this.title = this.navParams.get('title')
      this.evt = this.navParams.get('evt')
      this.members = this.navParams.get('contacts')
   }

   showMembers(){
      const mod: Modal = this.modal.create('MembersPage', {
         title:"Miembros",
         evt:this.evt,
         members:this.members
      }, {})
      mod.present()
      mod.onDidDismiss(data=>{
         this.editMode = data.editMode
         //this.processDays()
      })
   }
   closeModal() {
      this.view.dismiss(null)
   }

   showAssistants(ev) {
      if (this.editMode === true)
         ev.hr.value = 1 - ev.hr.value
      else
         this.assistants = ev.hr.members
   }

   private processDays() {
      this.resetDays(this.evt.days)
      this.dayKeys = Object.keys(this.evt.days)
      this.members.forEach(member => {
         if (member.onoff === true) {
            this.dayKeys.forEach((key) => {
               this.evt.days[key].forEach((hr, i) => {
                  let x = member.days[key][i].value
                  hr.value = hr.value + x
                  if (x > 0)
                     hr.members.push(member.username)
               })
            });
         }
      });
   }
   private resetDays(days) {
      const emptyDays = {
         'LU': [
            { hour: 0, value: 0, members: [] },
            { hour: 1, value: 0, members: [] },
            { hour: 2, value: 0, members: [] },
            { hour: 3, value: 0, members: [] },
            { hour: 4, value: 0, members: [] },
            { hour: 5, value: 0, members: [] },
            { hour: 6, value: 0, members: [] },
            { hour: 7, value: 0, members: [] },
            { hour: 8, value: 0, members: [] },
            { hour: 9, value: 0, members: [] },
            { hour: 10, value: 0, members: [] },
            { hour: 11, value: 0, members: [] },
            { hour: 12, value: 0, members: [] },
            { hour: 13, value: 0, members: [] },
            { hour: 14, value: 0, members: [] },
            { hour: 15, value: 0, members: [] },
            { hour: 16, value: 0, members: [] },
            { hour: 17, value: 0, members: [] },
            { hour: 18, value: 0, members: [] },
            { hour: 19, value: 0, members: [] },
            { hour: 20, value: 0, members: [] },
            { hour: 21, value: 0, members: [] },
            { hour: 22, value: 0, members: [] },
            { hour: 23, value: 0, members: [] }
         ],
         'MA': [
            { hour: 0, value: 0, members: [] },
            { hour: 1, value: 0, members: [] },
            { hour: 2, value: 0, members: [] },
            { hour: 3, value: 0, members: [] },
            { hour: 4, value: 0, members: [] },
            { hour: 5, value: 0, members: [] },
            { hour: 6, value: 0, members: [] },
            { hour: 7, value: 0, members: [] },
            { hour: 8, value: 0, members: [] },
            { hour: 9, value: 0, members: [] },
            { hour: 10, value: 0, members: [] },
            { hour: 11, value: 0, members: [] },
            { hour: 12, value: 0, members: [] },
            { hour: 13, value: 0, members: [] },
            { hour: 14, value: 0, members: [] },
            { hour: 15, value: 0, members: [] },
            { hour: 16, value: 0, members: [] },
            { hour: 17, value: 0, members: [] },
            { hour: 18, value: 0, members: [] },
            { hour: 19, value: 0, members: [] },
            { hour: 20, value: 0, members: [] },
            { hour: 21, value: 0, members: [] },
            { hour: 22, value: 0, members: [] },
            { hour: 23, value: 0, members: [] }
         ],
         'MI': [
            { hour: 0, value: 0, members: [] },
            { hour: 1, value: 0, members: [] },
            { hour: 2, value: 0, members: [] },
            { hour: 3, value: 0, members: [] },
            { hour: 4, value: 0, members: [] },
            { hour: 5, value: 0, members: [] },
            { hour: 6, value: 0, members: [] },
            { hour: 7, value: 0, members: [] },
            { hour: 8, value: 0, members: [] },
            { hour: 9, value: 0, members: [] },
            { hour: 10, value: 0, members: [] },
            { hour: 11, value: 0, members: [] },
            { hour: 12, value: 0, members: [] },
            { hour: 13, value: 0, members: [] },
            { hour: 14, value: 0, members: [] },
            { hour: 15, value: 0, members: [] },
            { hour: 16, value: 0, members: [] },
            { hour: 17, value: 0, members: [] },
            { hour: 18, value: 0, members: [] },
            { hour: 19, value: 0, members: [] },
            { hour: 20, value: 0, members: [] },
            { hour: 21, value: 0, members: [] },
            { hour: 22, value: 0, members: [] },
            { hour: 23, value: 0, members: [] }
         ],
         'JU': [
            { hour: 0, value: 0, members: [] },
            { hour: 1, value: 0, members: [] },
            { hour: 2, value: 0, members: [] },
            { hour: 3, value: 0, members: [] },
            { hour: 4, value: 0, members: [] },
            { hour: 5, value: 0, members: [] },
            { hour: 6, value: 0, members: [] },
            { hour: 7, value: 0, members: [] },
            { hour: 8, value: 0, members: [] },
            { hour: 9, value: 0, members: [] },
            { hour: 10, value: 0, members: [] },
            { hour: 11, value: 0, members: [] },
            { hour: 12, value: 0, members: [] },
            { hour: 13, value: 0, members: [] },
            { hour: 14, value: 0, members: [] },
            { hour: 15, value: 0, members: [] },
            { hour: 16, value: 0, members: [] },
            { hour: 17, value: 0, members: [] },
            { hour: 18, value: 0, members: [] },
            { hour: 19, value: 0, members: [] },
            { hour: 20, value: 0, members: [] },
            { hour: 21, value: 0, members: [] },
            { hour: 22, value: 0, members: [] },
            { hour: 23, value: 0, members: [] }
         ],
         'VI': [
            { hour: 0, value: 0, members: [] },
            { hour: 1, value: 0, members: [] },
            { hour: 2, value: 0, members: [] },
            { hour: 3, value: 0, members: [] },
            { hour: 4, value: 0, members: [] },
            { hour: 5, value: 0, members: [] },
            { hour: 6, value: 0, members: [] },
            { hour: 7, value: 0, members: [] },
            { hour: 8, value: 0, members: [] },
            { hour: 9, value: 0, members: [] },
            { hour: 10, value: 0, members: [] },
            { hour: 11, value: 0, members: [] },
            { hour: 12, value: 0, members: [] },
            { hour: 13, value: 0, members: [] },
            { hour: 14, value: 0, members: [] },
            { hour: 15, value: 0, members: [] },
            { hour: 16, value: 0, members: [] },
            { hour: 17, value: 0, members: [] },
            { hour: 18, value: 0, members: [] },
            { hour: 19, value: 0, members: [] },
            { hour: 20, value: 0, members: [] },
            { hour: 21, value: 0, members: [] },
            { hour: 22, value: 0, members: [] },
            { hour: 23, value: 0, members: [] }
         ],
         'SA': [
            { hour: 0, value: 0, members: [] },
            { hour: 1, value: 0, members: [] },
            { hour: 2, value: 0, members: [] },
            { hour: 3, value: 0, members: [] },
            { hour: 4, value: 0, members: [] },
            { hour: 5, value: 0, members: [] },
            { hour: 6, value: 0, members: [] },
            { hour: 7, value: 0, members: [] },
            { hour: 8, value: 0, members: [] },
            { hour: 9, value: 0, members: [] },
            { hour: 10, value: 0, members: [] },
            { hour: 11, value: 0, members: [] },
            { hour: 12, value: 0, members: [] },
            { hour: 13, value: 0, members: [] },
            { hour: 14, value: 0, members: [] },
            { hour: 15, value: 0, members: [] },
            { hour: 16, value: 0, members: [] },
            { hour: 17, value: 0, members: [] },
            { hour: 18, value: 0, members: [] },
            { hour: 19, value: 0, members: [] },
            { hour: 20, value: 0, members: [] },
            { hour: 21, value: 0, members: [] },
            { hour: 22, value: 0, members: [] },
            { hour: 23, value: 0, members: [] }
         ],
         'DO': [
            { hour: 0, value: 0, members: [] },
            { hour: 1, value: 0, members: [] },
            { hour: 2, value: 0, members: [] },
            { hour: 3, value: 0, members: [] },
            { hour: 4, value: 0, members: [] },
            { hour: 5, value: 0, members: [] },
            { hour: 6, value: 0, members: [] },
            { hour: 7, value: 0, members: [] },
            { hour: 8, value: 0, members: [] },
            { hour: 9, value: 0, members: [] },
            { hour: 10, value: 0, members: [] },
            { hour: 11, value: 0, members: [] },
            { hour: 12, value: 0, members: [] },
            { hour: 13, value: 0, members: [] },
            { hour: 14, value: 0, members: [] },
            { hour: 15, value: 0, members: [] },
            { hour: 16, value: 0, members: [] },
            { hour: 17, value: 0, members: [] },
            { hour: 18, value: 0, members: [] },
            { hour: 19, value: 0, members: [] },
            { hour: 20, value: 0, members: [] },
            { hour: 21, value: 0, members: [] },
            { hour: 22, value: 0, members: [] },
            { hour: 23, value: 0, members: [] }
         ]
      }
      this.evt.days = emptyDays
   }
}

