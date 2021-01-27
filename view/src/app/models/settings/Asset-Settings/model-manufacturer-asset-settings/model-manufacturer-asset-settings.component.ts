import { Component, OnInit, Inject } from '@angular/core';
import { ManufacturerComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/manufacturer/manufacturer.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  Company_Id;
  User_Id;

  Form: FormGroup;

  assetGroupList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];

  constructor(public dialogRef: MatDialogRef<ManufacturerComponent>,
    @Inject(MAT_DIALOG_DATA) private data) {
      this.headingDisplay='Create';
      this.displayButton='Submit';
      this.Company_Id = "5ed8bc9eba679310987c12cd";
      this.User_Id = "5ed8d69fc2b07e09dcd16828";
     }

  ngOnInit(): void {
    this.Form = new FormGroup({
      _id: new FormControl(0),
      Manufacturer : new FormControl('', Validators.required),
      Asset_Group : new FormControl('', Validators.required),
      Company_Id : new FormControl(this.Company_Id, Validators.required),
      Created_By : new FormControl(this.User_Id, Validators.required)
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
    }else if(this.data.Mode=='view'){
      this.disableSubmitButton=true;
      this.headingDisplay='View';
    }else if(this.data.Mode='edit'){
      this.disableSubmitButton=false;
      this.headingDisplay='Edit';
      this.displayButton='Update';
    };
  }

  onSubmit(){
    
  }

}
