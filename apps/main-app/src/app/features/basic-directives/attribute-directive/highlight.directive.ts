import { Directive, ElementRef, Input, output, signal, inject } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
  host: {
    '[style.background-color]': 'highlightColor()',
    '[style.color]': 'isHovered() ? highlightTextColor() : "inherit"',
    '[style.font-weight]': 'isHovered() ? "bold" : "normal"',
    '[style.padding-inline]': '"4px"',
    '[style.padding-block]': '"2px"',
    '[style.border-radius]': '"4px"',
    '(mouseenter)': 'onMouseEnter()',
    '(mouseleave)': 'onMouseLeave()'
  }
})
export class HighlightDirective {
  private readonly highlightColor = signal<string>('yellow');
  private readonly highlightTextColor = signal<string>('black');
  private readonly isHovered = signal<boolean>(false);
  private el = inject(ElementRef);

  readonly hoverStateChange = output<boolean>();

  @Input() set appHighlight(color: string) {
    this.highlightColor.set(color || 'yellow');
  }

  @Input() set appHighlightTextColor(color: string) {
    this.highlightTextColor.set(color || 'black');
  }

  onMouseEnter() {
    this.isHovered.set(true);
    this.hoverStateChange.emit(true);
  }

  onMouseLeave() {
    this.isHovered.set(false);
    this.hoverStateChange.emit(false);
  }
} 