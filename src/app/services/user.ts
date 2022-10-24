import {inject, Injectable} from "@angular/core";
import {WINDOW} from "./window.token";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  win = inject(WINDOW);
  username() {
    return '张三';
  }
}
