import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'basic',
    pathMatch: 'full'
  },
  {
    path: 'basic',
    loadChildren: () =>
      import('./features/basic/basic.routes').then(
        (m) => m.BASIC_ROUTES
      ),
  },
  {
    path: 'structural-directives',
    loadChildren: () =>
      import('./features/structural-directives/structural-directives.routes').then(
        (m) => m.STRUCTURAL_DIRECTIVES_ROUTES
      ),
  },
  {
    path: 'built-in-directives',
    loadChildren: () =>
      import('./features/built-in-directives/built-in-directives.routes').then(
        (m) => m.BUILT_IN_DIRECTIVES_ROUTES
      ),
  },
];
