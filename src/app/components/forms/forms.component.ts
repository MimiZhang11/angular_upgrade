import { Component } from '@angular/core';
import { FormGroup, FormControl, FormsModule } from '@angular/forms'
/* interface userModel {
  name: FormControl<string | null>,
  age: FormControl<number | null>;
} */
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent{
  public personalInfo: FormGroup; //在14之前这里都不能添加类型
  constructor() { 
    this.personalInfo = new FormGroup({
      name: new FormControl(''),
      age: new FormControl(null)
    });
  }

  public onSubmit() {
    console.log('name', this.personalInfo.value); //在value后面用点查找属性不会提示，且属性的类型为any
  }
}
