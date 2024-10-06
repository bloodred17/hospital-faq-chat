import { Routes } from '@angular/router';
import {DemoComponent} from './demo.component';
import {HospitalChatComponent} from './hospital-chat.component';

export const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'hospital_faq',
    component: HospitalChatComponent,
  }
];
