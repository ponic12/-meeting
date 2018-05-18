import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { GlobalService } from '../../services/global.service';
import { NavController, Events } from 'ionic-angular';

@Component({
  selector: 'tools-bar',
  templateUrl: 'tools-bar.component.html'
})
export class ToolsBarComponent implements OnInit, OnDestroy {
  @Input() title;

  constructor(
    private navCtrl: NavController,
    private globalSrv: GlobalService,
    private evt: Events) {
    console.log('ToolsBarComponent constructor');
  }

  ngOnDestroy() {
    console.warn('ToolsBarComponent destroy');
  }
  ngOnInit(): void {
    console.log('ToolsBarComponent init');
  }
}
