import { Component, OnInit, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AssetService } from '../../../Services/Asset/asset.service';

@Component({
  selector: 'app-asset',
  templateUrl: './asset.component.html',
  styleUrls: ['./asset.component.css']
})
export class AssetComponent implements OnInit {

  submitted = false;
  Data;
  Company_Id;
  User_Id;
  Model_Id;
  AssManufacturer__Id;
  Asset_Group_Id;
  Asset_Sub_Group_Id; 
  Location_Id; 
  Purchase_Date; 
  Vendor_Name_Id; 
  Warranty_Start_Date;
  Warranty_End_Date; 
  Warranty_Coverage_Type; 
  Ownership_Type_Id; 
  Asset_Type_Id; 
  Maintanance_Stratagy_Id; 
  Asset_Allocated_Id;
  Warranty_period;

  Form: FormGroup;

  Asset = [
      {id: 1, name: 'Saravabakumar'},
      {id: 2, name: 'Kathir'},
    ];
 

  constructor(
    private router: Router,
    private ngZone: NgZone,
    private Service : AssetService
  ) {
    this.Company_Id = "5ed8bc9eba679310987c12cd";
    this.User_Id = "5ed8d69fc2b07e09dcd16828";
    this.Model_Id = "5ee9e5b722884c1684d975d2";
    this.AssManufacturer__Id = "5ee9e56322884c1684d975d1";
    this.Asset_Group_Id = "5ee89fc04e9176180c96ca72";
    this.Asset_Sub_Group_Id = "5ee9e51822884c1684d975d0";
    this.Location_Id = "5eea36fbcec7101868a40476";
    this.Vendor_Name_Id = "5eea082f267ab528280e10e6";
    this.Ownership_Type_Id = "5eea207c42975715d466131b";
    this.Asset_Type_Id = "5eea1fd642975715d466131a";
    this.Maintanance_Stratagy_Id = "5eea209642975715d466131c";
    this.Asset_Allocated_Id = "5eea409efed5d80d48129ffd";
    this.Purchase_Date = "12.05.2019";
    this.Warranty_Start_Date = "12.05.2019";
    this.Warranty_End_Date = "11.02.2021";
    this.Warranty_period = "24 Months";
    this.Warranty_Coverage_Type = "24 Months";
   }

  ngOnInit(): void {
    this.Form = new FormGroup({

      Asset_Nick_Name : new FormControl('', Validators.required),
      Serial_Number : new FormControl('', Validators.required),
      Asset_Code : new FormControl('', Validators.required),
      Model_Id : new FormControl(this.Model_Id, Validators.required),
      AssManufacturer__Id : new FormControl(this.AssManufacturer__Id, Validators.required),
      Asset_Group_Id : new FormControl(this.Asset_Group_Id, Validators.required),
      Asset_Sub_Group_Id : new FormControl(this.Asset_Sub_Group_Id, Validators.required),
      Location_Id : new FormControl(this.Location_Id, Validators.required),
      Purchase_Date : new FormControl(this.Purchase_Date, Validators.required),
      Price : new FormControl('', Validators.required),
      Invoice_Number : new FormControl('', Validators.required),
      Vendor_Name_Id : new FormControl(this.Vendor_Name_Id, Validators.required),
      Warranty_period : new FormControl(this.Warranty_period, Validators.required),
      Warranty_Start_Date : new FormControl(this.Warranty_Start_Date, Validators.required),
      Warranty_End_Date : new FormControl(this.Warranty_End_Date, Validators.required),
      Warranty_Coverage_Type : new FormControl(this.Warranty_Coverage_Type, Validators.required),
      Ownership_Type_Id : new FormControl(this.Ownership_Type_Id, Validators.required),
      Asset_Type_Id : new FormControl(this.Asset_Type_Id, Validators.required),
      Maintanance_Stratagy_Id : new FormControl(this.Maintanance_Stratagy_Id, Validators.required),
      Asset_Allocated_Id : new FormControl(this.Asset_Allocated_Id, Validators.required),
      Company_Id : new FormControl(this.Company_Id, Validators.required),
      Created_By : new FormControl(this.User_Id, Validators.required)
      
    })
  }

  onSubmit() {
    this.submitted = true;
    if (!this.Form.valid) {
      return false;
    } else {
      this.Service.CreateAssets(this.Form.value).subscribe(
        (res) => {
          console.log('Asset created successfully!')
          this.ngZone.run(() => this.router.navigateByUrl('/asset'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
