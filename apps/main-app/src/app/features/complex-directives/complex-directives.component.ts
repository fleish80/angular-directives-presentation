import { Component } from '@angular/core';
import { MatCard, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';

@Component({
  selector: 'app-complex-directives',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Complex Directives</mat-card-title>
        <mat-card-subtitle>Advanced directive examples</mat-card-subtitle>
      </mat-card-header>
    </mat-card>
  `
})
export class ComplexDirectivesComponent {} 