import {Directive, ContentChildren, QueryList, AfterContentInit} from '@angular/core';
import { AccordionComponent } from './accordion.component';

@Directive({
  standalone: true,
  selector: '[mtAccordionGroup]'
})
export class AccordionGroupDirective implements AfterContentInit {
  @ContentChildren(AccordionComponent) accordions!: QueryList<AccordionComponent>;

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
