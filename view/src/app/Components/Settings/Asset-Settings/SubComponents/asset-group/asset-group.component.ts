import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { BsModalService } from 'ngx-bootstrap/modal';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ModelAssetgroupAssetSettingsComponent } from "../../../../../models/settings/Asset-Settings/model-assetgroup-asset-settings/model-assetgroup-asset-settings.component";

@Component({
  selector: 'app-asset-group',
  templateUrl: './asset-group.component.html',
  styleUrls: ['./asset-group.component.css']
})
export class AssetGroupComponent implements OnInit {

  bsModalRef: BsModalRef;
  _Create: Boolean = false;
  _View: Boolean = false;
  _Edit: Boolean = false;
  _Delete: Boolean = false;

  Loader: Boolean = true;
  _List: any[] = [];

  constructor(
    private modalService: BsModalService
  ) { }

  ngOnInit(): void {
  }
  // Create New Account Type
  CreateAssetGroup() {
    const initialState = { Type: 'Create' };
    this.bsModalRef = this.modalService.show(ModelAssetgroupAssetSettingsComponent, {initialState});
      // this.bsModalRef.content.closeBtnName = 'Close';
        // {ignoreBackdropClick: true, class: '' }));
  }
}
