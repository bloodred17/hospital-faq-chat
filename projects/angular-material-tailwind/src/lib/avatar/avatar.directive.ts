import {computed, Directive, Input, input, signal} from '@angular/core';
import {cva, VariantProps} from 'class-variance-authority';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';

export const avatarVariants = cva(
  'relative inline-block object-cover object-center',
  {
    variants: {
      variant: {
        default: ''
      },
      size: {
        small: 'h-6 w-6',
        medium: 'h-9 w-9',
        large: 'h-12 w-12',
        custom: '',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'medium'
    }
  },
)

export type AvatarVariants = VariantProps<typeof avatarVariants>;


@Directive({
  selector: '[mtAvatar]',
  standalone: true,
  host: {
    '[class]': '_computedClass()',
  },
})
export class AvatarDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    mtx(avatarVariants({ variant: this._variant(), size: this._size() }), this._settableClass(), this.userClass()),
  );

  setClass(value: ClassValue) {
    this._settableClass.set(value);
  }

  private readonly _variant = signal<AvatarVariants['variant']>('default');
  @Input()
  set variant(variant: AvatarVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _size = signal<AvatarVariants['size']>('medium');
  @Input()
  set size(size: AvatarVariants['size']) {
    this._size.set(size);
  }
}
