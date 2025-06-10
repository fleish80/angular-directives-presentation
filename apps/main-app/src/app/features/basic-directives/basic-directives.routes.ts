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
        loadComponent: () => import('./attribute-directive/highlight-parent.component').then(m => m.HighlightParentComponent)
      },
      {
        path: 'highlight-injected',
        loadComponent: () => import('./attribute-directive/highlight-injected.component').then(m => m.HighlightInjectedComponent)
      },
      {
        path: 'structural',
        loadComponent: () => import('./structural-directive/structural-directive.component').then(m => m.StructuralDirectiveComponent)
      },
      {
        path: 'built-in',
        loadComponent: () => import('./built-in-directives/built-in-directives.component').then(m => m.BuiltInDirectivesComponent)
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