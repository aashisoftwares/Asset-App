import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModelAssetgroupAssetSettingsComponent } from "../../../../../models/settings/Asset-Settings/model-assetgroup-asset-settings/model-assetgroup-asset-settings.component";
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ToastrService } from 'ngx-toastr';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { MatPaginator } from '@angular/material/paginator';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-asset-group',
  templateUrl: './asset-group.component.html',
  styleUrls: ['./asset-group.component.css']
})
export class AssetGroupComponent implements OnInit {

  bsModalRef: BsModalRef;
  _Create: Boolean = false;
  _View: Boolean = false;
  _Edit: Boolean = false;
  _Delete: Boolean = false;

  Loader: Boolean = true;
  _List: any[] = [];

  //For Pagination
  length: String = '0';     //set total record count here 
  pageIndex: String;  //set page number starts with zeroo
  pageSize: String;   // records per page

  displayedColumns = ['sno', 'assetGroup', 'created', 'action'];
  assetGroupdataSource = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  //SEARCH
  searchKey: string='';

  constructor(private modalService: BsModalService,
    private dialog: MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService,
    private login: LoginService) { }

  ngOnInit(): void {
    this.getListOfAssetGroup();
  }

  //CREATE ASSET GROUP
  dialogRef;
  CreateAssetGroup(element, mode) {
    this.dialogRef = this.dialog.open(ModelAssetgroupAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'AssetGroupModel': element,
        'Mode': mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
        this.ngOnInit();
      });
  }

  getListOfAssetGroup() {
    this.Service.commonPostListMethod(this.serviceName.asset_Group_List).subscribe(
      data => {
        this.assetGroupdataSource = data.Response;
        this.dataSource = new MatTableDataSource<any>(this.assetGroupdataSource);
        setTimeout(() => {
          this.dataSource.paginator = this.pagination;
        }, 0);
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR)
      }
    );
  }

  deleteAssetGroup(element) {
    element.Asset_Group_Id = element._id;
    element.Last_Modified_By = this.login.getUserId();    
    this.Service.commonDeleteMethod(this.serviceName.asset_Group_Delete, element).subscribe(
      data => {
        if (data.Status) {
          this.toaster.successMessage(data.Message);
          this.getListOfAssetGroup();
        } else {
          this.toaster.errorMessage(data.Message);
        }
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
    );
  }

  // search(){
  //   this.assetGroupdataSource = this.assetGroupdataSource.filter(x=>this.searchKey.toUpperCase()==x.Asset_Group.toUpperCase())
  //   this.dataSource = new MatTableDataSource<any>(this.assetGroupdataSource);
  //       setTimeout(() => {
  //         this.dataSource.paginator = this.pagination;
  //       }, 0);
  // }

}
