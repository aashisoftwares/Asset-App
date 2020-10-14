import { Component, OnInit, NgZone  } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormControl, FormGroupDirective, FormBuilder, FormGroup, NgForm, Validators,  FormArray, AbstractControl } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { LoginService } from 'src/app/Services/Login/login.service';
import { AssetService } from '../../../Services/Asset/asset.service';

@Component({
  selector: 'app-model-service',
  templateUrl: './model-service.component.html',
  styleUrls: ['./model-service.component.css']
})
export class ModelServiceComponent implements OnInit {

  ServiceForm : FormGroup;
  AssetDataList: any;

  constructor(
    private fb:FormBuilder,
    private router:Router,
    private ngZone:NgZone,
    private dialogRef : MatDialogRef<ModelServiceComponent>,
    private loginService: LoginService,
    private Asservice : AssetService
  ) { }

  ngOnInit(): void {
    this.ServiceForm = this.fb.group({
      Req_By: ['', Validators.required],
      Req_Num: ['', Validators.required],
      Problem_Description: ['', Validators.required],
      Req_Status: ['open'],
      priority: ['', Validators.required],
      severity: ['', Validators.required],
      Asset_ID: ['', Validators.required],
      Company_Id:[this.loginService.getcompanyId()],
      created_by: [this.loginService.getUserId()],
      Last_Modified_By: [this.loginService.getUserId()]
    });
    this.getassets();
  }

  closeModal(){
    this.dialogRef.close();
  }

getassets(){
  const Info = {'Company_Id':this.loginService.getcompanyId()};
  console.log (Info);
  this.Asservice.Asset_Simple_List(Info).subscribe(res => {
    const ResponseData = res;
    console.log (ResponseData)
    this.AssetDataList = ResponseData['Response'];
     });
};

onSubmit(){
  this.dialogRef.close({'value':this.ServiceForm.value})
};
}
