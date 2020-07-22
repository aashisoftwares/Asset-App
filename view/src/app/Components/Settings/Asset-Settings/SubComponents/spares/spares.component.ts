import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelSpaersAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-spaers-asset-settings/model-spaers-asset-settings.component';

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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getServerData(event){

  }

  //CREATE ASSET GROUP
  dialogRef;
  CreateSpare(element) {
    this.dialogRef = this.dialog.open(ModelSpaersAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'spareModel' : element
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

}
