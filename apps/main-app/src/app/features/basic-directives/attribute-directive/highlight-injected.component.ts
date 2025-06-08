import { Component, inject, input, output, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { HighlightDirective } from './highlight.directive';
import { HighlightInjectedChildComponent } from './highlight-injected-child.component';

@Component({
  selector: 'app-highlight-injected',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    HighlightInjectedChildComponent
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Highlight Injected Component</mat-card-title>
        <mat-card-subtitle>Using directive injection for highlighting</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <app-highlight-injected-child />
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    :host {
      display: block;
      margin: 20px 0;
    }
    .highlight-container {
      padding: 16px;
      border: 1px solid #ccc;
      border-radius: 4px;
      margin-top: 16px;
    }
  `]
})
export class HighlightInjectedComponent {
  
} 