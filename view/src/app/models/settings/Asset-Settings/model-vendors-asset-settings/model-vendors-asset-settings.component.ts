import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { VendorsComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/vendors/vendors.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';

@Component({
  selector: 'app-model-vendors-asset-settings',
  templateUrl: './model-vendors-asset-settings.component.html',
  styleUrls: ['./model-vendors-asset-settings.component.css']
})
export class ModelVendorsAssetSettingsComponent implements OnInit {

  Company_Id;
  User_Id;

  Form: FormGroup;

  //Create, Edit, Save and Update button name change based on the place
  headingDisplay : string;
  displayButton: string;
  disableSubmitButton: boolean=false;

  constructor(public dialogRef: MatDialogRef<VendorsComponent>,
              @Inject(MAT_DIALOG_DATA) private data,
              private toastrService: ToastrServiceService,
              private serviceName: ServiceNames,
              private constant: ConstantFile,
              private Service:AssetSettingServiceService) { 
     this.Company_Id = "5ed8bc9eba679310987c12cd";
     this.User_Id = "5ed8d69fc2b07e09dcd16828";
     this.headingDisplay='Create';
     this.displayButton='Submit';
  }

  ngOnInit(): void {
    this.Form = new FormGroup({
      _id: new FormControl(0),
      Vendor_Name : new FormControl('',Validators.required),
      Address : new FormControl('',Validators.required),
      Phone_Number: new FormControl(''),
      Vendor_Email: new FormControl(''),
      Vendor_Website: new FormControl(''),
      GSTN: new FormControl(''),
      Notes: new FormControl(''),
      Company_Id : new FormControl(this.Company_Id),
      Created_By : new FormControl(this.User_Id),
      Last_Modified_By : new FormControl(''),
      Active_Status: new FormControl(true),
      If_Deleted: new FormControl(true)
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
    }else if(this.data.Mode='edit'){
      this.disableSubmitButton=false;
      this.headingDisplay='Edit';
      this.displayButton='Update';
    };
    this.Form.patchValue(this.data.vendorModel);
  }

  closeModal(){
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.Form.valid) {
      return false;
    } else {
      this.Service.commonCreateMethod(this.serviceName.vendor_Create,this.Form.value).subscribe(
        (res) => {
          if(res.Status){
            this.toastrService.successMessage(this.constant.SUCCESS_MSG)
            this.closeModal();
          }else{
            this.toastrService.errorMessage(this.constant.ERROR_MSG);
          }
        }, (error) => {
          this.toastrService.errorMessage(this.constant.SERVER_ERROR);
        });
    }
  }

}
