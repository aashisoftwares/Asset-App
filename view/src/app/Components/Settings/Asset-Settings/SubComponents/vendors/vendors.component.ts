import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { ModelVendorsAssetSettingsComponent } from 'src/app/models/settings/Asset-Settings/model-vendors-asset-settings/model-vendors-asset-settings.component';

@Component({
  selector: 'app-vendors',
  templateUrl: './vendors.component.html',
  styleUrls: ['./vendors.component.css']
})
export class VendorsComponent implements OnInit {

  //For Pagination
  length: String = '0';     //set total record count here 
  pageIndex: String;  //set page number starts with zeroo
  pageSize: String;   // records per page

  displayedColumns = ['sno','vendorName','address','phoneNo','created','updated','action'];
  vendorDataSource = new MatTableDataSource<VendorsComponent>() ;

  constructor(private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  dialogRef;
  CreateVendor(element){
    this.dialogRef = this.dialog.open(ModelVendorsAssetSettingsComponent, {
      height: 'auto',
      width: '500px',
      data: {
        'vendorModel' : element
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
