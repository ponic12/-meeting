import { Component, OnInit, OnDestroy, Input, Output, EventEmitter } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

import { GlobalService } from '../../services/global.service';
import { ApplicationService } from '../../services/application.service';

@Component({
  selector: 'hours',
  templateUrl: 'hours.component.html'
})
export class HoursComponent implements OnInit, OnDestroy {
  @Input() line: string = "000";
  @Output() lineChanged: EventEmitter<string> = new EventEmitter<string>();;

  editFlag: boolean = false;
  private lineBak: string;

  constructor(
    private globalSrv: GlobalService,
    private appSrv:ApplicationService
  ) {
    console.log('HoursComponent constructor');
  }

  ngOnDestroy() {
    console.warn('HoursComponent destroy');
  }
  ngOnInit(): void {
    console.log('HoursComponent init');
  }
  editAbonado() {
    this.lineBak = this.line;
    this.editFlag = true;
  }
  abort() {
    this.line = this.lineBak;
    this.editFlag = false;
  }
  onKeyPressed(event) {
    if (event.keyCode == 13) {
      this.changeAbo();
    }
  }
  changeAbo(){
    this.globalSrv.save('abonado', this.line);
      this.editFlag = false;
      this.lineChanged.emit(this.line);
  }
}