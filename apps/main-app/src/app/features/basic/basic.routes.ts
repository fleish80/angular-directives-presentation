import { Route } from '@angular/router';

export const BASIC_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./basic-navigation.component').then(m => m.BasicNavigationComponent),
    children: [
      {
        path: '',
        redirectTo: 'attribute',
        pathMatch: 'full'
      },
      {
        path: 'attribute',
        loadComponent: () => import('./components/attribute/attribute-directive-demo.component').then(m => m.AttributeDirectiveDemoComponent)
      },
      {
        path: 'directives-composition',
        loadComponent: () => import('./components/directives-composition/directives-composition-demo.component').then(m => m.DirectivesCompositionComponent)
      },
      {
        path: 'directives-composition-inject',
        loadComponent: () => import('./components/directives-composition-inject/directive-injection-demo.component').then(m => m.DirectiveInjectionDemoComponent)
      }
    ]
  }
]; 