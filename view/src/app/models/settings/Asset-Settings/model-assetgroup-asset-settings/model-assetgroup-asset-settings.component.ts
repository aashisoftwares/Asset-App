import { Component, OnInit, NgZone, Inject, AfterViewInit  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AssetSettingServiceService } from '../../../../Services/Asset-Settings/asset-setting-service.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AssetGroupComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/asset-group/asset-group.component';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ConstantFile } from 'src/app/Services/constantFile';

// import { map } from 'rxjs/operators';

@Component({
  selector: 'app-model-assetgroup-asset-settings',
  templateUrl: './model-assetgroup-asset-settings.component.html',
  styleUrls: ['./model-assetgroup-asset-settings.component.css']
})  
export class ModelAssetgroupAssetSettingsComponent implements OnInit {

  bsModalRef: BsModalRef;
  submitted = false;
  Type: string;
  Data;
  Uploading: Boolean = false;
  Company_Id;
  User_Id;

  Form: FormGroup;

  //Create, Edit, Save and Update button name change based on the place
  headingDisplay : string;
  displayButton: string;
  disableSubmitButton: boolean=false;

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private ngZone: NgZone,
    public Service: AssetSettingServiceService,
    public dialogRef: MatDialogRef<AssetGroupComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private toastrService: ToastrServiceService,
    private serviceName: ServiceNames,
    private error: ConstantFile
  ) {  
     this.Company_Id = "5ed8bc9eba679310987c12cd";
     this.User_Id = "5ed8d69fc2b07e09dcd16828";
   }

  ngOnInit(): void {
    this.Form = new FormGroup({
      _id: new FormControl(0),
      Asset_Group : new FormControl('', [Validators.required]),
      Spares : new FormControl(true),
      Company_Id : new FormControl(this.Company_Id),
      Created_By : new FormControl(this.User_Id),
      Last_Modified_By : new FormControl(''),
      Active_Status: new FormControl(true),
      If_Deleted: new FormControl(true),
      createdAt: new FormControl(''),
      updatedAt: new FormControl(''),
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
    }
    this.Form.patchValue(this.data.AssetGroupModel);
    
  }


  closeModal(){
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.Form.valid) {
      return false;
    } else {
      this.Service.commonCreateMethod(this.serviceName.asset_Group_Create,this.Form.value).subscribe(
        (res) => {
          if(res.Status){
            this.toastrService.successMessage(this.error.SUCCESS_MSG)
            this.closeModal();
          }else{
            this.toastrService.errorMessage(this.error.ERROR_MSG);
          }
        }, (error) => {
          this.toastrService.errorMessage(this.error.SERVER_ERROR);
        });
    }
  }

}
