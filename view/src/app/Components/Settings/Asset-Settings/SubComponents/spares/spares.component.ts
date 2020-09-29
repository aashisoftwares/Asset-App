import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelSpaersAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-spaers-asset-settings/model-spaers-asset-settings.component';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-spares',
  templateUrl: './spares.component.html',
  styleUrls: ['./spares.component.css']
})
export class SparesComponent implements OnInit {

  //For Pagination
  length: String = '0';     //set total record count here 
  pageIndex: String;  //set page number starts with zeroo
  pageSize: String;   // records per page

  displayedColumns = ['sno','spareName','spareType','created','action'];
  spareDataSource = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private dialog: MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService,
    private login: LoginService) { }

  ngOnInit(): void {
    this.getListOfSpare();
  }

  //CREATE ASSET GROUP
  dialogRef;
  CreateSpare(element,mode) {
    this.dialogRef = this.dialog.open(ModelSpaersAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'spareModel' : element,
        'Mode':mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  getListOfSpare(){
    this.Service.commonPostListMethod(this.serviceName.spare_List).subscribe(
      data =>{
        this.spareDataSource = data.Response;     
        this.dataSource=new MatTableDataSource<any>(this.spareDataSource);
        setTimeout(() => {
          this.dataSource.paginator=this.pagination;
        }, 0); 
      },error=>{
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
      );
  }

  deleteSpare(element){
    element.Spare_Type_Id=element._id;
    element.Last_Modified_By=this.login.getUserId();
    this.Service.commonDeleteMethod(this.serviceName.spare_Delete, element).subscribe(
      data => {
        if (data.Status) {
          this.toaster.successMessage(data.Message);
          this.getListOfSpare();
        } else {
          this.toaster.errorMessage(data.Message);
        }
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
    );
  }
}
