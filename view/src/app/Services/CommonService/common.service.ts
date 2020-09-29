import { Injectable } from '@angular/core';

@Injectable()
export class CommonService{

    convertToDateStringdd_mm_yyyy(str) {
        if (typeof str == undefined || typeof str == 'undefined') {
          return "";
        } else {
          if ((typeof str != 'undefined')) {
            var date = new Date(str),
              mnth = ("0" + (date.getMonth() + 1)).slice(-2),
              day = ("0" + date.getDate()).slice(-2);
            return [day, mnth, date.getFullYear()].join("-");
          }
        }
        return "";
      }
      
}