import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModelComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/model/model.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  Company_Id;
  User_Id;

  Form: FormGroup;

  manufacturerList: string[] = ['GE Medical', 'Siemens', 'Philips'];
  assetGroupList: string[] = ['Ventilators','X-Ray','Probe'];
  assetSubGroupList: string[] = ['Biomed','Radiology','RadioTheraphy'];

  constructor(public dialogRef: MatDialogRef<ModelComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
      this.headingDisplay='Create';
      this.displayButton='Submit';
      this.Company_Id = "5ed8bc9eba679310987c12cd";
      this.User_Id = "5ed8d69fc2b07e09dcd16828";
     }

  ngOnInit(): void {
    this.Form = new FormGroup({
      _id: new FormControl(0),
      Model_Name: new FormControl('',Validators.required),
      Manufacturer : new FormControl(''),
      Asset_Group : new FormControl(''),
      Asset_subGroup: new FormControl('')
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
  }

  closeModal(){
    this.dialogRef.close();
  }

  onSubmit(){
    
  }

}
