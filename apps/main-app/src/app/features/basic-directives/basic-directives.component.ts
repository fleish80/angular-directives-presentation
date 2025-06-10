import { Component } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { MatCard } from '@angular/material/card';
import { MatCardHeader } from '@angular/material/card';
import { MatCardTitle } from '@angular/material/card';
import { MatCardSubtitle } from '@angular/material/card';
import { MatCardContent } from '@angular/material/card';
import { MatNavList } from '@angular/material/list';
import { MatListItem } from '@angular/material/list';

@Component({
  selector: 'app-basic-directives',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    RouterLinkActive,
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatNavList,
    MatListItem
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Basic Directives</mat-card-title>
        <mat-card-subtitle>Attribute and Structural Directives</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <mat-nav-list>
          <a mat-list-item routerLink="attribute" routerLinkActive="active">
            Attribute Directive
          </a>
          <a mat-list-item routerLink="highlight-composition" routerLinkActive="active">
            Highlight Composition
          </a>
          <a mat-list-item routerLink="highlight-injected" routerLinkActive="active">
            Highlight Injected
          </a>
          <a mat-list-item routerLink="structural" routerLinkActive="active">
            Structural Directive
          </a>
          <a mat-list-item routerLink="built-in" routerLinkActive="active">
            Built-in Directives
          </a>
          <a mat-list-item routerLink="permission-inject" routerLinkActive="active">
            Permission Inject Demo
          </a>
          <a mat-list-item routerLink="permission-inject-structural" routerLinkActive="active">
            Permission Inject Structural Demo
          </a>
        </mat-nav-list>
        <div class="content">
          <router-outlet></router-outlet>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
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
  `]
})
export class BasicDirectivesComponent {} 