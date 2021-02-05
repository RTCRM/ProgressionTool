import { Component, OnInit, Renderer2, ViewChild, ElementRef, ChangeDetectorRef} from '@angular/core';
import { GridService } from '../services/grid.service';
// import { AnalyticsService } from '../services/analytics.service';
import { ScrollService } from '../services/scroll.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  @ViewChild('iframe') iframe: ElementRef;

  isOpen = false;
  transparent = true;
  bgSolid = false;
  disappear: boolean;
  iniPos: number;
  // url = '../sign-up-iframe';
  url = 'http://localhost:8080/sign-up-iframe';
  doc;
  win;
  isSignUpOpen = false;

  constructor(private renderer: Renderer2, private ref: ChangeDetectorRef, private grid: GridService, private scroll: ScrollService) {
    (window as any).update = this.update.bind(this);
   }

  ngOnInit() {

  this.doc = this.iframe.nativeElement.contentDocument || this.iframe.nativeElement.contentWindow;
  this.win = this.iframe.nativeElement.contentWindow;

  this.iniPos = this.scroll.iniPos;
  this.transparent = this.iniPos <= 65 ? true : false;
  this.bgSolid = this.iniPos > 240 ? true : false;

  this.scroll.transparent
    .subscribe(
      (transparent: boolean) => {
        this.transparent = transparent;
      }
    );
  this.scroll.bgSolid
    .subscribe(
      (bgSolid: boolean) => {
        this.bgSolid = bgSolid;
      }
    );
  this.scroll.disappear
    .subscribe(
      (disappear: boolean) => {
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

  fireHierarchicalTransition() {
    this.isSignUpOpen = !this.isSignUpOpen;
    this.win.open();
  }

  update() {
    console.log('update');
    this.isSignUpOpen = !this.isSignUpOpen;
    this.ref.detectChanges();
  }

}
