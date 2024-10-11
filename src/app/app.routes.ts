import { Routes } from '@angular/router';
import {DemoComponent} from './views/demo.component';
import {HospitalChatComponent} from './views/hospital-chat.component';
import { HomeComponent } from './views/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'demo',
    component: DemoComponent,
  },
  {
    path: 'hospital_faq',
    component: HospitalChatComponent,
  }
];
