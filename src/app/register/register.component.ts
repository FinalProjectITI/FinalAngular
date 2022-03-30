import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  sources = ['Linkedin', 'Wuzzef', 'Facebook']
  //newUser = new Register('', '', '', '', '');
  newUser = {
    Username:"",
    Email:"",
    Password:"",
    ConfirmPassword:"",
    About:""
  }

  map = new Map<string, string>();

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  doRegist(newEmail: string, newAbout: string, newUsername: string, newPass: string, newConPass: string) {
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
  }

}
