
import { EnviroinmentService } from '../Services/enviroinments/enviroinment.service';
export class ServiceNames{

    readonly baseUrl:string='http://localhost:3000/api/';

    //CREATE SERVICE
    readonly asset_Group_Create: string = 'assetg/Asset_Group_Create';
    readonly asset_subGroup_Create: string = 'assetsg/Asset_Sub_Group_Create';
    readonly manufacturer_Create: string = 'assetm/Manufacturer_Create';
    readonly spare_type_Create: string = 'assetst/Spare_Type_Create';
    readonly model_Create: string = 'assetmo/Model_Create';
    readonly spare_Create: string = 'assets/Spares_Create';
    readonly vendor_Create: string = 'assetv/Vendors_Create';
    readonly asset_type_Create: string = 'assetty/Asset_Type_Create';
    readonly ownership_Create: string = 'assetow/Ownership_Type_Create';
    readonly maintenance_Create: string = 'assetms/Maintain_Stratagy_Create';

    //GET LIST SERVICE FOR COMBO
    readonly asset_Group_Combo: string = 'assetgl/Asset_Group_List';
    readonly asset_subGroup_Combo: string = 'assetsgl/Asset_Sub_Group_List';
    readonly manufacturer_Combo: string = 'assetml/Manufacturer_List';
    readonly spare_type_Combo: string = 'assetstl/Spare_Type_List';
    readonly model_Combo: string = 'assetmol/Model_List';
    readonly spare_Combo: string = 'assetsl/Spares_List';
    readonly vendor_Combo: string = 'assetvl/Vendors_List';
    readonly asset_type_Combo: string = 'assettyl/Asset_Type_List';
    readonly location_Combo: string = 'clocatel/Location_List';
    readonly ownership_Combo: string = 'assetowl/Ownership_Type_List';
    readonly maintenance_Combo: string = 'assetmsl/Maintain_Stratagy_List';
    readonly employee_Combo: string = 'employeel/Employee_List';

    //POST LIST METHOD
    readonly asset_Group_List: string = 'assetgsl/Asset_Group_SList';
    readonly asset_subGroup_List: string = 'assetsgsl/Asset_Sub_Group_SList';
    readonly manufacturer_List: string = 'assetmsl/Manufacturer_SList';
    readonly spare_type_List: string = 'assetstsl/Spare_Type_SList';
    readonly model_List: string = 'assetmosl/Model_SList';
    readonly spare_List: string = 'assetssl/Spares_SList';
    readonly vendor_List: string = 'assetvsl/Vendors_SList';
    readonly asset_type_List: string = 'assettysl/Asset_Type_SList';
    readonly ownership_List: string = 'assetowsl/Ownership_Type_SList';
    readonly maintenance_Strategy_List: string = 'assetmssl/Maintain_Stratagy_SList';

    //Edit service
    readonly asset_Group_Edit: string = 'assetge/Asset_Group_Edit';
    readonly asset_subGroup_Edit: string = 'assetsge/Asset_Sub_Group_Edit';
    readonly manufacturer_Edit: string = 'assetme/Manufacturer_Edit';
    readonly spare_type_Edit: string = 'assetste/Spare_Type_Edit';
    readonly model_Edit: string = 'assetmoe/Model_Edit';
    readonly vendor_Edit: string = 'assetve/Vendors_Edit';
    readonly spare_Edit: string = '';
    readonly ownership_Edit: string = 'assetowe/Ownership_Type_Edit';
    readonly maintenance_Edit: string = 'assetmse/Maintain_Stratagy_Edit';
    readonly asset_Type_Edit: string = 'assettye/Asset_Type_Edit';


   //DELETE METHOD
   readonly asset_Group_Delete: string = 'assetgr/Asset_Group_Remove';
   readonly asset_subGroup_Delete: string = 'assetsgr/Asset_Sub_Group_Remove';
   readonly manufacturer_Delete: string = 'assetmr/Manufacturer_Remove';
   readonly spare_type_Delete: string = 'assetstr/Spare_Type_Remove';
   readonly model_Delete: string = 'assetmor/Model_Remove';
   readonly spare_Delete: string = 'assetssl/Spares_SList';
   readonly vendor_Delete: string = 'assetvr/Vendors_Remove';
   readonly ownership_Delete: string = 'assetowr/Ownership_Type_Remove';
   readonly maintenance_Delete: string = 'assetmsr/Maintain_Stratagy_Remove';
   readonly asset_type_Delete: string = 'assettyr/Asset_Type_Remove';

}