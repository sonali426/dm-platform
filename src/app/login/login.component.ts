import { Component, OnInit, Input } from '@angular/core';
import {User} from "../user";
import {
  trigger,
  state,
  style,
  animate,
  transition,
  // ...
} from '@angular/animations';
import{ slideUpAnimation} from '../route-animations'
import { RouterOutlet } from '@angular/router';
import { isUndefined } from 'util';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  animations: [
    slideUpAnimation
  ]
})
export class LoginComponent implements OnInit {

  @Input() collapse: boolean;

  constructor()  {
    console.log(this.collapse)
  }

  ngOnInit(): void {
  }

  login(loginCredentials:any){
    console.log(loginCredentials)
  }

  collapseLoginPage(){
    debugger
    console.log(this.collapse);
    if(!this.collapse && !isUndefined(this.collapse)) this.collapse = true
    else this.collapse=false
    console.log(this.collapse);
  }

}
