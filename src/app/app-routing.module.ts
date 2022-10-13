import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsComponent } from './components/forms/forms.component';
import { InjectComponent } from './components/inject/inject.component';
import { StandaloneComponent } from './components/standalone/standalone.component';

const routes: Routes =  [
  {path: 'standaloneComponent',  component: StandaloneComponent},
  {path: 'inject',  component: InjectComponent},
  {path: 'forms',  component: FormsComponent},
  {path: '', redirectTo: '/standaloneComponent', pathMatch: 'full' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
