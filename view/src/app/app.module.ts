import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from "ngx-bootstrap/accordion";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";

import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule  } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
// import { MatDialog, MatDialogRef} from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CKEditorModule } from 'ng2-ckeditor';

import { LoginComponent } from './Components/Common-Components/login/login.component';
import { HeaderComponent } from './Components/Common-Components/header/header.component';
import { DashboardComponent } from './Components/Dashboard/dashboard/dashboard.component';
import { MainCompanySettingsComponent } from './Components/Settings/Company-Settings/main-company-settings/main-company-settings.component';
import { AssetComponent } from './Components/Assets/asset/asset.component';
import { ServiceComponent } from './Components/service/service.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { AssetGroupComponent } from './Components/Settings/Asset-Settings/SubComponents/asset-group/asset-group.component';
import { AssetSubGroupComponent } from './Components/Settings/Asset-Settings/SubComponents/asset-sub-group/asset-sub-group.component';
import { BranchComponent } from './Components/Settings/Company-Settings/SubComponents/branch/branch.component';
import { DepartmentComponent } from './Components/Settings/Company-Settings/SubComponents/department/department.component';
import { ManufacturerComponent } from './Components/Settings/Asset-Settings/SubComponents/manufacturer/manufacturer.component';
import { ModelComponent } from './Components/Settings/Asset-Settings/SubComponents/model/model.component';
import { SpareTypesComponent } from './Components/Settings/Asset-Settings/SubComponents/spare-types/spare-types.component';
import { SparesComponent } from './Components/Settings/Asset-Settings/SubComponents/spares/spares.component';
import { UsersComponent } from './Components/Settings/Users/users/users.component';
import { UsersPermissionsComponent } from './Components/Settings/UserPermissions/users-permissions/users-permissions.component';
import { UsersPermissionsGroupCreateComponent } from './Components/Settings/UserPermissions/users-permissions-group-create/users-permissions-group-create.component';
import { VendorsComponent } from './Components/Settings/Asset-Settings/SubComponents/vendors/vendors.component';
import { MainAssetSettingsComponent } from './Components/Settings/Asset-Settings/main-asset-settings/main-asset-settings.component';
import { CompanyInformationComponent } from './Components/Settings/Company-Settings/SubComponents/company-information/company-information.component';
import { ModelAssetgroupAssetSettingsComponent } from './models/settings/Asset-Settings/model-assetgroup-asset-settings/model-assetgroup-asset-settings.component'
import { AssetListComponent } from './Components/Assets/asset-list/asset-list.component';
import { AssetViewComponent } from './Components/Assets/asset-view/asset-view.component';
import { AssetsDetailsViewComponent } from './Components/Assets/assets-details-view/assets-details-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HeaderComponent,
    DashboardComponent,
    MainCompanySettingsComponent,
    AssetComponent,
    ServiceComponent,
    ReportsComponent,
    AssetGroupComponent,
    AssetSubGroupComponent,
    BranchComponent,
    DepartmentComponent,
    ManufacturerComponent,
    ModelComponent,
    SpareTypesComponent,
    SparesComponent,
    UsersComponent,
    UsersPermissionsComponent,
    UsersPermissionsGroupCreateComponent,
    VendorsComponent,
    MainAssetSettingsComponent,
    CompanyInformationComponent,
    ModelAssetgroupAssetSettingsComponent,
    AssetListComponent,
    AssetViewComponent,
    AssetsDetailsViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CalendarModule,
    ChipsModule,
    NgSelectModule,
    // MatDialog, 
    // MatDialogRef,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule,
    MatMenuModule,
    MatRadioModule,
    MatDatepickerModule,
    NgxMaterialTimepickerModule,
    MatProgressBarModule,
    MatSidenavModule,
    AppRoutingModule,
    TypeaheadModule.forRoot(),
    BsDropdownModule.forRoot(),
    CKEditorModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
