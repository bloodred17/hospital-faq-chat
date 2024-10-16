import {computed, Directive, Input, input, signal} from '@angular/core';
import {cva, VariantProps} from 'class-variance-authority';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';

export const alertVariants = cva(
  'relative flex w-full p-3 rounded-md',
  {
    variants: {
      variant: {
        default: 'text-white bg-slate-800',
        outline: 'text-slate-600 border border-slate-300',
        ghost: 'text-slate-600 bg-slate-100',
        info: 'text-white bg-info',
        danger: 'text-white bg-danger',
        success: 'text-white bg-success',
        warning: 'text-white bg-warning'
      },
      size: {
        small: 'text-sm',
        large: 'text-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'small',
    },
  },
);
export type AlertVariants = VariantProps<typeof alertVariants>;

@Directive({
  selector: '[mtAlert]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class AlertDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    mtx(alertVariants({ variant: this._variant(), size: this._size() }), this._settableClass(), this.userClass()),
  );

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }

  private readonly _variant = signal<AlertVariants['variant']>('default');
  @Input()
  set variant(variant: AlertVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _size = signal<AlertVariants['size']>('small');
  @Input()
  set size(size: AlertVariants['size']) {
    this._size.set(size);
  }
}
