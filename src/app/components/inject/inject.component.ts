import { Component, inject } from '@angular/core';
import { UserService } from 'src/app/services/user';

@Component({
  selector: 'app-inject',
  templateUrl: './inject.component.html',
  styleUrls: ['./inject.component.css']
})
export class InjectComponent{
  userServe = inject(UserService);
  constructor() {
    console.log(this.userServe.username());
   }

}
