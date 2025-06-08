import { Component, input, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { HighlightDirective } from './highlight.directive';
import { HighlightChildComponent } from './highlight-child.component';

@Component({
  selector: 'app-highlight-parent',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    HighlightChildComponent
  ],

  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Highlight Parent Component</mat-card-title>
        <mat-card-subtitle>Using directive composition with child components</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="children-container">
          <app-highlight-child (hoverStateChange)="child1Hovered.set($event)" />
          <app-highlight-child appHighlight="lightblue" appHighlightTextColor="darkblue" (hoverStateChange)="child2Hovered.set($event)" />
        </div>

        <div class="hover-status">
          <p>Child 1 hovered: {{ child1Hovered() ? 'Yes' : 'No' }}</p>
          <p>Child 2 hovered: {{ child2Hovered() ? 'Yes' : 'No' }}</p>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      margin: 20px 0;
    }
    .children-container {
      display: flex;
      flex-direction: column;
      gap: 16px;
      margin-top: 16px;
    }
    .hover-status {
      margin-top: 16px;
      padding: 8px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
  `]
})
export class HighlightParentComponent {

  child1Hovered = signal<boolean>(false);
  child2Hovered = signal<boolean>(false);
} 