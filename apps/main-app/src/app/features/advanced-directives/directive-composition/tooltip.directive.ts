import { Directive, ElementRef, Input, signal, HostListener, HostBinding } from '@angular/core';
import { MatTooltipModule, MatTooltip } from '@angular/material/tooltip';

@Directive({
  selector: '[appSmartTooltip]',
  standalone: true,
  hostDirectives: [
    {
      directive: MatTooltip,
      inputs: ['matTooltip: tooltipText', 'matTooltipPosition: tooltipPosition']
    }
  ],
  host: {
    '[class.tooltip-enabled]': 'isEnabled()',
    '[class.tooltip-focused]': 'isFocused()',
    '[class.tooltip-hovered]': 'isHovered()'
  }
})
export class SmartTooltipDirective {
  private readonly isEnabled = signal(true);
  private readonly isFocused = signal(false);
  private readonly isHovered = signal(false);

  @Input() set appSmartTooltip(enabled: boolean) {
    this.isEnabled.set(enabled);
  }

  @HostListener('mouseenter')
  onMouseEnter(): void {
    this.isHovered.set(true);
  }

  @HostListener('mouseleave')
  onMouseLeave(): void {
    this.isHovered.set(false);
  }

  @HostListener('focus')
  onFocus(): void {
    this.isFocused.set(true);
  }

  @HostListener('blur')
  onBlur(): void {
    this.isFocused.set(false);
  }

  @HostBinding('style.cursor')
  get cursor(): string {
    return this.isEnabled() ? 'help' : 'default';
  }

  constructor(private el: ElementRef) {}
} 