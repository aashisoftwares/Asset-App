import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssetTypesComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/asset-types/asset-types.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-model-asset-type-asset-settings',
  templateUrl: './model-asset-type-asset-settings.component.html',
  styleUrls: ['./model-asset-type-asset-settings.component.css']
})
export class ModelAssetTypeAssetSettingsComponent implements OnInit {

  Company_Id;
  User_Id;
  Form: FormGroup;

  //Create, Edit, Save and Update button name change based on the place
  headingDisplay : string;
  displayButton: string;
  disableSubmitButton: boolean=false;
  setValueToForm: boolean=false;
  methodName:string='';

  constructor(public dialogRef: MatDialogRef<AssetTypesComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private toastrService: ToastrServiceService,
    private serviceName: ServiceNames,
    private constant: ConstantFile,
    private Service:AssetSettingServiceService,
    private loginService: LoginService) { 
      this.Company_Id = this.loginService.getcompanyId();
      this.User_Id = this.loginService.getUserId();
      this.headingDisplay='Create';
      this.displayButton='Submit';
    }

    ngOnInit(): void {
      this.Form = new FormGroup({
        _id: new FormControl(0),
        Asset_Type_Id: new FormControl(0),
        Asset_Type : new FormControl('', [Validators.required]),
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
      };
      if(this.setValueToForm){
        this.Form.patchValue(this.data.assetTypeModel);
        this.Form.controls.Created_By.setValue(this.data.assetTypeModel.Created_By._id);
        this.Form.controls.Last_Modified_By.setValue(this.User_Id);
      }
    }
  
    closeModal(){
      this.dialogRef.close();
    }

    onSubmit(mode) {
      if(mode=='Submit'){
        this.methodName=this.serviceName.asset_type_Create;
      }else{
        this.methodName=this.serviceName.asset_Type_Edit;
        this.Form.controls.Asset_Type_Id.setValue(this.data.assetTypeModel._id);
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
