import {computed, Directive, Input, input, signal} from '@angular/core';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';
import {cva, VariantProps} from 'class-variance-authority';
import {buttonVariants} from '../button';

export const cardVariants = cva(
  'relative flex flex-col my-6 bg-white shadow-sm border rounded-lg border-slate-200 w-96',
  {
    variants: {
      variant: {
        default: ''
      }
    }
  }
);

export type CardVariants = VariantProps<typeof cardVariants>;


@Directive({
  selector: '[mtCard]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class CardDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    mtx(cardVariants({ variant: this._variant() }), this._settableClass(), this.userClass()),
  );

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }

  private readonly _variant = signal<CardVariants['variant']>('default');
  @Input()
  set variant(variant: CardVariants['variant']) {
    this._variant.set(variant);
  }

  // private readonly _size = signal<CardVariants['size']>('default');
  // @Input()
  // set size(size: CardVariants['size']) {
  //   this._size.set(size);
  // }
}
