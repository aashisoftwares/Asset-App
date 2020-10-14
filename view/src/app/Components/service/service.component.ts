import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ModelServiceComponent } from "../../models/Service/model-service/model-service.component";
import { ServiceModuleService } from "../../Services/Service/service-module.service";
import { LoginService } from "../../Services/Login/login.service";
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

export class promo {
  _id: String;
  Req_By: String;
  Req_Ref: String;
  Req_Num: String;
  Reported_On: String;
  Problem_Description: String;
  priority: String;
  Req_Status: String;
  Asset_ID: String;
  Created_By: String;
}
@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent implements OnInit {
  dialogRef: any;
  isLoading = true;

  ServiceData: any = [];
  dataSource: MatTableDataSource<promo>;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort, {}) sort: MatSort;
  displayedColumns: string[] = ['_id','Req_Ref','Req_By','Req_Num','Reported_On','Problem_Description','priority','Req_Status','Asset_ID','Created_By'];



  constructor(
    private dialog: MatDialog,
    private service : ServiceModuleService,
    private loginService : LoginService
  ) {
    this.getService();
   }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  CreateService(){
    this.dialogRef = this.dialog.open(ModelServiceComponent, {height: 'auto',width: '500px'});
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
        if(data) {
          this.service.CreateService(data.value)
          .subscribe (data =>
            {
              if(data.Status){
            console.log ('data added successfully')
            // this._snackBar.open('Promo Code Created Successfully.', 'close',{duration: 2000,horizontalPosition: this.horizontalPosition,verticalPosition: this.verticalPosition,});
            // this.getPromo();
            }else {
              console.log ('data not added successfully')
              // this._snackBar.open('Error in Creating Promo Code.', 'close',{duration: 2000,horizontalPosition: this.horizontalPosition,verticalPosition: this.verticalPosition,});
            }
          })
          // this.Uploading = false;
        }  
      });
  };


  // Service List
getService(){
  const Info = {'Company_Id':this.loginService.getcompanyId()};
  of(this.dataSource).pipe(delay(1000))
  this.service.Promo_List(Info).subscribe(data => {   
    const ResponseData = data;
      this.ServiceData = ResponseData['Response'];
      this.isLoading = false;
      this.dataSource = new MatTableDataSource<promo>(this.ServiceData);
      this.dataSource.sort = this.sort;
      setTimeout(() => {
        this.dataSource.paginator = this.paginator;
      }, 0);
  });
}

}
