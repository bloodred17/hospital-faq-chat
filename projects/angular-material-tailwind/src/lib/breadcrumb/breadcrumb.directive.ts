import {computed, Directive, input, signal} from '@angular/core';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';

@Directive({
  selector: '[mtBreadcrumb]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class BreadcrumbDirective {
  private baseClass = 'flex w-full flex-wrap items-center rounded-md px-4 py-2';
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>(this.baseClass);

  protected _computedClass= computed(() => mtx(this._settableClass(), this.userClass()));

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }
}
