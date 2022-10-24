import { DOCUMENT } from "@angular/common";
import { NgModule } from "@angular/core";
import { InjectComponent } from "./inject.component";

@NgModule({
  declarations: [
    InjectComponent
  ],
  imports: [
  ],
  //之前依赖注入, 现在这两步可被Inject() 方法代替
  providers: [
    {
      provide: 'abc',
      //第二步 
      useFactory(doc: Document) {

      }, 
      deps: [DOCUMENT] //第一步
    } 
  ]
})
export class InjectModule { }
