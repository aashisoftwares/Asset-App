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
  Model_Id;
  AssManufacturer__Id;
  Asset_Group_Id;
  Asset_Sub_Group_Id; 
  Location_Id; 
  Purchase_Date; 
  Vendor_Name_Id; 
  Warranty_Start_Date;
  Warranty_End_Date; 
  Warranty_Coverage_Type; 
  Ownership_Type_Id; 
  Asset_Type_Id; 
  Maintanance_Stratagy_Id; 
  Asset_Allocated_Id;
  Warranty_period;

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

  Asset = [
      {id: 1, name: 'Saravabakumar'},
      {id: 2, name: 'Kathir'},
    ];

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
      {id: 1, name: 'CONTRACT'},
      {id: 2, name: 'WARRANTY'},
      {id: 3, name: 'EXTENDED WARRANTY'}
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
      Model_Id : new FormControl(''),
      Model_Name : new FormControl('',[Validators.required]),
      AssManufacturer__Id : new FormControl(''),
      Ass_Manufacturer_Name : new FormControl('',[Validators.required]),
      Asset_Group_Id : new FormControl(''),
      Asset_Group_Name : new FormControl('',[Validators.required]),
      Asset_Sub_Group_Id : new FormControl(''),
      Asset_Sub_Group_Name : new FormControl('',[Validators.required]),
      Location_Id : new FormControl(''),
      Location_Name : new FormControl('', [Validators.required]),
      Purchase_Date : new FormControl('', Validators.required),
      Purchase_Date_Disp : new FormControl('', Validators.required),
      Price : new FormControl('', Validators.required),
      Invoice_Number : new FormControl('', Validators.required),
      Vendor_Name_Id : new FormControl(''),
      Vendor_Name : new FormControl('', Validators.required),
      Warranty_period : new FormControl('', Validators.required),
      Warranty_Start_Date : new FormControl('', Validators.required),
      Warranty_Start_Date_Disp : new FormControl('', Validators.required),
      Warranty_End_Date : new FormControl('', Validators.required),
      Warranty_End_Date_Disp : new FormControl('', Validators.required),
      Warranty_Coverage_Type : new FormControl('', Validators.required),
      Ownership_Type_Id : new FormControl(''),
      Ownership_Type_Name: new FormControl('', Validators.required),
      Asset_Type_Id : new FormControl(''),
      Asset_Type_Name: new FormControl('', Validators.required),
      Maintanance_Stratagy_Id : new FormControl(''),
      Maintanance_Stratagy_Name : new FormControl('', Validators.required),
      Asset_Allocated_Id : new FormControl(''),
      Asset_Allocated_Name: new FormControl(this.Asset_Allocated_Id, Validators.required),
      Company_Id : new FormControl(this.Company_Id, Validators.required),
      Created_By : new FormControl(this.User_Id, Validators.required),
      Last_Modified_By : new FormControl(this.User_Id),
      Active_Status: new FormControl(true),
      If_Deleted : new FormControl(false)
    })
  }

  dateValidationinstall(event){
    return false;
  }

  submit() {
    this.Form.controls.Purchase_Date.setValue(this.CommonService.convertToDateStringdd_mm_yyyy(this.Form.controls.Purchase_Date_Disp.value))
    this.Form.controls.Warranty_Start_Date.setValue(this.CommonService.convertToDateStringdd_mm_yyyy(this.Form.controls.Warranty_Start_Date_Disp.value))
    this.Form.controls.Warranty_End_Date.setValue(this.CommonService.convertToDateStringdd_mm_yyyy(this.Form.controls.Warranty_End_Date_Disp.value))

    console.log(this.Form.value);
    
    this.submitted = true;
    if (!this.Form.valid) {
      return false;
    } else {
      this.Service.CreateAssets(this.Form.value).subscribe(
        (res) => {
          if(res.Status){
            this.toaster.successMessage("Record Added Successfully");
            this.ngZone.run(() => this.router.navigateByUrl('/asset'));
          }else{
            this.toaster.errorMessage("Record Added Failed")
          }
        }, (error) => {
          this.toaster.errorMessage(this.error.SERVER_ERROR);
        });
    }
  }

  getModelList(){
    this.ComboService.commonGetListMethod(this.serviceName.model_Combo).subscribe(
      data => {
        this.modelComboList = data;
      }
    )
  }

  setModelValue(event){
    this.Form.controls.Model_Id.setValue(event._id);
    this.Form.controls.Model_Name.setValue(event.Model_Name);
  }

  getAssetGroupList() {   
    this.ComboService.commonGetListMethod(this.serviceName.asset_Group_Combo).subscribe(
      data => {
        this.assetGroupList = data;
      }
    )
  };

  setAssetGroupValue(event){
    this.Form.controls.Asset_Group_Id.setValue(event._id);
    this.Form.controls.Asset_Group_Name.setValue(event.Asset_Group);
  }

  getAssetSubGroupList() {   
    this.ComboService.commonGetListMethod(this.serviceName.asset_subGroup_Combo).subscribe(
      data => {
        this.assetSubGroupList = data;
      }
    )
  };

  setAssetSubGroupValue(event){
    this.Form.controls.Asset_Sub_Group_Id.setValue(event._id);
    this.Form.controls.Asset_Sub_Group_Name.setValue(event.Asset_Sub_Group);
  }

  getManufacturerList(){
    this.ComboService.commonGetListMethod(this.serviceName.manufacturer_Combo).subscribe(
      data => {
        this.manufacturerList = data;
      }
    )
  }

  setManufacturerValue(event){
    this.Form.controls.AssManufacturer__Id.setValue(event._id);
    this.Form.controls.Ass_Manufacturer_Name.setValue(event.Manufacturer);
  }

  getLocationList(){
    this.ComboService.commonGetListMethod(this.serviceName.location_Combo).subscribe(
      data => {
        this.locationList = data;
      }
    )
  }

  setLocationValue(event){
    this.Form.controls.Location_Id.setValue(event._id);
    this.Form.controls.Location_Name.setValue(event.Location_Name);
  }

  getOwnershipTypeList(){
    this.ComboService.commonGetListMethod(this.serviceName.ownership_Combo).subscribe(
      data => {
        this.ownershipList = data;
      }
    )
  }

  setOwnershipValue(event){
    this.Form.controls.Ownership_Type_Id.setValue(event._id);
    this.Form.controls.Ownership_Type_Name.setValue(event.Ownership_Type_Name);
  }

  getMaintenanceTypeList(){
    this.ComboService.commonGetListMethod(this.serviceName.maintenance_Combo).subscribe(
      data => {
        this.maintenanceList = data;
      }
    )
  }

  setMaintenanceValue(event){
    this.Form.controls.Maintanance_Stratagy_Id.setValue(event._id);
    this.Form.controls.Maintanance_Stratagy_Name.setValue(event.Mainatanance_Stratagy);
  }

  getAssetTypeList(){
    this.ComboService.commonGetListMethod(this.serviceName.asset_type_Combo).subscribe(
      data => {
        this.assetTypeList = data;
      }
    )
  }

  setAssetTypeValue(event){
    this.Form.controls.Asset_Type_Id.setValue(event._id);
    this.Form.controls.Asset_Type_Name.setValue(event.Asset_Type);
  }

  getVendorValue(){
    this.ComboService.commonGetListMethod(this.serviceName.vendor_Combo).subscribe(
      data => {
        this.VendorList = data;
      }
    )
  }

  setVendorValue(event){
    this.Form.controls.Vendor_Name_Id.setValue(event._id);
    this.Form.controls.Vendor_Name.setValue(event.Vendor_Name);
  }

  clear(){
    
  }

  setWarrantyPeriod(event){
    this.Form.controls.Warranty_period.setValue(event.name);
  }

  setWarrantyCovergeType(event){
    this.Form.controls.Warranty_Coverage_Type.setValue(event.name);
  }

  getAllocatedList(){
    this.ComboService.commonGetListMethod(this.serviceName.employee_Combo).subscribe(
      data => {
        this.allocatedToList = data;
      }
    )
  }

  setAllocatedValue(event){
    this.Form.controls.Asset_Allocated_Id.setValue(event._id);
    this.Form.controls.Asset_Allocated_Name.setValue(event.Employee_Name);
  }
}
