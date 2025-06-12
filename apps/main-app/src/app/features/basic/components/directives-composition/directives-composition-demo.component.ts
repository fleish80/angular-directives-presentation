import { Component, input, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { HighlightDirective } from '../../highlight.directive';
import { ComposableCardComponent } from './composable-card.component';

@Component({
  selector: 'app-directives-composition',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    ComposableCardComponent
  ],

  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Directive Composition Demo</mat-card-title>
        <mat-card-subtitle>Using hostDirectives to compose directives with components</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="demo-description">
          <p>This example demonstrates the <code>hostDirectives</code> feature, which allows components 
             to inherit directive behavior without explicitly importing them in the template.</p>
        </div>
        
        <div class="children-container">
          <app-composable-card (hoverStateChange)="defaultCardHovered.set($event)" />
          <app-composable-card appHighlight="lightblue" appHighlightTextColor="darkblue" (hoverStateChange)="customCardHovered.set($event)" />
        </div>

        <div class="hover-status">
          <h4>Composition State Monitoring:</h4>
          <p>Default composed card hovered: {{ defaultCardHovered() ? 'Yes' : 'No' }}</p>
          <p>Custom colored composed card hovered: {{ customCardHovered() ? 'Yes' : 'No' }}</p>
        </div>
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
      border-left: 4px solid #28a745;
      border-radius: 4px;
    }
    .demo-description code {
      background-color: #e9ecef;
      padding: 2px 4px;
      border-radius: 3px;
      font-family: 'Courier New', monospace;
    }
    .children-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 16px;
    }
    .hover-status {
      margin-top: 16px;
      padding: 12px;
      background-color: #f5f5f5;
      border-radius: 4px;
      border: 1px solid #ddd;
    }
    .hover-status h4 {
      margin: 0 0 8px 0;
      color: #333;
    }
  `]
})
export class DirectivesCompositionComponent {

  defaultCardHovered = signal<boolean>(false);
  customCardHovered = signal<boolean>(false);
} 