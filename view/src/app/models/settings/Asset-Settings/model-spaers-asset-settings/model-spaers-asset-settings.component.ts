import { Component, OnInit, Inject } from '@angular/core';
import { SparesComponent } from 'src/app/Components/Settings/Asset-Settings/SubComponents/spares/spares.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormGroup, FormControl, Validators } from '@angular/forms';

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

  spareTypeList: string[] = ['Accessories','Consumable'];

  constructor(public dialogRef: MatDialogRef<SparesComponent>,
    @Inject(MAT_DIALOG_DATA) private data) { 
      this.Company_Id = "5ed8bc9eba679310987c12cd";
      this.User_Id = "5ed8d69fc2b07e09dcd16828";
      this.headingDisplay='Create';
      this.displayButton='Submit';
    }

  ngOnInit(): void {
    this.Form = new FormGroup({
      _id: new FormControl(0),
      Spare_Name : new FormControl('',Validators.required),
      Spare_Type : new FormControl('', [Validators.required]),
      stockable : new FormControl(''),
      purchaseable : new FormControl(''),
      description : new FormControl(''),
      Company_Id : new FormControl(this.Company_Id, Validators.required),
      Created_By : new FormControl(this.User_Id, Validators.required)
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
  }

  closeModal(){
    this.dialogRef.close();
  }

  onSubmit(){
    
  }



}
