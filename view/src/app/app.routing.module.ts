import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from "./Components/Common-Components/login/login.component";
import { DashboardComponent } from "./Components/Dashboard/dashboard/dashboard.component";
import { AssetComponent } from "./Components/Assets/asset/asset.component";
import { AssetListComponent } from "./Components/Assets/asset-list/asset-list.component";
import { ServiceComponent } from "./Components/service/service.component";
import { ReportsComponent } from "./Components/reports/reports.component";
import { MainCompanySettingsComponent } from "./Components/Settings/Company-Settings/main-company-settings/main-company-settings.component";
import { MainAssetSettingsComponent } from "./Components/Settings/Asset-Settings/main-asset-settings/main-asset-settings.component";
import { UsersComponent } from "./Components/Settings/Users/users/users.component";
import { UsersPermissionsComponent } from "./Components/Settings/UserPermissions/users-permissions/users-permissions.component";
import { UsersPermissionsGroupCreateComponent } from "./Components/Settings/UserPermissions/users-permissions-group-create/users-permissions-group-create.component";
import { AssetViewComponent } from './Components/Assets/asset-view/asset-view.component';

const appRoutes: Routes = [
  {
    path:'',
    component : LoginComponent,
  },
  {
    path:'login',
    component : LoginComponent,
  },
  {
    path:'dashboard',
    component : DashboardComponent,
  },
  {
    path:'asset',
    component : AssetListComponent,
  },
  {
    path : 'asset_create',
    component : AssetComponent,
  },
  {
    path : 'asset_view',
    component : AssetViewComponent,
  },
  {
    path:'service',
    component : ServiceComponent,
  },
  {
    path:'reports',
    component : ReportsComponent,
  },
  {
    path:'csettings',
    component : MainCompanySettingsComponent,
  },
  {
    path:'asettings',
    component : MainAssetSettingsComponent,
  },
  {
    path:'usettings',
    component : UsersComponent,
  },
  {
    path:'User_Permissions',
    component : UsersPermissionsComponent,
  },
  {
    path:'User_Permissions_Group_Create',
    component : UsersPermissionsGroupCreateComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
