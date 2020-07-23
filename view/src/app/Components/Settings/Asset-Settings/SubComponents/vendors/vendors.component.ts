import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelVendorsAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-vendors-asset-settings/model-vendors-asset-settings.component';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';

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

  displayedColumns = ['sno','vendorName','email','phoneNo','created','updated','action'];
  vendorDataSource = new MatTableDataSource<VendorsComponent>() ;

  constructor(private dialog:MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService) { }

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

  getServerData(event){

  }

  getListOfVendor(){
    this.Service.commonGetListMethod(this.serviceName.vendor_List).subscribe(
      data =>{
        this.vendorDataSource = data;  
        console.log(data);      
      },error=>{
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
      );
  }

}
