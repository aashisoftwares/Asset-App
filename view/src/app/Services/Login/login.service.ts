import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServiceNames } from '../serviceNames';
import { EnviroinmentService } from '../enviroinments/enviroinment.service';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  baseUri = this.environment.baseUrl;

  constructor(private http: HttpClient,
              private serviceUrl: ServiceNames,
              private environment : EnviroinmentService ) { }

  authenticationService(model){
    return this.http.post(this.serviceUrl.baseUrl+'userlgn/User_Login',model);
  }

  getcompanyId(){
    let userInfo = JSON.parse(localStorage.getItem('UserInfo'));
    return userInfo.Company_Id;
  }

  getUserId(){
    let userInfo = JSON.parse(localStorage.getItem('UserInfo'));
    return userInfo._id;
  }
}
