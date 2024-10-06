import {computed, Directive, Input, input, signal} from '@angular/core';
import {cva, VariantProps} from 'class-variance-authority';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';


export const chipVariants = cva(
  'rounded-md border border-transparent transition-all shadow-sm',
  {
    variants: {
      variant: {
        default: 'bg-slate-800 text-white ',
        gradient: 'bg-gradient-to-tr from-slate-800 to-slate-700 text-white ',
        outline: 'border border-slate-300 text-slate-600',
        ghost: 'bg-slate-100 border border-transparent text-slate-600'
      },
      size: {
        default: 'py-0.5 px-2.5 text-sm',
        sm: 'py-0.5 px-2.5 text-xs',
        md: 'py-0.5 px-2.5 text-sm',
        lg: 'py-1 px-3 text-sm',
      }
    }
  }
);

export type ChipVariants = VariantProps<typeof chipVariants>;

@Directive({
  selector: '[mtChip]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class ChipDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    mtx(chipVariants({ variant: this._variant(), size: this._size() }), this._settableClass(), this.userClass()),
  );

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }

  private readonly _variant = signal<ChipVariants['variant']>('default');
  @Input()
  set variant(variant: ChipVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _size = signal<ChipVariants['size']>('default');
  @Input()
  set size(size: ChipVariants['size']) {
    this._size.set(size);
  }
}
