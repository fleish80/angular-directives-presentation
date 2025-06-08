import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'basic-directives',
    loadChildren: () =>
      import('./features/basic-directives/basic-directives.routes').then(
        (m) => m.BASIC_DIRECTIVES_ROUTES
      ),
  },
  {
    path: 'advanced-directives',
    loadChildren: () =>
      import('./features/advanced-directives/advanced-directives.routes').then(
        (m) => m.ADVANCED_DIRECTIVES_ROUTES
      ),
  },
  {
    path: 'complex-directives',
    loadChildren: () =>
      import('./features/complex-directives/complex-directives.routes').then(
        (m) => m.COMPLEX_DIRECTIVES_ROUTES
      ),
  },
];
