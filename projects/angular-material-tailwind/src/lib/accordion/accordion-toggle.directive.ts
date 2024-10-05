import {Directive, HostListener} from '@angular/core';
import {AccordionComponent} from './accordion.component';

@Directive({
  selector: '[mtAccordionToggle]',
  standalone: true
})
export class AccordionToggleDirective {
  constructor(private accordion: AccordionComponent) {}

  @HostListener('click')
  toggleAccordion() {
    this.accordion.toggleAccordion();
  }
}
