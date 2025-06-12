import { Route } from '@angular/router';

export const STRUCTURAL_DIRECTIVES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./structural-directives-navigation.component').then(m => m.StructuralDirectivesNavigationComponent),
    children: [
      {
        path: '',
        redirectTo: 'permission-structural-injection',
        pathMatch: 'full'
      },
    
      {
        path: 'permission-injection',
        loadComponent: () => import('./permission-injection/permission-injection-demo.component').then(m => m.PermissionInjectionDemoComponent)
      },
      {
        path: '',
        loadComponent: () => import('./permission-structural-injection/permission-structural-injection-demo.component').then(m => m.PermissionStructuralInjectionDemoComponent)
      }
    ]
  }
]; 