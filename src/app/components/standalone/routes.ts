import { Routes } from '@angular/router';
import { ChildComponent } from '../child/child.component';
import { StandaloneComponent } from './standalone.component';

export const StandaloneRoutes: Routes = [
  {
    path: '',
    component: StandaloneComponent,
  },
  {
    path: 'child',
    component: ChildComponent,
  },
];
