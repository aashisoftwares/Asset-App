import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-asset-settings',
  templateUrl: './main-asset-settings.component.html',
  styleUrls: ['./main-asset-settings.component.css']
})
export class MainAssetSettingsComponent implements OnInit {
  Active_Tab = 'Asset_Group';
  constructor() { }

  ngOnInit(): void {
  }
  Active_Tab_Change(name) {
    this.Active_Tab = name;
  }
}
