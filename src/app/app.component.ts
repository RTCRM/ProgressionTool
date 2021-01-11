import { Component, HostListener, OnInit } from '@angular/core';
import { ScrollService } from './services/scroll.service';
import { WindowService } from './services/window.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'understanding-ild-progression';

  // tslint:disable-next-line:max-line-length
  constructor(private scroll: ScrollService, private window: WindowService) { }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: Event) {
    const scrollOffset = window.pageYOffset;
    this.scroll.scrollProgress(scrollOffset);
  }

  @HostListener('window:resize', ['$event'])
  onResize($event: Event) {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    this.window.windowSize(screenWidth, screenHeight);
  }

  ngOnInit() {
    this.scroll.initialPos(window.pageYOffset);
    this.window.windowSize(window.innerWidth, window.innerHeight);
  }
}
