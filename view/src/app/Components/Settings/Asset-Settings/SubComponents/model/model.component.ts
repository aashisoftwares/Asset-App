import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelModelAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-model-asset-settings/model-model-asset-settings.component';

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

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  getServerData(event){

  }

  //CREATE ASSET GROUP
  dialogRef;
  CreateModel(element) {
    this.dialogRef = this.dialog.open(ModelModelAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'modelModel' : element
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

}
