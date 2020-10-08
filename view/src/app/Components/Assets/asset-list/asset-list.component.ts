import { Component, NgZone, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { AssetService } from '../../../Services/Asset/asset.service';
import { EnviroinmentService } from '../../../Services/enviroinments/enviroinment.service';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.css']
})
export class AssetListComponent implements OnInit {

  AssetDataList = [];
  dataSource: MatTableDataSource<any>;
  @ViewChild(MatPaginator) pagination: MatPaginator;

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private service : AssetService,
    private toaster: ToastrServiceService,
    private error: ConstantFile,
    private loginService: LoginService,
    private environment : EnviroinmentService
    ) { 
      this.getAssets();
    }

  ngOnInit(): void {
  }

  // Menu List
getAssets(){
  const Info = {'Company_Id':this.loginService.getcompanyId()};
  console.log (Info);
  this.service.Asset_Simple_List(Info).subscribe(res => {
    const ResponseData = res;
    console.log (ResponseData)
    this.AssetDataList = ResponseData['Response'];
     });
  }
}
