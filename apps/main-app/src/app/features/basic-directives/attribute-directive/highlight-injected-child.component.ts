import { Component, inject, signal } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@Component({
  selector: 'app-highlight-injected-child',
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
      <p>This is a highlight injected child component</p>
      <p>Is hovered: {{ isHovered() ? 'Yes' : 'No' }}</p>
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
    }
  `]
})
export class HighlightInjectedChildComponent {

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