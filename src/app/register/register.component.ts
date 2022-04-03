import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sources = ['Linkedin', 'Wuzzef', 'Facebook']
  constructor(private router:Router,private FB:FormBuilder) { }
  
  RegisterForm=this.FB.group({
    UserName:["",[Validators.required,Validators.pattern("^[A-Za-z_]{6,}$")]],
    Email:["",[Validators.required,Validators.email,Validators.pattern("[a-z0-9]+@[a-z]+\.[a-z]{2,3}")]],
    Password:["",[Validators.required,Validators.pattern("^[A-Za-z0-9_@]{6,}$")]],
    ConfirmPassword:["",[Validators.required,Validators.pattern("^[A-Za-z0-9_@]{6,}$")]],
    About:["",Validators.required]
  },{validator:[validateConfirmPassword]})
  get UserName(){
      return this.RegisterForm.get("UserName")
  }
  get Email(){
    return this.RegisterForm.get("Email")
  }

  get Password(){
    return this.RegisterForm.get("Password")
  }

  get ConfirmPassword(){
    return this.RegisterForm.get("ConfirmPassword")
  }
  get About(){
    return this.RegisterForm.get("About")
  }

  ngOnInit(): void {
  }
 
  /* doRegist(newEmail: string, newAbout: string, newUsername: string, newPass: string, newConPass: string) {
    this.map.set("email", newEmail);
    this.map.set("about", newAbout);
    this.map.set("username", newUsername);
    this.map.set("password", newPass);
    this.map.set("confirmPassword", newConPass);
    console.log(this.map.get("username"));
    let newuser = this.map.get("username");
    console.log(this.map.get("password"));
    let newpass = this.map.get("password");
    // this.registService.setRegistData(newUsername,newPass);
    this.router.navigate(['/login']);
  } */
  //newUser = new Register('', '', '', '', '');
  /*  newUser = {
    Username:"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
    About:""
  } */
  
  /* map = new Map<string, string>();
  */

}
export function validateConfirmPassword(control:AbstractControl){
  const Password=control.get("Password")
  const ConfirmPassword=control.get("ConfirmPassword")
  console.log("In confirmed Password"+Password?.value)
  return Password&&ConfirmPassword&&Password.value != ConfirmPassword.value?{"Miss_match":true}:null;
}
