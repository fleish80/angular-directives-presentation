import { Component } from '@angular/core';

@Component({
  selector: 'app-hoverable-card',
  template: `
    <div class="hoverable-card">
      <h4>Hoverable Card</h4>
      <p>This card demonstrates attribute directive behavior. Hover over it to see the highlight effect!</p>
      <small>Try hovering to see the color change</small>
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
    .hoverable-card {
      display: flex;
      flex-direction: column;
      gap: 8px;
    }
    .hoverable-card h4 {
      margin: 0;
      color: #333;
    }
    .hoverable-card p {
      margin: 0;
      color: #666;
    }
    .hoverable-card small {
      color: #999;
      font-style: italic;
    }
  `]
})
export class HoverableCardComponent {}
