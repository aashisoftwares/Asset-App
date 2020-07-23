import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelManufacturerAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-manufacturer-asset-settings/model-manufacturer-asset-settings.component';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';

@Component({
  selector: 'app-manufacturer',
  templateUrl: './manufacturer.component.html',
  styleUrls: ['./manufacturer.component.css']
})
export class ManufacturerComponent implements OnInit {

  //For Pagination
  length: String = '0';     //set total record count here 
  pageIndex: String;  //set page number starts with zeroo
  pageSize: String;   // records per page

  displayedColumns = ['sno','manufacturer','assetGroup','created','updated','action'];
  manufacturerdataSource = new MatTableDataSource<ManufacturerComponent>() ;

  constructor(private dialog: MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService) { }

  ngOnInit(): void {
    this.getListOfManufacturerList();
  }

  getServerData(event){

  }

  //CREATE ASSET GROUP
  dialogRef;
  CreateManufacturer(element,mode) {
    this.dialogRef = this.dialog.open(ModelManufacturerAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'manufacturerModel' : element,
        'Mode':mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  getListOfManufacturerList(){
    this.Service.commonGetListMethod(this.serviceName.manufacturer_List).subscribe(
      data =>{
        this.manufacturerdataSource = data;       
      },error=>{
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
      )
  }
}
