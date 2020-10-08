import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { HttpHeaders, HttpErrorResponse } from "@angular/common/http";
import { Observable, of, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { EnviroinmentService } from '../enviroinments/enviroinment.service';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  baseUri = this.environment.baseUrl;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(
    private http: HttpClient,
    private environment : EnviroinmentService
  ) { }

  //Create Asset
  CreateAssets(data): Observable<any> {
    let url = `${this.baseUri}asset/Asset_Create`;
    return this.http.post(url, data)
    catchError(this.handleError) 
  }

  // Asset Simple List
  Asset_Simple_List(Info: any): Observable<any[]> {
    let url = `${this.baseUri}/assetl/Asset_List`;
      return this.http.post(url, Info)
      .pipe( map(response => response),  
      catchError(error => of(error)));
  }

   //Menu View
   Asset_View(Info:any): Observable<any[]> {
    let url = `${this.baseUri}/assetv/Asset_View`;
      return this.http.post(url, Info)
      .pipe( map(response => response),  
      catchError(error => of(error)));
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
