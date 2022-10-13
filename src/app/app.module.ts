import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { StandaloneComponent } from './components/standalone/standalone.component';
import { FormsComponent } from './components/forms/forms.component';
import { InjectComponent } from './components/inject/inject.component';
import { ChildComponent } from './components/child/child.component';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    StandaloneComponent,
    FormsComponent,
    InjectComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
