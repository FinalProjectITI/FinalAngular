import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import { userReg } from '../Shared Classes/IuseeReg';


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

  constructor(private http: HttpClient,private router:Router,private Logserv: LoginService) { }
    
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
    this.Logserv.register(newUsername,newEmail,newpass!)
    // this.registService.setRegistData(newUsername,newPass);
    this.router.navigate(['/login']);
  }

}
