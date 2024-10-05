import {computed, Directive, input, signal} from '@angular/core';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';

@Directive({
  selector: '[mtBreadcrumbItem]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class BreadcrumbItemDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private baseClass = 'flex cursor-pointer items-center text-sm transition-colors duration-300';
  private readonly _settableClass = signal<ClassValue>(this.baseClass);

  protected _computedClass= computed(() => mtx(this._settableClass(), this.userClass()));

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }
}
