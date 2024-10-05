import {computed, Directive, Input, input, signal} from '@angular/core';
import {cva, VariantProps} from 'class-variance-authority';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';


export const indicatorVariants = cva(
  'absolute min-w-[12px] min-h-[12px] rounded-full py-1 px-1 text-xs font-medium content-[\'\'] leading-none grid place-items-center translate-x-2/4 -translate-y-2/4\ text-white border border-white',
  {
    variants: {
      variant: {
        default: ''
      },
      position: {
        topRight: 'top-[5%] right-[5%]',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'topRight'
    }
  },
)

export type IndicatorVariants = VariantProps<typeof indicatorVariants>;


@Directive({
  selector: '[mtAvatarIndicator]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class AvatarIndicatorDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    mtx(indicatorVariants({ variant: this._variant(), position: this._position() }), this._settableClass(), this.userClass()),
  );

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }

  private readonly _variant = signal<IndicatorVariants['variant']>('default');
  @Input()
  set variant(variant: IndicatorVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _position = signal<IndicatorVariants['position']>('topRight');
  @Input()
  set size(size: IndicatorVariants['position']) {
    this._position.set(size);
  }
}
