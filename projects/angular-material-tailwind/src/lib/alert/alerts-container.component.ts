import { Component, ViewChild, ViewContainerRef } from '@angular/core';

@Component({
  selector: 'mt-alerts-container',
  standalone: true,
  template: `<ng-template #alertContainer></ng-template>`
})
export class AlertsContainerComponent {
  @ViewChild('alertContainer', { read: ViewContainerRef, static: true }) alertContainer!: ViewContainerRef;

  get viewContainerRef() {
    return this.alertContainer;
  }
}
