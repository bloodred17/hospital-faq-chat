import { Component, Input } from '@angular/core';
import {AlertData} from './alerts.service';

@Component({
  selector: 'app-alert',
  standalone: true,
  template: `
    <div>
      <span>{{ data.message }}</span>
    </div>
  `,
})
export class AlertComponent {
  @Input() data!: AlertData;
}
