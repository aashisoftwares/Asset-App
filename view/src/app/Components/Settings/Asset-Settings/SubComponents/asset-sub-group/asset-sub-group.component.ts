import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModelAssetsubgroupAssetSettingsComponent } from "../../../../../models/settings/Asset-Settings/model-assetsubgroup-asset-settings/model-assetsubgroup-asset-settings.component";
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';

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

  displayedColumns = ['sno','subGroup','assetGroup','created','updated','action'];
  assetSubGroupdataSource = new MatTableDataSource<AssetSubGroupComponent>() ;
  
  constructor(private modalService: BsModalService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //CREATE ASSET GROUP
  dialogRef;
  createSubGroup(element) {
    this.dialogRef = this.dialog.open(ModelAssetsubgroupAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'SubGroupModel' : element
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
