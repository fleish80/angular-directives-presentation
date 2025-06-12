import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { HighlightDirective } from '../../highlight.directive';
import { HoverableCardComponent } from './hoverable-card.component';

@Component({
  selector: 'app-attribute-directive-demo',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    HighlightDirective,
    HoverableCardComponent
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Attribute Directive Demo</mat-card-title>
        <mat-card-subtitle>Demonstrating custom attribute directives with hover effects</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="demo-description">
          <p>This example shows how attribute directives can modify element behavior and appearance. 
             The <code>appHighlight</code> directive changes background and text colors on hover.</p>
        </div>
        
        <div class="children-container">
          <app-hoverable-card appHighlight (hoverStateChange)="defaultCardHovered.set($event)"/>
          <app-hoverable-card appHighlight="pink" appHighlightTextColor="green" (hoverStateChange)="customCardHovered.set($event)"/>
        </div>

        <div class="hover-status">
          <h4>Hover State Monitoring:</h4>
          <p>Default card hovered: {{ defaultCardHovered() ? 'Yes' : 'No' }}</p>
          <p>Custom colored card hovered: {{ customCardHovered() ? 'Yes' : 'No' }}</p>
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
      border-left: 4px solid #007bff;
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
export class AttributeDirectiveDemoComponent {
 
  defaultCardHovered = signal<boolean>(false);
  customCardHovered = signal<boolean>(false);
} 