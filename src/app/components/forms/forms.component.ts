import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

interface userModel {
  name: FormControl<string | null>,
  age: FormControl<number | null>;
}

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})

export class FormsComponent{
  public personalInfo: FormGroup<userModel>; //在14之前这里都不能添加类型
  constructor() { 
    // 升级到14之后，FormControl 自动更新为 UntypedFormControl，
    // FormGroup 自动更新为 UntypedFormGroup
    this.personalInfo = new FormGroup<userModel>({
      name: new FormControl<string | null>(''), 
      age: new FormControl<number | null>(null)
    });
  }

  public onSubmit() {
    console.log('name', this.personalInfo.value.name); //14之前在value后面用点查找属性不会提示，且属性的类型为any
  }
}
