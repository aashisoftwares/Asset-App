import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelVendorsAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-vendors-asset-settings/model-vendors-asset-settings.component';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  //For Pagination
  length: String = '0';     //set total record count here 
  pageIndex: String;  //set page number starts with zeroo
  pageSize: String;   // records per page

  displayedColumns = ['sno','vendorName','email','phoneNo','created','action'];
  vendorDataSource = []
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private dialog:MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService,
    private login: LoginService) { }

  ngOnInit(): void {
    this.getListOfVendor();
  }

  dialogRef;
  CreateVendor(element,mode){
    this.dialogRef = this.dialog.open(ModelVendorsAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'vendorModel' : element,
        'Mode':mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  getListOfVendor(){
    this.Service.commonPostListMethod(this.serviceName.vendor_List).subscribe(
      data =>{
        this.vendorDataSource = data.Response;     
        this.dataSource=new MatTableDataSource<any>(this.vendorDataSource);
        setTimeout(() => {
          this.dataSource.paginator=this.pagination;
        }, 0); 
      },error=>{
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
      );
  }

  deleteVendor(element){
    element.Vendor_Name_Id=element._id;
    element.Last_Modified_By=this.login.getUserId();
    this.Service.commonDeleteMethod(this.serviceName.vendor_Delete, element).subscribe(
      data => {
        if (data.Status) {
          this.toaster.successMessage(data.Message);
          this.getListOfVendor();
        } else {
          this.toaster.errorMessage(data.Message);
        }
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
    );
  }
}
