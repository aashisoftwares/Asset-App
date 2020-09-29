import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { LoginService } from 'src/app/Services/Login/login.service';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { RouterModule, Router } from '@angular/router';
// import { Router } from '@angular/router';
// import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm : FormGroup;

  constructor(private login: LoginService,
              private toaster: ToastrServiceService,
              private router: Router) { }

  ngOnInit(): void {
    this.LoginForm = new FormGroup ({
      User_Name: new FormControl ('', [Validators.required]),
      User_Password: new FormControl('', [Validators.required])
    });
  }

 submit() {
   console.log("submit");
   
   this.login.authenticationService(this.LoginForm.value).subscribe(data =>{
     if(data['Output']){
       this.toaster.successMessage("Login Successufully");
       let userInfoData:any=data['Response'];
       localStorage.setItem('UserInfo',JSON.stringify(userInfoData));
       this.router.navigate(['/dashboard']);
     }else{
       this.toaster.errorMessage(data['Message']);
     }
   });
 }

 submit1(){
  this.router.navigate(['/dashboard']);
 }
  
}
