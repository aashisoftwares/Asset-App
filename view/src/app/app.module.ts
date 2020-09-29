import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA, Injectable } from '@angular/core';
import { AppRoutingModule } from './app.routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ModalModule } from 'ngx-bootstrap/modal'; 
import { AccordionModule } from "ngx-bootstrap/accordion";
import { TypeaheadModule } from "ngx-bootstrap/typeahead";
import { BsDropdownModule } from "ngx-bootstrap/dropdown";
import { ToastrModule } from 'ngx-toastr';

import { CalendarModule } from 'primeng/calendar';
import { ChipsModule } from 'primeng/chips';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule  } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatMenuModule } from '@angular/material/menu';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { CKEditorModule } from 'ng2-ckeditor';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule} from '@angular/material/table';
import { MatNativeDateModule, NativeDateAdapter,DateAdapter, MAT_DATE_FORMATS } from '@angular/material/core';
import { MatMomentDateModule } from "@angular/material-moment-adapter";

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
import { from } from 'rxjs';
//POP UP
import { ModelAssetsubgroupAssetSettingsComponent } from './models/settings/Asset-Settings/model-assetsubgroup-asset-settings/model-assetsubgroup-asset-settings.component';
import { ModelSparetypesAssetSettingsComponent } from './models/settings/Asset-Settings/model-sparetypes-asset-settings/model-sparetypes-asset-settings.component';
import { ModelVendorsAssetSettingsComponent } from './models/settings/Asset-Settings/model-vendors-asset-settings/model-vendors-asset-settings.component';
import { ModelSpaersAssetSettingsComponent } from './models/settings/Asset-Settings/model-spaers-asset-settings/model-spaers-asset-settings.component';
import { ModelManufacturerAssetSettingsComponent } from './models/settings/Asset-Settings/model-manufacturer-asset-settings/model-manufacturer-asset-settings.component';
import { ModelModelAssetSettingsComponent } from './models/settings/Asset-Settings/model-model-asset-settings/model-model-asset-settings.component';
import { ServiceNames } from './Services/serviceNames';
import { ConstantFile } from './Services/constantFile';
import { AssetTypesComponent } from './Components/Settings/Asset-Settings/SubComponents/asset-types/asset-types.component';
import { OwnershipTypesComponent } from './Components/Settings/Asset-Settings/SubComponents/ownership-types/ownership-types.component';
import { MaintenanceStrategyComponent } from './Components/Settings/Asset-Settings/SubComponents/maintenance-strategy/maintenance-strategy.component';
import { ModelAssetTypeAssetSettingsComponent } from './models/settings/Asset-Settings/model-asset-type-asset-settings/model-asset-type-asset-settings.component';
import { ModelOwnershipTypeAssetSettingsComponent } from './models/settings/Asset-Settings/model-ownership-type-asset-settings/model-ownership-type-asset-settings.component';
import { ModelMaintenanceStrategyAssetSettingsComponent } from './models/settings/Asset-Settings/model-maintenance-strategy-asset-settings/model-maintenance-strategy-asset-settings.component';
import { CommonService } from './Services/CommonService/common.service';

export class AppDateAdapter extends NativeDateAdapter {

  format(date: Date, displayFormat: Object): string {

      if (displayFormat === 'input') {

          const day = date.getDate() <= 9 ? '0' + date.getDate() : date.getDate();
          const month = (date.getMonth() + 1) <= 9 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
          const year = date.getFullYear();

          return `${day}-${month}-${year}`;
      }

      return date.toDateString();
  }
}
const MY_DATE_FORMATS = {
  parse: {
      dateInput: { month: 'short', year: 'numeric', day: 'numeric' }
  },
  display: {
      dateInput: 'input',
      monthYearLabel: { year: 'numeric', month: 'short' },
      dateA11yLabel: { year: 'numeric', month: 'long', day: 'numeric' },
      monthYearA11yLabel: { year: 'numeric', month: 'long' },
  }
};
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
    AssetListComponent,
    AssetViewComponent,
    AssetsDetailsViewComponent,
    //POP UP
    ModelAssetgroupAssetSettingsComponent,
    ModelAssetsubgroupAssetSettingsComponent,
    ModelSparetypesAssetSettingsComponent,
    ModelVendorsAssetSettingsComponent,
    ModelSpaersAssetSettingsComponent,
    ModelModelAssetSettingsComponent,
    ModelManufacturerAssetSettingsComponent,
    AssetTypesComponent,
    OwnershipTypesComponent,
    MaintenanceStrategyComponent,
    ModelAssetTypeAssetSettingsComponent,
    ModelOwnershipTypeAssetSettingsComponent,
    ModelMaintenanceStrategyAssetSettingsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    MatIconModule,
    ReactiveFormsModule,
    AppRoutingModule,
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CalendarModule,
    ChipsModule,
    NgSelectModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
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
    CKEditorModule,
    MatPaginatorModule,
    MatTableModule,
    MatNativeDateModule,
    MatMomentDateModule,
    ToastrModule.forRoot({ 
      timeOut: 3000,
      positionClass: 'toast-top-center',
      preventDuplicates: true,
      closeButton: true,
      }),
  ],
  providers: [ServiceNames,ConstantFile,CommonService,
    { provide: DateAdapter, useClass: AppDateAdapter },
    { provide: MAT_DATE_FORMATS, useValue: MY_DATE_FORMATS },MatDatepickerModule
    ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
    NO_ERRORS_SCHEMA
  ],
  entryComponents: [
        ModelAssetsubgroupAssetSettingsComponent  
                    ]
})
export class AppModule { }
