import { Component, OnInit, NgZone  } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { Subject } from 'rxjs';
import { FormGroup, Validators, FormControl } from '@angular/forms';
import { AssetSettingServiceService } from '../../../../Services/Asset-Settings/asset-setting-service.service';
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

  constructor(
    private modalService: BsModalService,
    private router: Router,
    private ngZone: NgZone,
    public Service: AssetSettingServiceService
  ) {  
     this.Company_Id = "5ed8bc9eba679310987c12cd";
     this.User_Id = "5ed8d69fc2b07e09dcd16828";
   }

  ngOnInit(): void {
    this.Form = new FormGroup({
      Asset_Group : new FormControl('', Validators.required),
      Spares : new FormControl(true),
      Company_Id : new FormControl(this.Company_Id, Validators.required),
      Created_By : new FormControl(this.User_Id, Validators.required)
    })
  }



  onSubmit() {
    this.submitted = true;
    if (!this.Form.valid) {
      return false;
    } else {
      this.Service.CreateAssetGroup(this.Form.value).subscribe(
        (res) => {
          console.log('Asset Group successfully created!')
          this.ngZone.run(() => this.router.navigateByUrl('/asettings'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
