import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Slides, IonicPage, ViewController, NavParams, Events, Modal, ModalController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { EventService } from './event.service'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'
//import { Moment } from 'moment'

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
   totalMembers:number = 0
   startWeek: any
   weekData: any
   weekDataKeys: any = []
   assistants: any
   editMode: boolean = true
   allDayFlag: boolean = false

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
      this.totalMembers = Object.keys(this.evt.members).length
      this.startWeek = moment(this.evt.creationDate).day(0)
      this.processDays()
   }

   showMembers() {
      const mod: Modal = this.modal.create('MembersPage', {
         title: "Miembros",
         evt: this.evt,
         members: this.members
      }, {})
      mod.present()
      mod.onDidDismiss(data => {
         this.editMode = data.editMode
         this.processDays()
      })
   }
   closeModal() {
      this.view.dismiss(null)
   }

   toggleAllDay(d){
      this.allDayFlag = !this.toggleAllDay
      for (let i = 0; i < 24; i++) {
         // cambiar data DB (NO weekdata)
         
      }
   }
   prevWeek(){
      this.startWeek = moment(this.startWeek).add(-7, 'days') 
      this.processDays()
   }
   nextWeek(){
      this.startWeek = moment(this.startWeek).add(7, 'days') 
      this.processDays()
   }
   showAssistants(ev) {
      if (this.editMode === true){
         this.evt.availability[this.evt.owner]
      }
      else
         this.showMembers()
   }

   private processDays() {
      this.weekData = this.resetDays(this.startWeek)
      this.weekDataKeys = Object.keys(this.weekData)
      this.members.forEach(member => {
         let memberData = this.evt.availability[member.id]
         if ((member.onoff === true)&&(memberData)) {
            const days = Object.keys(memberData)
            days.forEach(day => {
               memberData[day].forEach(hour => {
                  let wd = this.weekData[day]
                  if (wd){
                     wd.info[hour].value = wd.info[hour].value + 1
                     wd.info[hour].members.push(member.displayName)
                  }
               });
            });
         }
      })
   }

   private resetDays(startDay) {
      let emptyWeek = {}

      for (let i = 0; i < 7; i++) {
         let d = moment(startDay).add(i, 'days').format('YYMMDD')
         emptyWeek[d] = { 
            dayName: moment(startDay).add(i, 'days').format('ddd'), 
            dayNum: moment(startDay).add(i, 'days').format('DD'), 
            info: [] }
         for (let h = 0; h < 24; h++) {
            emptyWeek[d].info.push({ value: 0, members: [] })
         }
      }
      return emptyWeek
   }
}

