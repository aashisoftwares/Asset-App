import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { FormGroup, Validators, FormControl, AbstractControl } from '@angular/forms';
import { map } from 'rxjs/operators';

import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap';

@Component({
  selector: 'app-model-branch-companysettings',
  templateUrl: './model-branch-companysettings.component.html',
  styleUrls: ['./model-branch-companysettings.component.css']
})
export class ModelBranchCompanysettingsComponent implements OnInit {
 
  AllCountry: any[];
  AllStateOfCountry: any[];
  AllCityOfState:  any[];

  constructor( 
    public bsModalRef: BsModalRef,
    private modalService: BsModalService,
  ) { }

  ngOnInit(): void {
  }

}
