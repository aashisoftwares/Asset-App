import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelSpaersAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-spaers-asset-settings/model-spaers-asset-settings.component';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';

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

  displayedColumns = ['sno','spareName','spareType','created','updated','action'];
  spareDataSource = new MatTableDataSource<SparesComponent>() ;

  constructor(private dialog: MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService) { }

  ngOnInit(): void {
    this.getListOfSpare();
  }

  getServerData(event){

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
    this.Service.commonGetListMethod(this.serviceName.spare_List).subscribe(
      data =>{
        this.spareDataSource = data; 
        console.log(data);       
      },error=>{
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
      );
  }

}
