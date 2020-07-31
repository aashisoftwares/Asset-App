import { Component, OnInit, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModelAssetsubgroupAssetSettingsComponent } from "../../../../../models/settings/Asset-Settings/model-assetsubgroup-asset-settings/model-assetsubgroup-asset-settings.component";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-asset-sub-group',
  templateUrl: './asset-sub-group.component.html',
  styleUrls: ['./asset-sub-group.component.css']
})
export class AssetSubGroupComponent implements OnInit {
  
  bsModalRef: BsModalRef;
  //For Pagination
  length: String = '0';     //set total record count here 
  pageIndex: String;  //set page number starts with zeroo
  pageSize: String;   // records per page

  displayedColumns = ['sno','subGroup','assetGroup','created','action'];
  assetSubGroupdataSource = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;
  
  constructor(private modalService: BsModalService,
              private dialog: MatDialog,
              private Service: AssetSettingServiceService,
              private serviceName: ServiceNames,
              private error: ConstantFile,
              private toaster: ToastrServiceService) { }

  ngOnInit(): void {
    this.getListOfAssetSubGroup();
  }

  //CREATE ASSET GROUP
  dialogRef;
  createSubGroup(element,mode) {
    this.dialogRef = this.dialog.open(ModelAssetsubgroupAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'SubGroupModel' : element,
        'Mode': mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  getListOfAssetSubGroup(){
    this.Service.commonPostListMethod(this.serviceName.asset_subGroup_List).subscribe(
      data =>{
        this.assetSubGroupdataSource = data.Response;
        this.dataSource=new MatTableDataSource<any>(this.assetSubGroupdataSource);
        setTimeout(() => {
          this.dataSource.paginator=this.pagination;
        }, 0);
      },error=>{    
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
      )
    }

}
