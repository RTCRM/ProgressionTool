import { Component, OnInit } from '@angular/core';
// import { InterstitialService } from '../services/interstitial.service';
import { TooltipService } from '../services/tooltip.service';

@Component({
  selector: 'app-section3',
  templateUrl: './section3.component.html',
  styleUrls: ['./section3.component.scss']
})
export class Section3Component implements OnInit {

  constructor(private tooltip: TooltipService) { }

  ngOnInit() {
  }

  showTooltip($event: Event) {
    this.tooltip.show($event);
  }

  hideTooltip($event: Event) {
    this.tooltip.hide($event);
  }

  focusoutTooltip($event: Event) {
    this.tooltip.focusout($event);
  }

  // openExternal($event: Event) {
  //   this.external.open($event);
  // }
}
