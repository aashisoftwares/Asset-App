import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelManufacturerAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-manufacturer-asset-settings/model-manufacturer-asset-settings.component';

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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getServerData(event){

  }

  //CREATE ASSET GROUP
  dialogRef;
  CreateManufacturer(element) {
    this.dialogRef = this.dialog.open(ModelManufacturerAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'manufacturerModel' : element
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }
}
