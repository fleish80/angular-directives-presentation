import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatCardModule,
    MatListModule
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Angular Directives Presentation</mat-card-title>
        <mat-card-subtitle>Attribute and Structural Directives</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <mat-nav-list>
          <a mat-list-item routerLink="basic" routerLinkActive="active">
            Basic Directives Features
          </a>
          <a mat-list-item routerLink="structural-directives" routerLinkActive="active">
            Structural Directives Features
          </a>
          <a mat-list-item routerLink="built-in-directives" routerLinkActive="active">
            Built-in Directives Features
          </a>
        </mat-nav-list>
        <div class="content">
          <router-outlet/>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    :host {
      display: block;
      margin: 20px;
    }
    mat-nav-list {
      margin-bottom: 20px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    .active {
      background-color: #f5f5f5;
      color: #3f51b5;
    }
    .content {
      margin-top: 20px;
    }
  `
})
export class AppComponent {
 
}
