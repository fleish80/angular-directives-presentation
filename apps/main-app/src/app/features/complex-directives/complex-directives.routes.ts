import { Route } from '@angular/router';

export const COMPLEX_DIRECTIVES_ROUTES: Route[] = [
  {
    path: '',
    loadComponent: () => import('./complex-directives.component').then(m => m.ComplexDirectivesComponent)
  }
]; 