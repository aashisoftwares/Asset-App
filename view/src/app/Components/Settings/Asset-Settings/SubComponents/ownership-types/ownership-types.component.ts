import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { LoginService } from 'src/app/Services/Login/login.service';
import { ModelOwnershipTypeAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-ownership-type-asset-settings/model-ownership-type-asset-settings.component';

@Component({
  selector: 'app-ownership-types',
  templateUrl: './ownership-types.component.html',
  styleUrls: ['./ownership-types.component.css']
})
export class OwnershipTypesComponent implements OnInit {

  displayedColumns = ['sno', 'ownership', 'created', 'action'];
  ownershipTypedataSource = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private dialog: MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService,
    private login: LoginService) { }

  ngOnInit(): void {
    this.getListOfOwnershipType();
  }

  getListOfOwnershipType(){
    this.Service.commonPostListMethod(this.serviceName.ownership_List).subscribe(
      data => {
        this.ownershipTypedataSource = data.Response;
        this.dataSource = new MatTableDataSource<any>(this.ownershipTypedataSource);
        setTimeout(() => {
          this.dataSource.paginator = this.pagination;
        }, 0);
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR)
      }
    );
  }

  dialogRef;
  CreateOwnership(element, mode){
    this.dialogRef = this.dialog.open(ModelOwnershipTypeAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'ownershipModel' : element,
        'Mode':mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  deleteOwnership(element){
    element.Ownership_Type_Id=element._id;
    element.Last_Modified_By=this.login.getUserId();
    this.Service.commonDeleteMethod(this.serviceName.ownership_Delete, element).subscribe(
      data => {
        if (data.Status) {
          this.toaster.successMessage(data.Message);
          this.getListOfOwnershipType();
        } else {
          this.toaster.errorMessage(data.Message);
        }
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
    );
  }

}
