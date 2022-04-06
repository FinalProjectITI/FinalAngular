import { LoginService } from './../services/AuthentactionService';
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

  constructor(private router:Router,private FB:FormBuilder,private loginserves:LoginService) { }

  LoginForm=this.FB.group({
    Email:["",[Validators.required,Validators.pattern("^[A-Za-z_]{6,}$")]],
    Password:["",[Validators.required,Validators.pattern("(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}")]]
  })
  get Email(){
    return this.LoginForm.get("Email")
  }
  get Password(){
    return this.LoginForm.get("Password")
  }
  
  ngOnInit(): void {
  }
 
    response:any
    logge:boolean=false
    Login ()
    {
      console.log("asd");
        this.loginserves.login(this.Email?.value,this.Password?.value).subscribe(data=>{
         localStorage.setItem('Alasly-Token',data.token);
         localStorage.setItem('Alasly-UserName',this.Email?.value),this.logge=true},
        error=>{
          console.log("dsfcsd"+error)
        });
      console.log(this.response);
      this.router.navigate(['home']);
      window.scrollTo(80, 80);
      if(this.logge==false)
        console.log("Error")
    }
  /*   this.loginSuccess=false;
    return false;
  } */
}
