import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PermissionInjectionDirective } from './permission-injection.directive';

// Permission type for role selection
type Permission = 'admin' | 'user';

@Component({
  selector: 'app-permission-injection-demo',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardSubtitle,
    MatCardContent,
    MatSelect,
    MatOption,
    MatFormField,
    MatLabel,
    FormsModule,
    PermissionInjectionDirective
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Permission Injection Directive Demo</mat-card-title>
        <mat-card-subtitle>Show content based on role using host directive injection</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="example-section">
          <mat-form-field>
            <mat-label>Select Role</mat-label>
            <mat-select [(ngModel)]="currentRole">
              <mat-option value="admin">Admin</mat-option>
              <mat-option value="user">User</mat-option>
            </mat-select>
          </mat-form-field>

          <div class="content-block">
            <h5>Admin Only Content</h5>
           
            <div *appPermissionInjection="currentRole(); else adminElse">
              <p>This content is only visible to administrators (using PermissionInjectionDirective).</p>
            </div>
            <ng-template #adminElse>
              <p class="no-access">Access Denied: Admin privileges required</p>
            </ng-template>
          </div>
        </div>
      </mat-card-content>
    </mat-card>
  `,
  styles: [`
    .example-section {
      margin: 20px 0;
      padding: 20px;
      border: 1px solid #eee;
      border-radius: 4px;
    }
    .content-block {
      margin: 15px 0;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .no-access {
      color: #f44336;
      font-style: italic;
    }
  `]
})
export class PermissionInjectionDemoComponent {
  currentRole = signal<Permission>('user');
} 