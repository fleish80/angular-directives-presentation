import { Component, inject, signal } from '@angular/core';
import { HighlightDirective } from '../../highlight.directive';

@Component({
  selector: 'app-injectable-card',
  standalone: true,
  hostDirectives: [
    {
      directive: HighlightDirective,
      inputs: ['appHighlight', 'appHighlightTextColor'],
      outputs: ['hoverStateChange']
    }
  ],
  template: `
    <div class="injectable-card">
      <h4>Injectable Card</h4>
      <p>This component injects the <code>HighlightDirective</code> instance and configures it programmatically.</p>
      <div class="injection-info">
        <p><strong>Injection Status:</strong> {{ isHovered() ? 'Hovered' : 'Not hovered' }}</p>
        <small>The directive properties are set via dependency injection in the constructor</small>
      </div>
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
    .injectable-card {
      display: flex;
      flex-direction: column;
      gap: 12px;
    }
    .injectable-card h4 {
      margin: 0;
      color: #333;
    }
    .injectable-card p {
      margin: 0;
      color: #666;
    }
    .injectable-card code {
      background-color: #e9ecef;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    .injection-info {
      padding: 8px;
      background-color: #f8f9fa;
      border-radius: 4px;
      border: 1px solid #e9ecef;
    }
    .injection-info p {
      margin: 0 0 4px 0;
    }
    .injection-info small {
      color: #999;
      font-style: italic;
    }
  `]
})
export class InjectableCardComponent {

  readonly highlightDirective = inject(HighlightDirective);
  readonly isHovered = signal<boolean>(false);

  constructor() {
    this.highlightDirective.appHighlight = 'lightblue';
    this.highlightDirective.appHighlightTextColor = 'darkblue';

    this.highlightDirective.hoverStateChange.subscribe((hovered) => {
      this.isHovered.set(hovered);
    });
  }

} 