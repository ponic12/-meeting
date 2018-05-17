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
   @Input() editUser :string
   @Output() selectedCell: EventEmitter<string[]> = new EventEmitter<string[]>()

   constructor(
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

   selectCell(hr){
      if ((hr.members.length == 1)&& (hr.members[0].username == this.editUser))
         hr.value = 1 - hr.value
      else{
         this.selectedCell.emit(hr.members)
      }
   }

   calculateOpacity(val){
      return (val/this.maxVal)
   }
}
