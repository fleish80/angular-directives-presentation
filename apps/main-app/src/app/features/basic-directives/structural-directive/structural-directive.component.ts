import { Component, signal } from '@angular/core';
import { MatCard, MatCardContent, MatCardHeader, MatCardSubtitle, MatCardTitle } from '@angular/material/card';
import { MatSelect, MatOption } from '@angular/material/select';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { PermissionDirective } from './permission.directive';
import { CodeExampleComponent } from './code-example.component';

type Permission = 'admin' | 'user' | 'guest';

@Component({
  selector: 'app-structural-directive',
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
    PermissionDirective,
    CodeExampleComponent
  ],
  template: `
    <mat-card>
      <mat-card-header>
        <mat-card-title>Structural Directive Example</mat-card-title>
        <mat-card-subtitle>Custom permission directive with role-based rendering</mat-card-subtitle>
      </mat-card-header>
      <mat-card-content>
        <div class="example-section">
          <h3>Permission Control</h3>
          <mat-form-field>
            <mat-label>Select User Role</mat-label>
            <mat-select [(ngModel)]="currentRole">
              <mat-option value="admin">Admin</mat-option>
              <mat-option value="user">User</mat-option>
              <mat-option value="guest">Guest</mat-option>
            </mat-select>
          </mat-form-field>

          <div class="permission-demo">
            <h4>Content Visibility Based on Role</h4>
            
            <div class="content-block">
              <h5>Admin Only Content</h5>
              @if (currentRole() === 'admin') {
                <div *appPermission="'admin'" class="admin-content">
                  <p>This content is only visible to administrators.</p>
                  <button mat-raised-button color="warn">Delete All Data</button>
                </div>
              } @else {
                <p class="no-access">Access Denied: Admin privileges required</p>
              }
            </div>

            <div class="content-block">
              <h5>User Content</h5>
              @if (currentRole() === 'user' || currentRole() === 'admin') {
                <div class="user-content">
                  <p>This content is visible to users and admins.</p>
                  <button mat-raised-button color="primary">Edit Profile</button>
                </div>
              } @else {
                <p class="no-access">Access Denied: User privileges required</p>
              }
            </div>

            <div class="content-block">
              <h5>Guest Content</h5>
              <div class="guest-content">
                <p>This content is visible to everyone.</p>
                <button mat-raised-button>View Public Info</button>
              </div>
            </div>
          </div>
        </div>

        <div class="example-section">
          <h3>Code Example</h3>
          <app-code-example></app-code-example>
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
    .permission-demo {
      margin-top: 20px;
    }
    .content-block {
      margin: 15px 0;
      padding: 15px;
      border: 1px solid #ddd;
      border-radius: 4px;
    }
    .admin-content, .user-content, .guest-content {
      padding: 10px;
      background-color: #f5f5f5;
      border-radius: 4px;
    }
    .no-access {
      color: #f44336;
      font-style: italic;
    }
  `]
})
export class StructuralDirectiveComponent {
  currentRole = signal<Permission>('guest');
} 