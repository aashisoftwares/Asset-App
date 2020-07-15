import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

import { Subject } from 'rxjs';

@Component({
  selector: 'app-model-assetsubgroup-asset-settings',
  templateUrl: './model-assetsubgroup-asset-settings.component.html',
  styleUrls: ['./model-assetsubgroup-asset-settings.component.css']
})
export class ModelAssetsubgroupAssetSettingsComponent implements OnInit {

  bsModalRef: BsModalRef;

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

}
