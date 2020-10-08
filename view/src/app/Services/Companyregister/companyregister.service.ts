import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
import 'rxjs/add/operator/map';
import { EnviroinmentService } from '../enviroinments/enviroinment.service';

@Injectable({
  providedIn: 'root'
})
export class CompanyregisterService {

  baseUri = this.environment.baseUrl;

  constructor(
    private http:HttpClient,
    private headers : HttpHeaders,
    private environment : EnviroinmentService
  ) { }

  validateEmail(email){
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  // registerCompany(company){
  //   let headers = new Headers();
  //   headers.append('Content-Type','application/json');
  //   return this.http.post(this.serviceUrl.baseUrl+'http://localhost:3000/api/Companyregister', company,{headers: headers})
  //     .map(res => res.json());
  // }
}
