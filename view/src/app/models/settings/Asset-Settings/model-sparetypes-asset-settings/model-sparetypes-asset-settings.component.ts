import { Component, OnInit, Inject } from '@angular/core';
import { SpareTypesComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/spare-types/spare-types.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ConstantFile } from 'src/app/Services/constantFile';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-model-sparetypes-asset-settings',
  templateUrl: './model-sparetypes-asset-settings.component.html',
  styleUrls: ['./model-sparetypes-asset-settings.component.css']
})
export class ModelSparetypesAssetSettingsComponent implements OnInit {

  Company_Id;
  User_Id;
  Form: FormGroup;

  //Create, Edit, Save and Update button name change based on the place
  headingDisplay : string;
  displayButton: string;
  disableSubmitButton: boolean=false;
  setValueToForm: boolean=false;
  methodName:string='';
  
  constructor(public dialogRef: MatDialogRef<SpareTypesComponent>,
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
      Spare_Type_Id: new FormControl(0),
      Spare_Type : new FormControl('', [Validators.required]),
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
      this.Form.patchValue(this.data.spareTypeModel);
      this.Form.controls.Created_By.setValue(this.data.spareTypeModel.Created_By._id);
      this.Form.controls.Last_Modified_By.setValue(this.User_Id);
    }
  }

  closeModal(){
    this.dialogRef.close();
  }

  onSubmit(mode) {
    if(mode=='Submit'){
      this.methodName=this.serviceName.spare_type_Create;
    }else{
      this.methodName=this.serviceName.spare_type_Edit;
      this.Form.controls.Spare_Type_Id.setValue(this.data.spareTypeModel._id);
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
