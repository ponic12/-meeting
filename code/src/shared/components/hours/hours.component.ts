import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core'
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
   @Input('max') maxVal: number = 0
   @Output() selectedCell = new EventEmitter()

   constructor(
      private globalSrv: GlobalService,
      private appSrv: ApplicationService
   ) {
      console.log('HoursComponent constructor')
   }

   ngOnDestroy() {
      console.warn('HoursComponent destroy')
   }
   ngOnInit(): void {
      console.log('HoursComponent init')
   }

   selCell(hr){
      this.selectedCell.emit({hr: hr})
   }

   calculateOpacity(val){
      return (val/this.maxVal)
   }
}
