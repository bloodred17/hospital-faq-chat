import {Injectable, ViewContainerRef, ComponentRef, Injector, ElementRef} from '@angular/core';
import {AlertComponent} from './alert.component';

export interface AlertData {
  type: 'success' | 'error' | 'info' | 'warning';
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private alertContainer!: ViewContainerRef;
  private alertTimeout = 5000;

  constructor(private injector: Injector) {}

  setAlertContainer(container: ViewContainerRef) {
    this.alertContainer = container;
  }

  showAlert(alertData: AlertData, container?: ViewContainerRef): ComponentRef<AlertComponent> {
    if (!container) {
      if (!this.alertContainer) {
        throw new Error('Alert container not found!');
      }
      container = this.alertContainer;
    }

    // Directly create the AlertComponent
    const componentRef = container.createComponent(AlertComponent, {
      injector: this.injector
    });

    // Set alert data
    componentRef.instance.data = alertData;

    // Automatically dismiss the alert after a timeout
    setTimeout(() => {
      this.removeAlert(container, componentRef);
    }, this.alertTimeout);

    return componentRef;
  }

  /**
   * Remove the alert after timeout or manually.
   */
  private removeAlert(container: ViewContainerRef, componentRef: ComponentRef<AlertComponent>): void {
    // Remove the component from the container
    container.remove(container.indexOf(componentRef.hostView));
  }
}
