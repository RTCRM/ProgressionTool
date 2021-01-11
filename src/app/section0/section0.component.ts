import { Component, OnInit } from '@angular/core';
// import { AnalyticsService } from '../services/analytics.service';

@Component({
  selector: 'app-section0',
  templateUrl: './section0.component.html',
  styleUrls: ['./section0.component.scss']
})
export class Section0Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  share(service: string) {
    $('.at-svc-' + service)[0].click();
    // this.analytics.click(service, 'Progression Tool', 'share');
  }
}
