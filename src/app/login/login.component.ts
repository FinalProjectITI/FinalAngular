import { FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginSuccess:boolean = true;

  constructor(private router:Router,private FB:FormBuilder) { }

  LoginForm=this.FB.group({
    Email:["",[Validators.required,Validators.email,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]],
    Password:["",[Validators.required,Validators.pattern("^[A-Za-z0-9_@]{6,}$")]]
  })
  get Email(){
    return this.LoginForm.get("Email")
  }
  get Password(){
    return this.LoginForm.get("Password")
  }
  
  ngOnInit(): void {
  }
  Login():boolean{
    if(this.Email?.value=="bbeshoymikhail@gmail.com"&&this.Password?.value=="2339242")
    {
      this.LoginForm.patchValue({
        Email:"",
        Password:""
      })
      this.loginSuccess=true;
      this.router.navigateByUrl('/home')
    }
    this.loginSuccess=false;
    return false;
  }
}
