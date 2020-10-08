import { Component, OnInit, TemplateRef, NgZone,ElementRef, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AssetService } from '../../../Services/Asset/asset.service';

@Component({
  selector: 'app-asset-view',
  templateUrl: './asset-view.component.html',
  styleUrls: ['./asset-view.component.css']
})
export class AssetViewComponent implements OnInit {

  Active_Tab;
  Asset_Id;
  Assetdetail: any= [];

  constructor(
    private active_route: ActivatedRoute,
    private router: Router,
    private service : AssetService
  ) { 
    this.getAssetData();
  }

  ngOnInit(): void {
  }

  Active_Tab_Change(name) {
    this.Active_Tab = name;
    }

//Asset Data View
getAssetData(){
  this.active_route.url.subscribe(u => {
    this.Asset_Id =  this.active_route.snapshot.params['_id'];
    const Info = {'Asset_Id':this.Asset_Id}
    this.service.Asset_View(Info).subscribe(res => {
      const ResponseData = res;
      console.log(ResponseData)
      this.Assetdetail = ResponseData['Response'];
       });
  });
}
}
