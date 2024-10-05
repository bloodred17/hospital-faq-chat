import {Directive, ContentChildren, QueryList, AfterContentInit, effect, signal} from '@angular/core';
import { AccordionComponent } from './accordion.component';  // Adjust the path as needed

@Directive({
  standalone: true,
  selector: '[accordionGroup]'
})
export class AccordionGroupDirective implements AfterContentInit {
  contentInitialized = signal(false);
  @ContentChildren(AccordionComponent) accordions!: QueryList<AccordionComponent>;

  // constructor() {
  //   effect(() => {
  //     for (const accordion of this.accordions) {
  //       if (accordion.accordionState() === 'open') {
  //         this.toggleAccordions(accordion);
  //       }
  //     }
  //   });
  // }

  ngAfterContentInit() {
    this.accordions.forEach(accordion => {
      accordion.opened.subscribe(() => {
        this.closeOtherAccordions(accordion);
      });
    });
  }

  private closeOtherAccordions(openedAccordion: AccordionComponent) {
    this.accordions.forEach(accordion => {
      if (accordion !== openedAccordion) {
        accordion.accordionState.set('closed');
      }
    });
  }
}
