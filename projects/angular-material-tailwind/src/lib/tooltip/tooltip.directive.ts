import {
  computed,
  Directive,
  ElementRef,
  HostListener,
  Input,
  input,
  Renderer2,
  signal,
  TemplateRef, ViewContainerRef
} from '@angular/core';
import {ClassValue} from 'clsx';
import {mtx} from '../core/mtx';
import {cva, VariantProps} from 'class-variance-authority';


export const tooltipVariants = cva(
  'absolute z-50 whitespace-normal break-words rounded-lg font-sans font-normal text-white focus:outline-none',
  {
    variants: {
      variant: {
        default: 'bg-black'
        // default: 'bg-slate-800 text-white ',
        // gradient: 'bg-gradient-to-tr from-slate-800 to-slate-700 text-white ',
        // outline: 'border border-slate-300 text-slate-600',
        // ghost: 'bg-slate-100 border border-transparent text-slate-600'
      },
      size: {
        default: 'py-1.5 px-3 text-sm',
        // sm: 'py-0.5 px-2.5 text-sm',
        // md: 'py-0.5 px-2.5 text-sm',
        // lg: 'py-1 px-3 text-sm',
      },
    }
  }
);

export type TooltipVariants = VariantProps<typeof tooltipVariants>;

@Directive({
  selector: '[mtTooltip]',
  standalone: true,
  host: {
    '[class]': "'relative'",
  },
})
export class TooltipDirective {
  public readonly userClass = input<ClassValue>('', { alias: 'tooltipClass' });
  private readonly _settableClass = signal<ClassValue>('');

  protected _computedClass = computed(() =>
    mtx(
      tooltipVariants({ variant: this._variant(), size: this._size() }),
      this._settableClass(),
      this.userClass()
    ),
  );

  private readonly _variant = signal<TooltipVariants['variant']>('default');
  @Input()
  set variant(variant: TooltipVariants['variant']) {
    this._variant.set(variant);
  }

  private readonly _size = signal<TooltipVariants['size']>('default');
  @Input()
  set size(size: TooltipVariants['size']) {
    this._size.set(size);
  }

  @Input() position: 'top' | 'bottom' | 'left' | 'right' = 'top';
  @Input('mtTooltip') tooltipTemplate: TemplateRef<any> | null = null;
  private tooltipElement: HTMLElement | null = null;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2,
    private viewContainer: ViewContainerRef
  ) { }

  @HostListener('mouseenter') onMouseEnter() {
    if (this.tooltipTemplate && !this.tooltipElement) {
      this.showTooltip();
    }
  }

  @HostListener('mouseleave') onMouseLeave() {
    if (this.tooltipElement) {
      this.hideTooltip();
    }
  }

  private showTooltip(): void {
    // Create tooltip container element
    const tooltipClasses = 'absolute -top-2 -right-2';
    this.tooltipElement = this.renderer.createElement('div');;
    this._computedClass().split(' ').forEach((className) => this.renderer.addClass(this.tooltipElement, className));
    // this.renderer.addClass(this.tooltipElement, `tooltip-${this.position}`);

    // Inject the template into the tooltip
    const embeddedView = this.viewContainer.createEmbeddedView(this.tooltipTemplate!);
    embeddedView.rootNodes.forEach(node => {
      this.renderer.appendChild(this.tooltipElement, node);
    });

    // Append the tooltip
    this.renderer.appendChild(this.el.nativeElement, this.tooltipElement);

    // // Position the tooltip
    this.positionTooltip();

    // // Apply final positioning styles
    // this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
    // this.renderer.setStyle(this.tooltipElement, 'z-index', '1000');
  }

  private positionTooltip(): void {
    const hostPos = this.el.nativeElement.getBoundingClientRect();
    const tooltipPos = this.tooltipElement!.getBoundingClientRect();
    // const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    const offset = 2;
    const top = hostPos.top;
    const left = hostPos.left;
    const hostHeight = hostPos.height + offset;
    const hostWidth = hostPos.width + offset;

    switch (this.position) {
      case 'top':
        this.renderer.setStyle(this.tooltipElement, 'transform', `translateX(${(hostPos.width - tooltipPos.width)/2}px)`);
        this.renderer.setStyle(this.tooltipElement, 'bottom', `${hostHeight}px`);
        break;
      case 'bottom':
        this.renderer.setStyle(this.tooltipElement, 'transform', `translateX(${(hostPos.width - tooltipPos.width)/2}px)`);
        this.renderer.setStyle(this.tooltipElement, 'top', `${hostHeight}px`);
        break;
      case 'right':
        this.renderer.setStyle(this.tooltipElement, 'top', 0);
        this.renderer.setStyle(this.tooltipElement, 'transform', `translateY(${(hostPos.height - tooltipPos.height)/2}px)`);
        this.renderer.setStyle(this.tooltipElement, 'left', `${hostWidth}px`);
        break;
      case 'left':
        this.renderer.setStyle(this.tooltipElement, 'top', 0);
        this.renderer.setStyle(this.tooltipElement, 'transform', `translateY(${(hostPos.height - tooltipPos.height)/2}px)`);
        this.renderer.setStyle(this.tooltipElement, 'right', `${hostWidth}px`);
        break;
    }
  }

  private hideTooltip(): void {
    if (this.tooltipElement) {
      this.renderer.removeChild(document.body, this.tooltipElement);
      this.tooltipElement = null;
      this.viewContainer.clear();  // Clear the template from viewContainer
    }
  }
}
