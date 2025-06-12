import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';

@Component({
  selector: 'app-basic-navigation',
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
        <mat-card-title>Angular Directives Fundamentals</mat-card-title>
        <mat-card-subtitle>Interactive demonstrations of core directive concepts</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="intro-text">
          <p>Explore different patterns for working with Angular directives. Each demo showcases a specific 
             technique for creating reusable, interactive components.</p>
        </div>
        
        <mat-nav-list>
          <a mat-list-item routerLink="attribute" routerLinkActive="active">
            <div class="nav-item">
              <h4>Attribute Directives</h4>
              <p>Basic attribute directive with hover effects and event handling</p>
            </div>
          </a>
          <a mat-list-item routerLink="directives-composition" routerLinkActive="active">
            <div class="nav-item">
              <h4>Directive Composition</h4>
              <p>Using hostDirectives to compose behavior at the component level</p>
            </div>
          </a>
          <a mat-list-item routerLink="directives-composition-inject" routerLinkActive="active">
            <div class="nav-item">
              <h4>Directive Injection</h4>
              <p>Accessing directive instances via dependency injection</p>
            </div>
          </a>
        </mat-nav-list>
        
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: `
    :host {
      display: block;
      margin: 20px;
    }
    .intro-text {
      margin-bottom: 20px;
      padding: 16px;
      background-color: #f8f9fa;
      border-radius: 8px;
      border-left: 4px solid #007bff;
    }
    .intro-text p {
      margin: 0;
      color: #495057;
      line-height: 1.5;
    }
    mat-nav-list {
      margin-bottom: 20px;
      border: 1px solid #eee;
      border-radius: 8px;
      overflow: hidden;
    }
    .nav-item {
      padding: 8px 0;
    }
    .nav-item h4 {
      margin: 0 0 4px 0;
      color: #333;
      font-size: 16px;
    }
    .nav-item p {
      margin: 0;
      color: #666;
      font-size: 14px;
      line-height: 1.3;
    }
    .active {
      background-color: #e3f2fd;
      color: #1976d2;
    }
    .active .nav-item h4 {
      color: #1976d2;
    }
    .content {
      margin-top: 20px;
    }
  `
})
export class BasicNavigationComponent {
} 