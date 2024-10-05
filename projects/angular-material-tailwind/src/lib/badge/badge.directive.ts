import {computed, Directive, Input, input, signal} from '@angular/core';
import {cva, VariantProps} from 'class-variance-authority';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';

export const badgeVariants = cva(
  'absolute grid min-h-[24px] min-w-[24px] place-items-center rounded-full py-1 px-1 text-xs text-white',
  {
    variants: {
      variant: {
        default: ''
      },
      position: {
        'top-right': 'top-0.5 right-0.5 translate-x-2/4 -translate-y-2/4',
        'bottom-right': 'bottom-0.5 right-0.5 translate-x-2/4 translate-y-2/4',
        'top-left': 'top-0.5 left-0.5 -translate-x-2/4 -translate-y-2/4',
        'bottom-left': 'bottom-0.5 left-0.5 -translate-x-2/4 translate-y-2/4',
      },
    },
    defaultVariants: {
      variant: 'default',
      position: 'top-right'
    }
  },
)

export type BadgeVariants = VariantProps<typeof badgeVariants>;


@Directive({
  selector: '[mtBadge]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class BadgeDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    mtx(badgeVariants({ variant: this._variant(), position: this._position() }), this._settableClass(), this.userClass()),
  );

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }

  private readonly _variant = signal<BadgeVariants['variant']>('default');
  @Input()
  set variant(variant: BadgeVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _position = signal<BadgeVariants['position']>('top-right');
  @Input()
  set position(size: BadgeVariants['position']) {
    this._position.set(size);
  }
}
