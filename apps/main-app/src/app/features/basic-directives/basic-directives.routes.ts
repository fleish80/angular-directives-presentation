import { Route } from '@angular/router';

export const BASIC_DIRECTIVES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./basic-directives.component').then(m => m.BasicDirectivesComponent),
    children: [
      {
        path: '',
        redirectTo: 'attribute',
        pathMatch: 'full'
      },
      {
        path: 'attribute',
        loadComponent: () => import('./attribute-directive/attribute-directive.component').then(m => m.AttributeDirectiveComponent)
      },
      {
        path: 'highlight-composition',
        loadComponent: () => import('../basic/components/directives-composition/highlight-parent.component').then(m => m.HighlightParentComponent)
      },
      {
        path: 'highlight-injected',
        loadComponent: () => import('../basic/components/directives-composition-inject/highlight-injected.component').then(m => m.HighlightInjectedComponent)
      },
      {
        path: 'structural',
        loadComponent: () => import('./structural-directive/structural-directive.component').then(m => m.StructuralDirectiveComponent)
      },
      {
        path: 'permission-inject',
        loadComponent: () => import('./structural-directive/permission-inject-demo.component').then(m => m.PermissionInjectDemoComponent)
      },
      {
        path: 'permission-inject-structural',
        loadComponent: () => import('./structural-directive/permission-inject-structural-demo.component').then(m => m.PermissionInjectStructuralDemoComponent)
      }
    ]
  }
]; 