import {Component, computed, effect, EventEmitter, Input, Output, signal} from '@angular/core';
import {NgClass, NgTemplateOutlet} from '@angular/common';
import {AccordionToggleDirective} from './accordion-toggle.directive';

export type AccordionState = 'open' | 'closed';

@Component({
  selector: 'mt-accordion',
  standalone: true,
  imports: [
    NgClass,
    NgTemplateOutlet,
    AccordionToggleDirective,
  ],
  template: `
    <ng-template #downArrow>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd"
              d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
              clip-rule="evenodd"/>
      </svg>
    </ng-template>

    <ng-template #upArrow>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" class="w-4 h-4">
        <path fill-rule="evenodd"
              d="M11.78 9.78a.75.75 0 0 1-1.06 0L8 7.06 5.28 9.78a.75.75 0 0 1-1.06-1.06l3.25-3.25a.75.75 0 0 1 1.06 0l3.25 3.25a.75.75 0 0 1 0 1.06Z"
              clip-rule="evenodd"/>
      </svg>
    </ng-template>

    <div class="border-b border-slate-200">
      <div class="w-full flex justify-between items-center text-slate-800">
        <ng-content select="[heading]"></ng-content>
        <span class="text-slate-800 transition-transform duration-300">
          @if (accordionState() === 'open') {
            <ng-container [ngTemplateOutlet]="upArrow"></ng-container>
          } @else {
            <ng-container [ngTemplateOutlet]="downArrow"></ng-container>
          }
        </span>
      </div>
      <div class="overflow-hidden transition-all duration-300 ease-in-out" [ngClass]="{'max-h-0': accordionState() === 'closed'}">
        <ng-content></ng-content>
      </div>
    </div>
  `,
})
export class AccordionComponent {
  @Input() defaultState: AccordionState = 'closed';
  accordionState = signal<AccordionState>(this.defaultState);

  @Output() opened = new EventEmitter<void>();

  constructor() {
    effect(() => {
      if (this.accordionState() === 'open') {
        this.opened.emit();
      }
    });
  }

  toggleAccordion() {
    if (this.accordionState() == 'open') {
      this.accordionState.set('closed');
    } else {
      this.accordionState.set('open');
    }
  }
}
