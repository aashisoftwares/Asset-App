import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { LoginService } from 'src/app/Services/Login/login.service';
import { ModelMaintenanceStrategyAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-maintenance-strategy-asset-settings/model-maintenance-strategy-asset-settings.component';

@Component({
  selector: 'app-maintenance-strategy',
  templateUrl: './maintenance-strategy.component.html',
  styleUrls: ['./maintenance-strategy.component.css']
})
export class MaintenanceStrategyComponent implements OnInit {

  displayedColumns = ['sno', 'maintenanceStrategy', 'created', 'action'];
  maintenanceStrategydataSource = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(private dialog: MatDialog,
    private Service: AssetSettingServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile,
    private toaster: ToastrServiceService,
    private login: LoginService) { }

  ngOnInit(): void {
    this.getListOfMaintenanceStrategy();
  }

  getListOfMaintenanceStrategy(){
    this.Service.commonPostListMethod(this.serviceName.maintenance_Strategy_List).subscribe(
      data => {
        this.maintenanceStrategydataSource = data.Response;
        this.dataSource = new MatTableDataSource<any>(this.maintenanceStrategydataSource);
        setTimeout(() => {
          this.dataSource.paginator = this.pagination;
        }, 0);
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR)
      }
    );
  }

  dialogRef;
  CreateMaintenanceStrategy(element, mode){
    this.dialogRef = this.dialog.open(ModelMaintenanceStrategyAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'maintenanceStrategyModel' : element,
        'Mode':mode
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  deleteMaintenanceStrategy(element){
    element.Mainatanance_Stratagy_Id=element._id;
    element.Last_Modified_By=this.login.getUserId();
    this.Service.commonDeleteMethod(this.serviceName.maintenance_Delete, element).subscribe(
      data => {
        if (data.Status) {
          this.toaster.successMessage(data.Message);
          this.getListOfMaintenanceStrategy();
        } else {
          this.toaster.errorMessage(data.Message);
        }
      }, error => {
        this.toaster.errorMessage(this.error.SERVER_ERROR);
      }
    );
  }

}
