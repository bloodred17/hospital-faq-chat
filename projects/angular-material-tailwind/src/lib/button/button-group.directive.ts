import {AfterViewInit, computed, Directive, ElementRef, Input, input, Renderer2, signal} from '@angular/core';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';
import {cva, VariantProps} from 'class-variance-authority';


export const variantConfig = {
  variants: {
    variant: {
      default: 'bg-slate-800 focus:bg-slate-700 focus:shadow-none active:bg-slate-700 hover:bg-slate-700 text-white',
    },
    size: {
      default: 'py-2 px-4',
      xs: 'py-1 px-2.5',
      sm: 'py-1.5 px-3',
      md: 'py-2 px-4',
      lg: 'py-2.5 px-5',
      xl: 'py-3.5 px-6'
    }
  }
};
export const buttonGroupVariants = cva(
  'border border-transparent text-center text-sm transition-all shadow-md hover:shadow-lg active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none',
  variantConfig
);
export type ButtonGroupVariants = VariantProps<typeof buttonGroupVariants>;


@Directive({
  selector: '[mtButtonGroup]',
  standalone: true,
})
export class ButtonGroupDirective implements AfterViewInit {
  public readonly userClass = input<ClassValue>('', { alias: 'class' });
  private readonly _settableClass = signal<ClassValue>('');

  private startButtonClasses = 'rounded-md rounded-r-none';
  private middleButtonClasses = 'rounded-none';
  private endButtonClasses = 'rounded-md rounded-l-none';

  protected _computedClass = computed(() =>
    mtx(
      buttonGroupVariants({variant: this._variant(), size: this._size()}),
      this._settableClass(),
      this.userClass()),
    );

  private readonly _variant = signal<ButtonGroupVariants['variant']>('default');
  @Input()
  set variant(variant: ButtonGroupVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _size = signal<ButtonGroupVariants['size']>('default');
  @Input()
  set size(size: ButtonGroupVariants['size']) {
    this._size.set(size);
  }

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  ngAfterViewInit(): void {
    const buttons = this.el.nativeElement.querySelectorAll('button');

    buttons.forEach((button: HTMLElement, index: number) => {
      this._computedClass()?.split(' ')?.forEach((className: string) => this.renderer.addClass(button, className));

      // First button: rounded on the left side
      if (index === 0) {
        this.startButtonClasses.split(' ').forEach((className: string) => this.renderer.addClass(button, className));
      }

      // Middle buttons: no border radius
      if (index > 0 && index < buttons.length - 1) {
        this.middleButtonClasses.split(' ').forEach((className: string) => this.renderer.addClass(button, className));
      }

      // Last button: rounded on the right side
      if (index === buttons.length - 1) {
        this.endButtonClasses.split(' ').forEach((className: string) => this.renderer.addClass(button, className));
      }
    });
  }
}
