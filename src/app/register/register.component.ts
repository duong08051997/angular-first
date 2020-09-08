import { Component, OnInit } from '@angular/core';
import {User} from '../../../../demo-angular/demo-font-size/src/app/user';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  users: User[] = [];
  registerUser: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.registerUser = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern('[0-9]{11}')]],
      password: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    }, {validators: this.comparePassword})
  ;
  }
    // tslint:disable-next-line:typedef
    comparePassword(group: FormGroup){
      let pass: string;
      pass = group.get('password').value;
      let confirmPass: string;
      confirmPass = group.get('confirmPassword').value;
      return(pass === confirmPass) ? null : {notSam: true};
    }
    // tslint:disable-next-line:typedef
    add(){
      this.users.push(this.registerUser.value);
      console.log(this.users);
    }
// tslint:disable-next-line:typedef no-unused-expression
    get name(){
      return this.registerUser.get('name');
    }
// tslint:disable-next-line:typedef
    get phone(){
      return this.registerUser.get('phone');
    }
// tslint:disable-next-line:typedef
    get email(){
      return this.registerUser.get('email');
    }
// tslint:disable-next-line:typedef
    get password(){
      return this.registerUser.get('password');
    }
    // tslint:disable-next-line:typedef
    get confirmPassword(){
      return this.registerUser.get('confirmPassword');
    }


}
