import { Injectable } from '@angular/core';
import { ToastrModule, ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ToastrServiceService {

  constructor(private toasterSer: ToastrService) { }

 successMessage(msg){
    this.toasterSer.success(msg);
  }

 errorMessage(msg){ 
    this.toasterSer.error(msg);
 }

 warningMessage(msg){
    this.toasterSer.warning(msg);
 }

}
