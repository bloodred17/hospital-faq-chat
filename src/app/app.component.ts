import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {
  AccordionComponent,
  AccordionGroupDirective,
  AccordionToggleDirective, AlertDirective
} from 'angular-material-tailwind';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AccordionComponent,
    AccordionToggleDirective,
    AccordionGroupDirective,
    AlertDirective,
  ],
  template: `
    <div class="p-2">
      <h1 class="text-3xl font-bold underline">
        Hello world!
      </h1>
      <button
        class="middle none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
        data-ripple-light="true"
      >
        Button
      </button>
    </div>
    <div mtAccordionGroup>
      <mt-accordion>
        <div heading mtAccordionToggle class="w-full flex-grow py-5">
          <span>What is Material Tailwind?</span>
        </div>
        <div class="pb-5 text-sm text-slate-500">
          Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
        </div>
      </mt-accordion>
      <mt-accordion>
        <div heading mtAccordionToggle class="w-full flex-grow py-5">
          <span>What is Material Tailwind?</span>
        </div>
        <div class="pb-5 text-sm text-slate-500">
          Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
        </div>
      </mt-accordion>
    </div>
    <div mtAlert>
      A simple filled alert for showing message.
      <button class="flex items-center justify-center transition-all w-8 h-8 rounded-md text-white hover:bg-white/10 active:bg-white/10 absolute top-1.5 right-1.5" type="button">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="h-5 w-5" stroke-width="2"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path></svg>
      </button>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'hospitalChat';
}
