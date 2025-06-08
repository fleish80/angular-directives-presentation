import { Route } from '@angular/router';

export const ADVANCED_DIRECTIVES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./advanced-directives.component').then(m => m.AdvancedDirectivesComponent),
    children: [
      {
        path: '',
        redirectTo: 'host',
        pathMatch: 'full'
      },
      {
        path: 'host',
        loadComponent: () => import('./host-directive/host-directive.component').then(m => m.HostDirectiveComponent)
      },
      {
        path: 'content',
        loadComponent: () => import('./content-directive/content-directive.component').then(m => m.ContentDirectiveComponent)
      }
    ]
  }
]; 