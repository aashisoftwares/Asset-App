import { Component, OnInit, Inject } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { AssetSubGroupComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/asset-sub-group/asset-sub-group.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ServiceNames } from 'src/app/Services/serviceNames';
import { ToastrServiceService } from 'src/app/Services/toastr-service/toastr-service.service';
import { AssetSettingServiceService } from 'src/app/Services/Asset-Settings/asset-setting-service.service';
import { ConstantFile } from 'src/app/Services/constantFile';

@Component({
  selector: 'app-model-assetsubgroup-asset-settings',
  templateUrl: './model-assetsubgroup-asset-settings.component.html',
  styleUrls: ['./model-assetsubgroup-asset-settings.component.css']
})
export class ModelAssetsubgroupAssetSettingsComponent implements OnInit {

  bsModalRef: BsModalRef;

  //Create, Edit, Save and Update button name change based on the place
  headingDisplay: string;
  displayButton: string;
  disableSubmitButton: boolean = false;
  setInfoForm: boolean = false;

  Company_Id;
  User_Id;

  subGroupForm: FormGroup;

  assetGroupList = [];

  constructor(private modalService: BsModalService,
    public dialogRef: MatDialogRef<AssetSubGroupComponent>,
    @Inject(MAT_DIALOG_DATA) private data,
    private toastrService: ToastrServiceService,
    private serviceName: ServiceNames,
    private Service: AssetSettingServiceService,
    private constant: ConstantFile) {
    this.headingDisplay = 'Create';
    this.displayButton = 'Submit';
    this.Company_Id = "5ed8bc9eba679310987c12cd";
    this.User_Id = "5ed8d69fc2b07e09dcd16828";
  }

  ngOnInit(): void {
    this.subGroupForm = new FormGroup({
      _id: new FormControl(0),
      Asset_Sub_Group: new FormControl('', [Validators.required]),
      Asset_Group_Id: new FormControl(''),
      Asset_Group_Name: new FormControl('',[Validators.required]),
      Company_Id: new FormControl(this.Company_Id),
      Created_By: new FormControl(this.User_Id),
      Last_Modified_By: new FormControl(''),
      Active_Status: new FormControl(true),
      If_Deleted: new FormControl(false)
    });
    this.fetchDataIntoForm();
  }

  fetchDataIntoForm() {
    if (this.data.Mode == 'add') {
      this.headingDisplay = 'Create';
      this.displayButton = 'Submit';
      this.setInfoForm = false;
    } else if (this.data.Mode == 'view') {
      this.disableSubmitButton = true;
      this.headingDisplay = 'View';
      this.setInfoForm = true;
    } else if (this.data.Mode = 'edit') {
      this.disableSubmitButton = false;
      this.headingDisplay = 'Edit';
      this.displayButton = 'Update';
      this.setInfoForm = true;
    }
    if (this.setInfoForm) {
      this.subGroupForm.patchValue(this.data.SubGroupModel);
      this.subGroupForm.controls.Asset_Group_Name.setValue(this.data.SubGroupModel.Asset_Group_Id.Asset_Group);
      this.subGroupForm.controls.Asset_Group_Id.setValue(this.data.SubGroupModel.Asset_Group_Id._id);
    }
  }

  closeModal() {
    this.dialogRef.close();
  }

  onSubmit() {
    if (!this.subGroupForm.valid) {
      return false;
    } else {
      this.Service.commonCreateMethod(this.serviceName.asset_subGroup_Create, this.subGroupForm.value).subscribe(
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
  
  getAssetGroupList() {   
    this.Service.commonGetListMethod(this.serviceName.asset_Group_Combo).subscribe(
      data => {
        this.assetGroupList = data;
      }
    )
  };

  setAssetGroupValue(event){
    this.subGroupForm.controls.Asset_Group_Id.setValue(event._id);
    this.subGroupForm.controls.Asset_Group_Name.setValue(event.Asset_Group);

  }

}
