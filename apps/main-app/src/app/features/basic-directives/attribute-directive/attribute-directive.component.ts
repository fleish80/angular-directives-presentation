import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { HighlightDirective } from './highlight.directive';
import { AttributeDirectiveChildComponent } from './attribute-directive-child.component';

@Component({
  selector: 'app-attribute-directive',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    HighlightDirective,
    AttributeDirectiveChildComponent
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Attribute Directive Example</mat-card-title>
        <mat-card-subtitle>Highlight directive demonstration</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <app-attribute-directive-child appHighlight (hoverStateChange)="onHoverStateChange($event)"/>
        <app-attribute-directive-child appHighlight="pink" appHighlightTextColor="green" (hoverStateChange)="onHoverStateChange($event)"/>
      </mat-card-content>
    </mat-card>
  `
})
export class AttributeDirectiveComponent {
 
  onHoverStateChange(hovered: boolean): void {
    console.log('hovered', hovered);
  }
} 