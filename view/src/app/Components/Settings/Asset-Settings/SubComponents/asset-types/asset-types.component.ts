import { Component, OnInit, ViewChild } from '@angular/core';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { LoginService } from 'src/app/Services/Login/login.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { ModelAssetTypeAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-asset-type-asset-settings/model-asset-type-asset-settings.component';

@Component({
  selector: 'app-asset-types',
  templateUrl: './asset-types.component.html',
  styleUrls: ['./asset-types.component.css']
})
export class AssetTypesComponent implements OnInit {

  displayedColumns = ['sno', 'assetType', 'created', 'action'];
  assetTypedataSource = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private dialog: MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService,
    private login: LoginService) { }

  ngOnInit(): void {
    this.getListOfAssetType();
  }

  dialogRef;
  CreateAssetType(element, mode){
    this.dialogRef = this.dialog.open(ModelAssetTypeAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'assetTypeModel' : element,
        'Mode':mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  deleteAssetType(element){
    element.Asset_Type_Id=element._id;
    element.Last_Modified_By=this.login.getUserId();
    this.Service.commonDeleteMethod(this.serviceName.asset_type_Delete, element).subscribe(
      data => {
        if (data.Status) {
          this.toaster.successMessage(data.Message);
          this.getListOfAssetType();
        } else {
          this.toaster.errorMessage(data.Message);
        }
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
    );
  }

  getListOfAssetType(){
    this.Service.commonPostListMethod(this.serviceName.asset_type_List).subscribe(
      data => {
        this.assetTypedataSource = data.Response;
        this.dataSource = new MatTableDataSource<any>(this.assetTypedataSource);
        setTimeout(() => {
          this.dataSource.paginator = this.pagination;
        }, 0);
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR)
      }
    );
  }

}
