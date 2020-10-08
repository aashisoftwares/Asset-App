import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AssetService } from '../../../Services/Asset/asset.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { CommonService } from 'src/app/Services/CommonService/common.service';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  submitted = false;
  Data;
  Company_Id;
  User_Id;
  Warranty_period;

  Uploading: Boolean = false;
  modelComboList: any[]=[];
  assetGroupList: any[]=[];
  assetSubGroupList: any[]=[];
  manufacturerList: any[]=[];
  locationList: any[]=[];
  ownershipList: any[]=[];
  maintenanceList: any[]=[];
  assetTypeList: any[]=[];
  VendorList: any[]=[];
  allocatedToList: any[]=[];

  Form: FormGroup;

    months = [
      {id: 1, name: '1 months'},
      {id: 2, name: '2 months'},
      {id: 3, name: '3 months'},
      {id: 4, name: '4 months'},
      {id: 5, name: '5 months'},
      {id: 6, name: '6 months'},
      {id: 7, name: '7 months'},
      {id: 8, name: '8 months'},
      {id: 9, name: '9 months'},
      {id: 10, name: '10 months'},
      {id: 11, name: '11 months'},
      {id: 12, name: '12 months'}
    ];

    WarrantyCoverageType = [
      {id: 'CONTRACT', name: 'CONTRACT'},
      {id: 'WARRANTY', name: 'WARRANTY'},
      {id: 'EXTENDED WARRANTY', name: 'EXTENDED WARRANTY'}
    ];

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private Service : AssetService,
    private serviceName: ServiceNames,
    private ComboService: AssetSettingServiceService,
    private CommonService: CommonService,
    private toaster: ToastrServiceService,
    private error: ConstantFile,
    private loginService: LoginService
  ) {
    this.Company_Id = this.loginService.getcompanyId();
    this.User_Id = this.loginService.getUserId();   
   }

  ngOnInit(): void {
    this.Form = new FormGroup({
      Asset_Nick_Name : new FormControl('', Validators.required),
      Serial_Number : new FormControl('', Validators.required),
      Asset_Code : new FormControl('', Validators.required),
      Ass_RFID:new FormControl('') ,
      Model_Id : new FormControl('', Validators.required),
      AssManufacturer_Id : new FormControl('', Validators.required),
      Asset_Group_Id : new FormControl('', Validators.required),
      Asset_Sub_Group_Id : new FormControl('', Validators.required),
      Location_Id : new FormControl('', Validators.required),
      Purchase_Date : new FormControl('', Validators.required),
      Price : new FormControl('', Validators.required),
      Invoice_Number : new FormControl('', Validators.required),
      Vendor_Name_Id : new FormControl('', Validators.required),
      Warranty_period : new FormControl('', Validators.required),
      Warranty_Start_Date : new FormControl('', Validators.required),
      Warranty_End_Date : new FormControl('', Validators.required),
      Warranty_Coverage_Type : new FormControl('', Validators.required),
      Ownership_Type_Id : new FormControl('', Validators.required),
      Asset_Type_Id : new FormControl('', Validators.required),
      Maintanance_Stratagy_Id : new FormControl('', Validators.required),
      Asset_Allocated_Id : new FormControl('', Validators.required),
      Company_Id : new FormControl(this.Company_Id, Validators.required),
      Created_By : new FormControl(this.User_Id, Validators.required),
      Last_Modified_By : new FormControl(this.User_Id),
      Active_Status: new FormControl(true),
      If_Deleted : new FormControl(false),
      Rfid_Status : new FormControl(false)
    })
  }

  /*Purchase Date */
  formatDateone(e) {
    let selectedDate = new Date(e.target.value);
    var convertedDate = `${selectedDate.getMonth() + 1}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
   this.Form.controls.Purchase_Date.setValue(convertedDate);
}

/*Start Date */
formatDatetwo(e) {
  let selectedDate = new Date(e.target.value);
  var convertedDate = `${selectedDate.getMonth() + 1}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
 this.Form.controls.Warranty_Start_Date.setValue(convertedDate);
}

/*End Date */
formatDatethree(e) {
  let selectedDate = new Date(e.target.value);
  var convertedDate = `${selectedDate.getMonth() + 1}/${selectedDate.getDate()}/${selectedDate.getFullYear()}`;
  this.Form.controls.Warranty_End_Date.setValue(convertedDate);
}


  submit() {
    console.log(this.Form.value);
      this.Uploading = true;
      this.Service.CreateAssets(this.Form.value).subscribe(
        (res) => {
          if(res.Status){
            this.toaster.successMessage("Record Added Successfully");
            this.ngZone.run(() => this.router.navigateByUrl('/asset'));
          }else{
            this.toaster.errorMessage("Record Added Failed")
          }
          this.Uploading = false;
        }, (error) => {
          this.toaster.errorMessage(this.error.SERVER_ERROR);
        });
  }

  getModelList(){
    this.ComboService.commonGetListMethod(this.serviceName.model_Combo).subscribe(
      data => {
        this.modelComboList = data;
      }
    )
  }


  getAssetGroupList() {   
    this.ComboService.commonGetListMethod(this.serviceName.asset_Group_Combo).subscribe(
      data => {
        this.assetGroupList = data;
      }
    )
  };

  getAssetSubGroupList() {   
    this.ComboService.commonGetListMethod(this.serviceName.asset_subGroup_Combo).subscribe(
      data => {
        this.assetSubGroupList = data;
      }
    )
  };


  getManufacturerList(){
    this.ComboService.commonGetListMethod(this.serviceName.manufacturer_Combo).subscribe(
      data => {
        this.manufacturerList = data;
      }
    )
  }


  getLocationList(){
    this.ComboService.commonGetListMethod(this.serviceName.location_Combo).subscribe(
      data => {
        this.locationList = data;
      }
    )
  }


  getOwnershipTypeList(){
    this.ComboService.commonGetListMethod(this.serviceName.ownership_Combo).subscribe(
      data => {
        this.ownershipList = data;
      }
    )
  }


  getMaintenanceTypeList(){
    this.ComboService.commonGetListMethod(this.serviceName.maintenance_Combo).subscribe(
      data => {
        this.maintenanceList = data;
      }
    )
  }


  getAssetTypeList(){
    this.ComboService.commonGetListMethod(this.serviceName.asset_type_Combo).subscribe(
      data => {
        this.assetTypeList = data;
      }
    )
  }


  getVendorValue(){
    this.ComboService.commonGetListMethod(this.serviceName.vendor_Combo).subscribe(
      data => {
        this.VendorList = data;
      }
    )
  }

  getAllocatedList(){
    this.ComboService.commonGetListMethod(this.serviceName.employee_Combo).subscribe(
      data => {
        this.allocatedToList = data;
      }
    )
  }

}