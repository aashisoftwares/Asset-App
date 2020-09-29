import { Component, OnInit, Inject } from '@angular/core';
import { ManufacturerComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/manufacturer/manufacturer.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-model-manufacturer-asset-settings',
  templateUrl: './model-manufacturer-asset-settings.component.html',
  styleUrls: ['./model-manufacturer-asset-settings.component.css']
})
export class ModelManufacturerAssetSettingsComponent implements OnInit {

  //Create, Edit, Save and Update button name change based on the place
  headingDisplay : string;
  displayButton: string;
  disableSubmitButton: boolean=false;
  setInfoForm: boolean = false;

  Company_Id;
  User_Id;

  Form: FormGroup;

  assetGroupList: any[]=[];
  methodName:string='';

  constructor(public dialogRef: MatDialogRef<ManufacturerComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private serviceName: ServiceNames,
    private Service: AssetSettingServiceService,
    private toastrService: ToastrServiceService,
    private constant: ConstantFile,
    private loginService: LoginService) {
      this.headingDisplay='Create';
      this.displayButton='Submit';
      this.Company_Id = this.loginService.getcompanyId();
      this.User_Id = this.loginService.getUserId();
     }

  ngOnInit(): void {
    this.Form = new FormGroup({
      _id: new FormControl(0),
      Manufacturer_Id: new FormControl(0),
      Manufacturer : new FormControl('', Validators.required),
      Asset_Group_Id : new FormControl(''),
      Asset_Group_Name: new FormControl('', Validators.required),
      Company_Id : new FormControl(this.Company_Id, Validators.required),
      Created_By : new FormControl(this.User_Id, Validators.required),
      Last_Modified_By: new FormControl(''),
      Active_Status: new FormControl(true),
      If_Deleted: new FormControl(false)
    });
    this.fetchDataIntoForm();
  }

  closeModal(){
    this.dialogRef.close();
  }

  fetchDataIntoForm(){
    if(this.data.Mode=='add'){
      this.headingDisplay='Create';
      this.displayButton='Submit';
      this.setInfoForm=false;
    }else if(this.data.Mode=='view'){
      this.disableSubmitButton=true;
      this.headingDisplay='View';
      this.setInfoForm=true;
    }else if(this.data.Mode='edit'){
      this.disableSubmitButton=false;
      this.headingDisplay='Edit';
      this.displayButton='Update';
      this.setInfoForm=true;
    };
    if(this.setInfoForm){
      this.Form.patchValue(this.data.manufacturerModel);
      this.Form.controls.Asset_Group_Name.setValue(this.data.manufacturerModel.Asset_Group_Id.Asset_Group);
      this.Form.controls.Asset_Group_Id.setValue(this.data.manufacturerModel.Asset_Group_Id._id);
      this.Form.controls.Created_By.setValue(this.data.manufacturerModel.Created_By._id);
      this.Form.controls.Last_Modified_By.setValue(this.User_Id);
      }
  }

  getAssetGroupList() {   
    this.Service.commonGetListMethod(this.serviceName.asset_Group_Combo).subscribe(
      data => {
        this.assetGroupList = data;
      }
    )
  };

  setAssetGroupValue(event){
    this.Form.controls.Asset_Group_Id.setValue(event._id);
    this.Form.controls.Asset_Group_Name.setValue(event.Asset_Group);
  }

  onSubmit(mode) {
    if(mode=='Submit'){
      this.methodName=this.serviceName.manufacturer_Create;
    }else{
      this.methodName=this.serviceName.manufacturer_Edit;
      this.Form.controls.Manufacturer_Id.setValue(this.data.manufacturerModel._id);
    }
    if(this.methodName!=''&& this.methodName!=null&&this.methodName!=undefined){
      this.Service.commonCreateMethod(this.methodName, this.Form.value).subscribe(
        (res) => {
          if (res.Status) {
            this.toastrService.successMessage(this.constant.SUCCESS_MSG)
            this.closeModal();
          } else {
            this.toastrService.errorMessage(this.constant.ERROR_MSG);
          }
        }, (error) => {
          this.toastrService.errorMessage(this.constant.SERVER_ERROR);
        });
    }
  }

}
