import { Component, OnInit, Renderer2 } from '@angular/core';
import { GridService } from '../services/grid.service';
import { AnalyticsService } from '../services/analytics.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  isOpen:Boolean = false;
  transparent:Boolean = true;
  bgSolid:Boolean = false;
  disappear:Boolean;
  iniPos: Number;

  constructor(private renderer: Renderer2, private grid: GridService, private analytics: AnalyticsService, private scroll: ScrollService) { }

  ngOnInit() {

    this.iniPos = this.scroll.iniPos;
    this.transparent = this.iniPos <= 65 ? true : false;
    this.bgSolid = this.iniPos > 240 ? true : false;

    this.scroll.transparent
      .subscribe(
        (transparent: Boolean) => {
          this.transparent = transparent;
        }
      );
    this.scroll.bgSolid
      .subscribe(
        (bgSolid: Boolean) => {
          this.bgSolid = bgSolid;
        }
      );
    this.scroll.disappear
      .subscribe(
        (disappear: Boolean) => {
          this.disappear = disappear;
        }
      );
  }

  showGrid() {
    this.grid.show();
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.isOpen ? this.renderer.addClass(document.body, 'overflow-hidden') : this.renderer.removeClass(document.body, 'overflow-hidden');
  }

  // share(service: string) {
  //   $('.at-svc-' + service)[0].click();
  //   this.analytics.click(service, 'Progression Tool', 'share');
  // }

  // showMenu() {
  //   $('app-mobile-menu ul').toggle('slow');
  // }

}
