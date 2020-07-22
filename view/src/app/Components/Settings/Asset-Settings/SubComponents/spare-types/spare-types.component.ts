import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelSparetypesAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-sparetypes-asset-settings/model-sparetypes-asset-settings.component';

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

  displayedColumns = ['sno','spareType','created','updated','action'];
  spareTypeDataSource = new MatTableDataSource<SpareTypesComponent>() ;

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  dialogRef;
  CreateSpareTypes(element){
    this.dialogRef = this.dialog.open(ModelSparetypesAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'spareTypeModel' : element
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  getServerData(event){
    
  }

}
