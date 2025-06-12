import { Component, inject, input, output, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { HighlightDirective } from '../../highlight.directive';
import { InjectableCardComponent } from './injectable-card.component';

@Component({
  selector: 'app-directive-injection-demo',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    InjectableCardComponent
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Directive Injection Demo</mat-card-title>
        <mat-card-subtitle>Using dependency injection to access directive instances</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="demo-description">
          <p>This example demonstrates how to use Angular's dependency injection to access directive instances 
             directly within components using the <code>inject()</code> function.</p>
        </div>
        
        <app-injectable-card />
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      margin: 20px 0;
    }
    .demo-description {
      margin-bottom: 16px;
      padding: 12px;
      background-color: #f8f9fa;
      border-left: 4px solid #dc3545;
      border-radius: 4px;
    }
    .demo-description code {
      background-color: #e9ecef;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    .highlight-container {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 16px;
    }
  `]
})
export class DirectiveInjectionDemoComponent {
  
} 