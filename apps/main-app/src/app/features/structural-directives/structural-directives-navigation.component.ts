import { Component, computed, inject } from '@angular/core';
import { Router, ActivatedRoute, RouterOutlet } from '@angular/router';
import { MatTabGroup, MatTab } from '@angular/material/tabs';
import { CommonModule } from '@angular/common';

const TAB_ROUTES = [
  { label: 'Structural Permission Injection', path: 'permission-structural-injection' },
  { label: 'Permission with Injection', path: 'permission-injection' },
];

@Component({
  selector: 'app-structural-directives-navigation',
  standalone: true,
  imports: [CommonModule, RouterOutlet, MatTabGroup, MatTab],
  template: `
    <div class="container mx-auto p-6">
      <h1 class="text-3xl font-bold mb-6 text-gray-800">
        Structural Directives
      </h1>
      <mat-tab-group [selectedIndex]="selectedIndex()" (selectedIndexChange)="onTabChange($event)">
        @for (tab of tabs; track tab.path) {
          <mat-tab [label]="tab.label"></mat-tab>
        }
      </mat-tab-group>
      <div class="p-4">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`
    :host { display: block; }
  `]
})
export class StructuralDirectivesNavigationComponent {
  private router = inject(Router);
  private route = inject(ActivatedRoute);

  tabs = TAB_ROUTES;

  selectedIndex = computed(() => {
    const child = this.route.firstChild;
    if (!child) return 0;
    const path = child.snapshot.url[0]?.path;
    const idx = this.tabs.findIndex(tab => tab.path === path);
    return idx === -1 ? 0 : idx;
  });

  onTabChange(index: number) {
    this.router.navigate([this.tabs[index].path], { relativeTo: this.route });
  }
} 