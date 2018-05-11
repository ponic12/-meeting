import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { NavController } from 'ionic-angular';
import { GlobalService } from '../../services/global.service';

@Component({
  selector: 'tools-grid',
  templateUrl: 'tools-grid.component.html'
})
export class ToolsGridComponent implements OnInit, OnDestroy {
  @Input() tools;

  constructor(
    private navCtrl: NavController,
    private globalSrv: GlobalService) {
    console.log('ToolsGridComponent constructor');
  }

  ngOnDestroy() {
    console.warn('ToolsGridComponent destroy');
  }
  ngOnInit(): void {
    console.log('ToolsGridComponent init');
  }
  goto(tool) {
    this.navCtrl.push(tool.page, { title: tool.txt });
  }
}
