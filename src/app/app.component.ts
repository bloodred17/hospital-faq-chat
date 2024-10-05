import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {AngularMaterialTailwindComponent} from 'angular-material-tailwind';
import {AccordionComponent} from '../../projects/angular-material-tailwind/src/lib/accordion/accordion.component';
import {
  AccordionToggleDirective
} from '../../projects/angular-material-tailwind/src/lib/accordion/accordion-toggle.directive';
import {
  AccordionGroupDirective
} from '../../projects/angular-material-tailwind/src/lib/accordion/accordion-group.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    AngularMaterialTailwindComponent,
    AccordionComponent,
    AccordionToggleDirective,
    AccordionGroupDirective,
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
    <lib-angular-material-tailwind></lib-angular-material-tailwind>
    <div accordionGroup>
      <mt-accordion>
        <div heading accordionToggle class="w-full flex-grow py-5">
          <span>What is Material Tailwind?</span>
        </div>
        <div class="pb-5 text-sm text-slate-500">
          Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
        </div>
      </mt-accordion>
      <mt-accordion>
        <div heading accordionToggle class="w-full flex-grow py-5">
          <span>What is Material Tailwind?</span>
        </div>
        <div class="pb-5 text-sm text-slate-500">
          Material Tailwind is a framework that enhances Tailwind CSS with additional styles and components.
        </div>
      </mt-accordion>
    </div>

    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'hospitalChat';
}
