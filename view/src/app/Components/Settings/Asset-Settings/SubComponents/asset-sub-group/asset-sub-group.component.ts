import { Component, OnInit } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModelAssetsubgroupAssetSettingsComponent } from "../../../../../models/settings/Asset-Settings/model-assetsubgroup-asset-settings/model-assetsubgroup-asset-settings.component";

@Component({
  selector: 'app-asset-sub-group',
  templateUrl: './asset-sub-group.component.html',
  styleUrls: ['./asset-sub-group.component.css']
})
export class AssetSubGroupComponent implements OnInit {
  
  bsModalRef: BsModalRef;
  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }

  CreateAssetSubGroup() {
    const initialState = { Type: 'Create' };
    this.bsModalRef = this.modalService.show(ModelAssetsubgroupAssetSettingsComponent, Object.assign({initialState}, {ignoreBackdropClick: true, class: '' }));
  }

}
