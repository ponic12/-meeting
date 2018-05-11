import { Component, OnInit, OnDestroy } from '@angular/core';
import { IonicPage, NavParams, Events } from 'ionic-angular';
import { Chart, Color } from 'chart.js'

import { ParqueService } from './parque.service'
import { ApplicationService } from '../../shared/services/application.service';
import { GlobalService } from '../../shared/services/global.service';

import * as moment from 'moment'

@IonicPage()
@Component({
   selector: 'page-parque',
   templateUrl: 'parque.html'
})
export class ParquePage implements OnInit, OnDestroy {
   title: string = "Parque"
   
   manuf: any
   devices: any
   devicesOps: any

   constructor(
      private navParams: NavParams,
      private appSrv: ApplicationService,
      private globalSrv: GlobalService,
      private parqueSrv:ParqueService,
      private evt: Events
   ) {
      console.log('ParquePage constructor');
   }
   ngOnDestroy() {
      console.warn('ParquePage destroy');
   }
   ngOnInit(): void {
      console.log('ParquePage init');
      this.devicesOps = {
         onClick: this.manufClick,
         legend: {
            display: true,
            position: 'bottom'
         }
      }
      this.parqueSrv.getDevices().subscribe(devs => {
         this.processDevices(devs);
      })
   }

   private processDevices(data) {
      let dataManuf = { 'names': [], 'counters': [], 'models': {} }
      let arrUsers = []
      data.forEach(elem => {

         let idm = this.findManufacturer(elem.manufacturer, dataManuf.names)
         if (idm === -1) {
            dataManuf.names.push(elem.manufacturer)
            dataManuf.counters.push(0)
            idm = this.findManufacturer(elem.manufacturer, dataManuf.names)
         }
         dataManuf.counters[idm] = dataManuf.counters[idm] + 1

         if (!dataManuf.models[elem.manufacturer])
            dataManuf.models[elem.manufacturer] = { 'names': [], 'counters': [] }

         let id = this.findModel(elem.model, dataManuf.models[elem.manufacturer].names)
         if (id === -1) {
            dataManuf.models[elem.manufacturer].names.push(elem.model)
            dataManuf.models[elem.manufacturer].counters.push(0)
            id = this.findModel(elem.model, dataManuf.models[elem.manufacturer].names)
         }
         dataManuf.models[elem.manufacturer].counters[id] = dataManuf.models[elem.manufacturer].counters[id] + 1
      })
      this.manuf = dataManuf
   }
   private findManufacturer(co, arr) {
      for (var i = 0; i < arr.length; i++) {
         if (arr[i] === co) {
            return i;
         }
      }
      return -1;
   }
   private findModel(m, arr) {
      for (var i = 0; i < arr.length; i++) {
         if (arr[i] === m) {
            return i;
         }
      }
      return -1;
   }
   private manufClick(e, arr) {
      alert('Click');
      console.log('e: ', e)
      console.log('arr: ', arr)
   }
}
