import { Component, OnInit, OnDestroy, Input, Output, EventEmitter, NgZone } from '@angular/core'
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms'
import { NgStyle } from '@angular/common'

import { GlobalService } from '../../services/global.service'
import { ApplicationService } from '../../services/application.service'

@Component({
   selector: 'hours',
   templateUrl: 'hours.component.html'
})
export class HoursComponent implements OnInit, OnDestroy {
   @Input() dictionary: any = []

   constructor(
      private zone: NgZone,
      private globalSrv: GlobalService,
      private appSrv: ApplicationService
   ) {
      console.log('HoursComponent constructor')
      console.log('dic: ', this.dictionary)
   }

   ngOnDestroy() {
      console.warn('HoursComponent destroy')
   }
   ngOnInit(): void {
      console.log('HoursComponent init')
   }

   toggleHour(hr) {
      this.zone.run(() => { hr.value = 1 - hr.value })
   }

}
