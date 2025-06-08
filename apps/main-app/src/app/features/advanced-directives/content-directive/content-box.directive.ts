import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appContentBox]',
  standalone: true,
  host: {
    '[class.content-box]': 'true',
    '[class.content-box--primary]': 'variant === "primary"',
    '[class.content-box--secondary]': 'variant === "secondary"'
  }
})
export class ContentBoxDirective {
  @Input() variant: 'primary' | 'secondary' = 'primary';
} 