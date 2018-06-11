import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { IonicPage, ViewController, NavParams, Events, Modal, ModalController, AlertController, NavController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing'
import { EventService } from './event.service'
import { ApplicationService } from '../../shared/services/application.service';

import * as moment from 'moment'
import { FirebaseService } from '../../shared/services/firebase.service';
//import { Moment } from 'moment'

@IonicPage()
@Component({
   selector: 'page-event',
   templateUrl: 'event.html'
})
export class EventPage implements OnInit, OnDestroy {
   title: string = "Evento"
   evt: any
   membersFull: any
   totalMembers: number = 0
   startWeek: any
   weekData: any
   weekDataKeys: any = []
   assistants: any
   editMode: boolean = true
   allDayFlag: boolean = false
   dirtyFlag: boolean = false
   private maxValue: number = 0

   constructor(
      private navParams: NavParams,
      private navCtrl: NavController,
      private view: ViewController,
      private appSrv: ApplicationService,
      private evtSrv: EventService,
      private modal: ModalController,
      private fs: FirebaseService,
      private alertCtrl: AlertController,
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

      if (this.evt.type == 'calendario'){
         this.membersFull = this.navParams.get('membersFull')
         this.totalMembers = this.membersFull.length
         this.startWeek = moment(this.evt.creationDate).day(0)
         this.evt.estimationDate = {}
         this.processDays()   
      }
   }
   closeModal() {
      if (this.dirtyFlag == false) {
         this.navCtrl.pop()
      }
      else {
         let alert = this.alertCtrl.create({
            title: 'Aviso',
            message: 'Cancela sin guardar cambios?',
            buttons: [
               {
                  text: 'Cancelar',
                  role: 'cancel',
                  handler: () => {
                     this.navCtrl.pop()
                  }
               },
               {
                  text: 'Guardar',
                  handler: () => {
                     this.fs.saveEvent(this.evt)
                     this.dirtyFlag = false
                  }
               }
            ]
         });
         alert.present();
      }
   }
   showMembers() {
      const mod: Modal = this.modal.create('MemberStatusPage', {
         title: "Miembros",
         evt: this.evt,
         members: this.membersFull
      }, {})
      mod.present()
      mod.onDidDismiss(data => {
         this.membersFull = data
         this.processDays()
      })
   }
   showComments() {
      const mod: Modal = this.modal.create('CommentsPage', {
         title: "Comentarios",
         members: this.membersFull,
         comments: this.evt.comments
      }, {})
      mod.present()
      mod.onDidDismiss(data => {
      })
   }
   showAssistants(ev, d) {
      this.editMode = this.checkEditMode()
      if (this.editMode === true) {
         let idx = -1;
         let hours = []

         hours = this.evt.availability[this.evt.owner][d]
         if (!hours) {
            this.evt.availability[this.evt.owner][d] = []
            hours = this.evt.availability[this.evt.owner][d]
         }
         idx = hours.indexOf(ev.hour.toString())
         if (idx == -1) {
            hours.push(ev.hour.toString())
            ev.value = ev.value + 1
            ev.members.push(this.evt.owner)
         }
         else {
            hours.splice(idx, 1)
            ev.value = ev.value - 1
            const idm = ev.members.indexOf(this.evt.owner)
            ev.members.splice(idm, 1)
         }
      }
      else {
         this.membersFull.forEach(m => {
            let obj = ev.members.find(uid => uid === m.uid)
            m.present = (obj != undefined)
            m.pending = (this.evt.availability[m.uid] == undefined)
         });
         this.showMembers()
      }
   }
   toggleAllDay(d) {
      this.editMode = this.checkEditMode()
      if (this.editMode === true) {
         this.allDayFlag = !this.allDayFlag
         if (this.allDayFlag == true) {
            for (let i = 0; i < 24; i++) {
               if (!this.evt.availability[this.evt.owner][d]) {
                  this.evt.availability[this.evt.owner][d] = []
               }
               if (this.allDayFlag == true) {
                  this.evt.availability[this.evt.owner][d].push(i.toString())
                  this.weekData[d].info[i].value = 1
                  this.weekData[d].info[i].members.push(this.evt.owner.uid)
               }
            }
         }
         else {
            this.evt.availability[this.evt.owner][d] = []
            for (let i = 0; i < 24; i++) {
               this.weekData[d].info[i] = { hour: i, value: 0, members: [] }
            }
         }
      }
   }
   prevWeek() {
      this.startWeek = moment(this.startWeek).add(-7, 'days')
      this.processDays()
   }
   nextWeek() {
      this.startWeek = moment(this.startWeek).add(7, 'days')
      this.processDays()
   }
   isToday(d) {
      const res = (moment(d, 'YYMMDD').format('DD') == moment().format('DD'))
      return res
   }
   save() {
      this.fs.saveEvent(this.evt)
      this.dirtyFlag = false
   }
   private checkEditMode() {
      let res = false
      const membersON = []
      this.membersFull.forEach(item => {
         if (item.onoff === true)
            membersON.push(item)
      });
      res = ((membersON.length == 1) && (membersON.filter(m => (m.uid === this.evt.owner)).length > 0))
      if (res == true) this.dirtyFlag = true
      return res
   }
   private processDays() {
      this.weekData = this.resetDays(this.startWeek)
      this.weekDataKeys = Object.keys(this.weekData)
      this.membersFull.forEach(member => {
         let memberData = this.evt.availability[member.uid]
         if ((member.onoff === true) && (memberData)) {
            const days = Object.keys(memberData)
            days.forEach(day => {
               memberData[day].forEach(hour => {
                  let wd = this.weekData[day]
                  if (wd) {
                     wd.info[hour].value = wd.info[hour].value + 1
                     wd.info[hour].members.push(member.uid)
                     if (wd.info[hour].value > this.maxValue) {
                        this.maxValue = wd.info[hour].value
                        this.evt.estimationDate = {
                           day: wd.dayNum,
                           month: wd.month,
                           maxValue: this.maxValue
                        }
                     }
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
            month: moment(startDay).add(i, 'days').format('MMM'),
            info: []
         }
         for (let h = 0; h < 24; h++) {
            emptyWeek[d].info.push({ hour: h, value: 0, members: [] })
         }
      }
      return emptyWeek
   }
}

