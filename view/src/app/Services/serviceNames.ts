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

    //GET LIST SERVICE FOR COMBO
    readonly asset_Group_Combo: string = 'assetgl/Asset_Group_List';
    readonly asset_subGroup_Combo: string = 'assetsgl/Asset_Sub_Group_List';
    readonly manufacturer_Combo: string = 'assetml/Manufacturer_List';
    readonly spare_type_Combo: string = 'assetstl/Spare_Type_List';
    readonly model_Combo: string = 'assetmol/Model_List';
    readonly spare_Combo: string = 'assetsl/Spares_List';
    readonly vendor_Combo: string = 'assetvl/Vendors_List';
    readonly asset_type_Combo: string = 'assettyl/Asset_Type_List';

    //POST LIST METHOD
    readonly asset_Group_List: string = 'assetgsl/Asset_Group_SList';
    readonly asset_subGroup_List: string = 'assetsgsl/Asset_Sub_Group_SList';
    readonly manufacturer_List: string = 'assetmsl/Manufacturer_SList';
    readonly spare_type_List: string = 'assetstsl/Spare_Type_SList';
    readonly model_List: string = 'assetmosl/Model_SList';
    readonly spare_List: string = 'assetssl/Spares_SList';
    readonly vendor_List: string = 'assetvsl/Vendors_SList';
    readonly asset_type_List: string = 'assettysl/Asset_Type_SList';

}