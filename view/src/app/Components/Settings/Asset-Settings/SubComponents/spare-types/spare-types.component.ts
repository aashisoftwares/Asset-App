import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelSparetypesAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-sparetypes-asset-settings/model-sparetypes-asset-settings.component';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-spare-types',
  templateUrl: './spare-types.component.html',
  styleUrls: ['./spare-types.component.css']
})
export class SpareTypesComponent implements OnInit {

  //For Pagination
  length: String = '0';     //set total record count here 
  pageIndex: String;  //set page number starts with zeroo
  pageSize: String;   // records per page

  displayedColumns = ['sno','spareType','created','action'];
  spareTypeDataSource = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private dialog: MatDialog,private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService) { }

  ngOnInit(): void {
    this.getListOfSpareTypes();
  }

  dialogRef;
  CreateSpareTypes(element,mode){
    this.dialogRef = this.dialog.open(ModelSparetypesAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'spareTypeModel' : element,
        'Mode':mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  getListOfSpareTypes(){
    this.Service.commonPostListMethod(this.serviceName.spare_type_List).subscribe(
      data =>{ 
        this.spareTypeDataSource = data.Response;     
        this.dataSource=new MatTableDataSource<any>(this.spareTypeDataSource);
        setTimeout(() => {
          this.dataSource.paginator=this.pagination;
        }, 0); 
      },error=>{
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
      );
  }

}
