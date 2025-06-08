import { Component, input, signal } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-highlight-child',
  standalone: true,
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['appHighlight', 'appHighlightTextColor'],
      outputs: ['hoverStateChange']
    }
  ],
  template: `
    <div class="highlight-child">
      <p>This is a highlight child component</p>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
    }
    .highlight-child {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
  `]
})
export class HighlightChildComponent {

} 