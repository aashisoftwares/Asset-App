import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModelAssetgroupAssetSettingsComponent } from "../../../../../models/settings/Asset-Settings/model-assetgroup-asset-settings/model-assetgroup-asset-settings.component";
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';

const ELEMENT_DATA = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'}
];

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

  displayedColumns = ['sno', 'assetGroup','created','updated','action'];
  assetGroupdataSource = ELEMENT_DATA ;

  constructor(private modalService: BsModalService,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  //CREATE ASSET GROUP
  dialogRef;
  CreateAssetGroup(element) {
   this.dialogRef = this.dialog.open(ModelAssetgroupAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'AssetGroupModel' : element
      }
    });
    this.dialogRef.disableClose = true;
    this.dialogRef.afterClosed().subscribe(
      data => {
          this.ngOnInit();
      });
  }

  getServerData(event){
    console.log(event);
    
  }

  onSearchChange(event){

  }

}
