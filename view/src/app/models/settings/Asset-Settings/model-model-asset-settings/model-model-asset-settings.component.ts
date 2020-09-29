import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModelComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/model/model.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { LoginService } from 'src/app/Services/Login/login.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';

@Component({
  selector: 'app-model-model-asset-settings',
  templateUrl: './model-model-asset-settings.component.html',
  styleUrls: ['./model-model-asset-settings.component.css']
})
export class ModelModelAssetSettingsComponent implements OnInit {

  //Create, Edit, Save and Update button name change based on the place
  headingDisplay : string;
  displayButton: string;
  disableSubmitButton: boolean=false;
  setValueToForm: boolean=false;

  Company_Id;
  User_Id;

  Form: FormGroup;
  methodName:string='';

  assetGroupList: any[]=[];
  manufacturerList: any[]=[];
  assetSubGroupList: any[]=[];

  constructor(public dialogRef: MatDialogRef<ModelComponent>,
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
      Model_Name_Id: new FormControl(0),
      Model_Name: new FormControl('',[Validators.required]),
      Manufacturer_Id : new FormControl(''),
      Manufacturer_Name : new FormControl('',[Validators.required]),
      Asset_Group_Name : new FormControl(''),
      Asset_Group_Id: new FormControl(''),
      Asset_Sub_Group_Id: new FormControl(''),
      Asset_Sub_Group_Name: new FormControl(''), 
      Company_Id : new FormControl(this.Company_Id),
      Created_By : new FormControl(this.User_Id),
      Last_Modified_By : new FormControl(''),
      Active_Status: new FormControl(true),
      If_Deleted: new FormControl(false)
    });
    this.fetchDataIntoForm();
  }

  fetchDataIntoForm(){
    if(this.data.Mode=='add'){
      this.headingDisplay='Create';
      this.displayButton='Submit';
      this.setValueToForm=false;
    }else if(this.data.Mode=='view'){
      this.disableSubmitButton=true;
      this.headingDisplay='View';
      this.setValueToForm=true;
    }else if(this.data.Mode='edit'){
      this.disableSubmitButton=false;
      this.headingDisplay='Edit';
      this.displayButton='Update';
      this.setValueToForm=true;
    }    
    if(this.setValueToForm){
      this.Form.patchValue(this.data.modelModel);
      this.Form.controls.Asset_Group_Name.setValue(this.data.modelModel.Asset_Group_Id.Asset_Group);
      this.Form.controls.Asset_Group_Id.setValue(this.data.modelModel.Asset_Group_Id._id);
      this.Form.controls.Manufacturer_Id.setValue(this.data.modelModel.Manufacturer_Id._id);
      this.Form.controls.Manufacturer_Name.setValue(this.data.modelModel.Manufacturer_Id.Manufacturer);
      this.Form.controls.Asset_Sub_Group_Id.setValue(this.data.modelModel.Asset_Sub_Group_Id._id);
      this.Form.controls.Asset_Sub_Group_Name.setValue(this.data.modelModel.Asset_Sub_Group_Id.Asset_Sub_Group);
      this.Form.controls.Created_By.setValue(this.data.modelModel.Created_By._id);
      this.Form.controls.Last_Modified_By.setValue(this.User_Id);
    }
  }

  closeModal(){
    this.dialogRef.close();
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

  getManufacturerList(){
    this.Service.commonGetListMethod(this.serviceName.manufacturer_Combo).subscribe(
      data => {
        this.manufacturerList = data;
      }
    )
  }

  setManufacturerValue(event){
    this.Form.controls.Manufacturer_Id.setValue(event._id);
    this.Form.controls.Manufacturer_Name.setValue(event.Manufacturer);
  }

  getSubGroupList(){
    this.Service.commonGetListMethod(this.serviceName.asset_subGroup_Combo).subscribe(
      data => {
        this.assetSubGroupList = data;
      }
    )
  }

  setSubGroupValue(event){
    this.Form.controls.Asset_Sub_Group_Id.setValue(event._id);
    this.Form.controls.Asset_Sub_Group_Name.setValue(event.Asset_Sub_Group);
  }

  onSubmit(mode){
    if(mode=='Submit'){
      this.methodName=this.serviceName.model_Create;
    }else{
      this.methodName=this.serviceName.model_Edit;
      this.Form.controls.Model_Name_Id.setValue(this.data.modelModel._id);
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
