import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormControl } from '@angular/forms';
// import { Router } from '@angular/router';
// import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  LoginForm = new FormGroup ({
    User_Name: new FormControl ('', [Validators.required]),
    User_Password: new FormControl('', [Validators.required])
  });

  constructor(  ) { }

  ngOnInit(): void {
  }
 submit() {
   alert ('Form Submited');
 }
  
}
