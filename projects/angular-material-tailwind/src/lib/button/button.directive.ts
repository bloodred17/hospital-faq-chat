import {computed, Directive, Input, input, signal} from '@angular/core';
import {cva, VariantProps} from 'class-variance-authority';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';

export const buttonVariants = cva(
  'rounded-md border border-transparent text-center transition-all shadow-md hover:shadow-lg focus:shadow-none active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
  {
    variants: {
      variant: {
        default: 'bg-slate-800 text-white focus:bg-slate-700 active:bg-slate-700 hover:bg-slate-700',
        outline: 'border border-slate-300 text-slate-600 hover:text-white hover:bg-slate-800 hover:border-slate-800 focus:text-white focus:bg-slate-800 focus:border-slate-800 active:border-slate-800 active:text-white active:bg-slate-800',
        text: 'border border-transparent text-slate-600 hover:bg-slate-100 focus:bg-slate-100 active:bg-slate-100',
      },
      size: {
        default: 'py-2 px-4',
        xs: 'py-1 px-2.5 text-sm',
        sm: 'py-1.5 px-3 text-sm',
        md: 'py-2 px-4 text-sm',
        lg: 'py-2.5 px-5 text-base',
        xl: 'py-3.5 px-6 text-base'
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default'
    }
  },
);

export type ButtonVariants = VariantProps<typeof buttonVariants>;


@Directive({
  selector: '[mtButton]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class ButtonDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    mtx(buttonVariants({ variant: this._variant(), size: this._size() }), this._settableClass(), this.userClass()),
  );

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }

  private readonly _variant = signal<ButtonVariants['variant']>('default');
  @Input()
  set variant(variant: ButtonVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _size = signal<ButtonVariants['size']>('default');
  @Input()
  set size(size: ButtonVariants['size']) {
    this._size.set(size);
  }
}
