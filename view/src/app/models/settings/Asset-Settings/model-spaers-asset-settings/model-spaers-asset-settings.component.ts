import { Component, OnInit, Inject } from '@angular/core';
import { SparesComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/spares/spares.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';
import { LoginService } from 'src/app/Services/Login/login.service';

@Component({
  selector: 'app-model-spaers-asset-settings',
  templateUrl: './model-spaers-asset-settings.component.html',
  styleUrls: ['./model-spaers-asset-settings.component.css']
})
export class ModelSpaersAssetSettingsComponent implements OnInit {

  Company_Id;
  User_Id;
  Form: FormGroup;

  //Create, Edit, Save and Update button name change based on the place
  headingDisplay : string;
  displayButton: string;
  disableSubmitButton: boolean=false;
  setValueToForm: boolean=false;

  spareTypeList: any[] = [];
  methodName:string='';

  constructor(public dialogRef: MatDialogRef<SparesComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private serviceName: ServiceNames,
    private Service: AssetSettingServiceService,
    private toastrService: ToastrServiceService,
    private constant: ConstantFile,
    private loginService: LoginService) { 
      this.Company_Id = this.loginService.getcompanyId();
      this.User_Id = this.loginService.getUserId();
      this.headingDisplay='Create';
      this.displayButton='Submit';
    }

  ngOnInit(): void {
    this.Form = new FormGroup({
      _id: new FormControl(0),
      Spare_Name_Id: new FormControl(0),
      Spare_Name : new FormControl('',Validators.required),
      Spare_Type_Name : new FormControl('', [Validators.required]),
      Spare_Type_Id : new FormControl(''),
      Stocable : new FormControl(''),
      Purchaseable : new FormControl(''),
      Description : new FormControl(''),
      Company_Id : new FormControl(this.Company_Id, Validators.required),
      Created_By : new FormControl(this.User_Id, Validators.required),
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
      this.Form.patchValue(this.data.spareModel);
      this.Form.controls.Spare_Type_Id.setValue(this.data.spareModel.Spare_Type_Id._id);
      this.Form.controls.Spare_Type_Name.setValue(this.data.spareModel.Spare_Type_Id.Spare_Type);
      this.Form.controls.Created_By.setValue(this.data.spareModel.Created_By._id);
      this.Form.controls.Last_Modified_By.setValue(this.User_Id);
    }
  }

  closeModal(){
    this.dialogRef.close();
  }

  getSpareTypeList(){
    this.Service.commonGetListMethod(this.serviceName.spare_type_Combo).subscribe(
      data => {
        this.spareTypeList = data;
      }
    )
  }

  setSpareTypeValue(event){
    this.Form.controls.Spare_Type_Name.setValue(event.Spare_Type);
    this.Form.controls.Spare_Type_Id.setValue(event._id);
  }

  onSubmit(mode) {
    if(mode=='Submit'){
      this.methodName=this.serviceName.spare_Create;
    }else{
      this.methodName=this.serviceName.spare_Edit;
      this.Form.controls.Spare_Name_Id.setValue(this.data.spareModel._id);
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
