import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
userLogin: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.userLogin = this.fb.group({
      email : ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
  });
  }
  // tslint:disable-next-line:typedef
  add(){
    console.log();
  }
  // tslint:disable-next-line:typedef
  get email(){
    return this.userLogin.get('email');
  }
  // tslint:disable-next-line:typedef
  get password(){
    return this.userLogin.get('password');
  }

}
