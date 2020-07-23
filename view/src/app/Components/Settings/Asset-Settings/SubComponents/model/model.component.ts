import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelModelAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-model-asset-settings/model-model-asset-settings.component';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {

  //For Pagination
  length: String = '0';     //set total record count here 
  pageIndex: String;  //set page number starts with zeroo
  pageSize: String;   // records per page

  displayedColumns = ['sno','model','manufacturer','created','updated','action'];
  modeldataSource = new MatTableDataSource<ModelComponent>() ;

  constructor(private dialog: MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService) { }

  ngOnInit(): void {
    this.getListForModel();
  }

  getServerData(event){

  }

  //CREATE ASSET GROUP
  dialogRef;
  CreateModel(element,mode) {
    this.dialogRef = this.dialog.open(ModelModelAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'modelModel' : element,
        'Mode':mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  getListForModel(){
    this.Service.commonGetListMethod(this.serviceName.model_List).subscribe(
      data =>{
        this.modeldataSource = data;        
      },error=>{
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
      );
  }

}
