import { Route } from '@angular/router';

export const BUILT_IN_DIRECTIVES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./built-in-directives.component').then(m => m.BuiltInDirectivesComponent)
  }
]; 