import { InjectionToken, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { InjectComponent } from './components/inject/inject.component';

const routes: Routes =  [
  //{path: 'standaloneComponent', loadChildren: () => import('./components/standalone/routes').then(mod => mod.StandaloneRoutes)},
  //惰性加载独立组件
  {path: 'standaloneComponent', loadChildren: () => import('./components/standalone/routes').then(mod => mod.StandaloneRoutes)},
  {path: 'inject',  component: InjectComponent},
  {path: 'forms',  component: FormsComponent},
  {path: '', redirectTo: '/standaloneComponent', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
