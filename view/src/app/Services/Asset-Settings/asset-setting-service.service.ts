import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { LoginService } from '../Login/login.service';
import { ServiceNames } from '../serviceNames';

@Injectable({
  providedIn: 'root'
})
export class AssetSettingServiceService {

  baseUri:string = 'http://localhost:3000/api';
  headers = new HttpHeaders().set('Content-Type', 'application/json').set('Access','application/json');

  constructor(private http: HttpClient,
              private loginService: LoginService,
              private serviceName: ServiceNames) {}

  commonCreateMethod(serviceName:string,data): Observable<any> {
    let url= this.serviceName.baseUrl+ serviceName;
    return this.http.post(url, data);
    catchError(this.handleError) ;
  }  

  commonGetListMethod(serviceName:string): Observable<any>{
    let url = this.serviceName.baseUrl+ serviceName;
    return this.http.get(url);
  }

  commonPostListMethod(serviceName:string): Observable<any>{
    let url = this.serviceName.baseUrl+ serviceName;    
    let data={"Company_Id":this.loginService.getcompanyId()}
    return this.http.post(url,data,{headers:this.headers});
    catchError(this.handleError);
  }

  commonPostListMethodTest(serviceName:string,data): Observable<any>{
    let url = this.serviceName.baseUrl+ serviceName;    
    let httpOption = {withcredentials:true}
    return this.http.post(url,data,{headers:this.headers});
    catchError(this.handleError);
  }

  //Error Handling 
  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }



}
