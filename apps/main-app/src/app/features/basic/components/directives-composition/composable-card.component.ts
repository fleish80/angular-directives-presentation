import { Component, input, signal } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';

@Component({
  selector: 'app-composable-card',
  standalone: true,
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['appHighlight', 'appHighlightTextColor'],
      outputs: ['hoverStateChange']
    }
  ],
  template: `
    <div class="composable-card">
      <h4>Composable Card</h4>
      <p>This component uses <code>hostDirectives</code> to inherit the highlight behavior.</p>
      <small>The directive is composed at the component level, not in the template</small>
    </div>
  `,
  styles: [`
    :host {
      display: block;
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      transition: all 0.2s ease;
    }
    .composable-card {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .composable-card h4 {
      margin: 0;
      color: #333;
    }
    .composable-card p {
      margin: 0;
      color: #666;
    }
    .composable-card small {
      color: #999;
      font-style: italic;
    }
    .composable-card code {
      background-color: #e9ecef;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
  `]
})
export class ComposableCardComponent {

} 