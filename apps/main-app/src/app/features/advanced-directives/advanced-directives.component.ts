import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MatCard, MatCardContent, MatCardHeader, MatCardTitle, MatCardSubtitle } from '@angular/material/card';

@Component({
  selector: 'app-advanced-directives',
  standalone: true,
  imports: [
    RouterOutlet,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Advanced Directives</mat-card-title>
        <mat-card-subtitle>Directive Composition and Host Bindings</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <router-outlet></router-outlet>
      </mat-card-content>
    </mat-card>
  `
})
export class AdvancedDirectivesComponent {} 