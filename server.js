const express = require ('express');
const mongoose = require('mongoose');
const cors = require ('cors');
const bodyParser = require ('body-parser');
const path = require('path');

const ErrorManagement = require('./Server/handling/ErrorHandling.js');
const LogManagement = require('./Server/handling/LogHandling.js');
//const AdminModel = require('./server/web/models/register.model');

const port = process.env.PORT || 3000

// Process On Every Error
process.setMaxListeners(0);
process.on('unhandledRejection', (reason, promise) => {
   ErrorManagement.ErrorHandling.ErrorLogCreation('', '', '', reason);
   console.log(reason);
   console.error("'Un Handled Rejection' Error Log File - " + new Date().toLocaleDateString());
});
process.on('uncaughtException', function (err) {
  console.log(err);
     ErrorManagement.ErrorHandling.ErrorLogCreation('', '', '', err.toString());
   console.error(" 'Un Caught Exception' Error Log File - " + new Date().toLocaleDateString());
});

// Database Connections
mongoose.connect('mongodb+srv://sara:sara@trainingcluster-9baia.mongodb.net/test?retryWrites=true&w=majority',  {  useNewUrlParser: true , useUnifiedTopology: true , useCreateIndex : true });

// Connection Failure
mongoose.connection.on('error', (err) => {
    ErrorManagement.ErrorHandling.ErrorLogCreation('', 'Mongodb Connection Error', 'Server.js', err);
   });

// Connection Success
mongoose.connection.on('connected', () => {
      console.log('DB Connectivity, Success!');
   });

const app = express();

// //Every request Log Creation
// app.use('/api/', function (req, res, next) {
//    if (req.body.Info !== '' && req.body.Info){
//       LogManagement.LogHandling.LogCreation(req);
//       return next();
//    }else {
//       ErrorManagement.ErrorHandling.ErrorLogCreation(req, 'Security Error For Every Request Log Creation', 'Server.js');
//       return res.status(406).send({Status: false, Message: 'Invalid Arguments'});
//    }
// });


// Middlewares
app.use (bodyParser.json());
app.use (cors());
app.use (bodyParser.urlencoded({extended : false}))
app.use (express.json());

// Routes Config
const company = require('./Server/web/Routes/Basic/companyregister.routes');
const usrcreate = require('./Server/web/Routes/Basic/user_crat');
const loginusr = require('./Server/web/Routes/Basic/lgn_user');
const assetgrp = require('./Server/web/Routes/Settings/Asset/Assetgroup.routes');
const assetsgrp = require('./Server/web/Routes/Settings/Asset/Assetsubgroup.routes');
const assetman = require('./Server/web/Routes/Settings/Asset/Manufacturer.routes');
const assetmo = require('./Server/web/Routes/Settings/Asset/Model.routes');
const assetspt = require('./Server/web/Routes/Settings/Asset/Sparetypes.routes');
const assetsp = require('./Server/web/Routes/Settings/Asset/spares.routes');
const assetven = require('./Server/web/Routes/Settings/Asset/vendors.routes');
const assettype = require ('./Server/web/Routes/Settings/Asset/Assettype.routes');
const assetown = require ('./Server/web/Routes/Settings/Asset/Ownershiptype.routes');
const assetms = require ('./Server/web/Routes/Settings/Asset/maintanencestratagy.routes');

const assetgrpe = require('./Server/web/Routes/Settings/AssetEdit/Assetgroupe.routes');
const assetsgrpe = require('./Server/web/Routes/Settings/AssetEdit/Assetsubgroupe.routes');
const assetmane = require('./Server/web/Routes/Settings/AssetEdit/Manufacturere.routes');
const assetmoe = require('./Server/web/Routes/Settings/AssetEdit/Modele.routes');
const assetspte = require('./Server/web/Routes/Settings/AssetEdit/Sparetypese.routes');
const assetspe = require('./Server/web/Routes/Settings/AssetEdit/sparese.routes');
const assetvene = require('./Server/web/Routes/Settings/AssetEdit/vendorse.routes');
const assettypee = require ('./Server/web/Routes/Settings/AssetEdit/Assettypee.routes');
const assetowne = require ('./Server/web/Routes/Settings/AssetEdit/Ownershiptypee.routes');
const assetmse = require ('./Server/web/Routes/Settings/AssetEdit/maintanencestratagye.routes');

const assetgrpr = require('./Server/web/Routes/Settings/AssetRemove/Assetgroupr.routes');
const assetsgrpr = require('./Server/web/Routes/Settings/AssetRemove/Assetsubgroupr.routes');
const assetmanr = require('./Server/web/Routes/Settings/AssetRemove/Manufacturerr.routes');
const assetmor = require('./Server/web/Routes/Settings/AssetRemove/Modelr.routes');
const assetsptr = require('./Server/web/Routes/Settings/AssetRemove/Sparetypesr.routes');
const assetspr = require('./Server/web/Routes/Settings/AssetRemove/sparesr.routes');
const assetvenr = require('./Server/web/Routes/Settings/AssetRemove/vendorsr.routes');
const assettyper = require ('./Server/web/Routes/Settings/AssetRemove/Assettyper.routes');
const assetownr = require ('./Server/web/Routes/Settings/AssetRemove/Ownershiptyper.routes');
const assetmsr= require ('./Server/web/Routes/Settings/AssetRemove/maintanencestratagyr.routes');

const assetgrpl = require('./Server/web/Routes/Settings/AssetList/Assetgroupl.routes');
const assetsgrpl = require('./Server/web/Routes/Settings/AssetList/Assetsubgroupl.routes');
const assetmanl = require('./Server/web/Routes/Settings/AssetList/Manufacturerl.routes');
const assetmol = require('./Server/web/Routes/Settings/AssetList/Modell.routes');
const assetsptl = require('./Server/web/Routes/Settings/AssetList/Sparetypesl.routes');
const assetspl = require('./Server/web/Routes/Settings/AssetList/sparesl.routes');
const assetvenl = require('./Server/web/Routes/Settings/AssetList/vendorsl.routes');
const assettypel = require ('./Server/web/Routes/Settings/AssetList/Assettypel.routes');
const assetownl = require ('./Server/web/Routes/Settings/AssetList/Ownershiptypel.routes');
const assetmsl = require ('./Server/web/Routes/Settings/AssetList/maintanencestratagyl.routes');
const assetgrpsl = require('./Server/web/Routes/Settings/AssetSimpleList/Assetgroupsl.routes');
const assetsgrpsl = require('./Server/web/Routes/Settings/AssetSimpleList/Assetsubgroupsl.routes');
const assetmansl = require('./Server/web/Routes/Settings/AssetSimpleList/Manufacturersl.routes');
const assetmosl = require('./Server/web/Routes/Settings/AssetSimpleList/Modelsl.routes');
const assetsptsl = require('./Server/web/Routes/Settings/AssetSimpleList/Sparetypessl.routes');
const assetspsl = require('./Server/web/Routes/Settings/AssetSimpleList/sparessl.routes');
const assetvensl = require('./Server/web/Routes/Settings/AssetSimpleList/vendorssl.routes');
const assettypesl = require ('./Server/web/Routes/Settings/AssetSimpleList/Assettypesl.routes');
const assetownsl = require ('./Server/web/Routes/Settings/AssetSimpleList/Ownershiptypesl.routes');
const assetmssl = require ('./Server/web/Routes/Settings/AssetSimpleList/maintanencestratagysl.routes');
const location = require ('./Server/web/Routes/Settings/General/Location.routes');
const employee = require ('./Server/web/Routes/Settings/General/Employee.routes');
const locationl = require ('./Server/web/Routes/Settings/General/LocationList.routes');
const employeel = require ('./Server/web/Routes/Settings/General/EmployeeList.routes');
const locationsl = require ('./Server/web/Routes/Settings/General/LocationSimpleList.routes');
const employeesl = require ('./Server/web/Routes/Settings/General/EmployeeSimpleList.routes');

//Asset Routes
const asset = require ('./Server/web/Routes/Asset/Asset.routes');
const assetl = require ('./Server/web/Routes/Asset/AssetList.routes');
const assetv = require ('./Server/web/Routes/Asset/AssetView.routes');
const assetm = require ('./Server/web/Routes/Asset/AssetMap.routes');
const assetr = require ('./Server/web/Routes/Asset/AssetRemove.routes');
const asseti = require ('./Server/web/Routes/Asset/AssetImg.routes');
const assete = require ('./Server/web/Routes/Asset/AssetEdit.routes');
const assetml = require ('./Server/web/Routes/Asset/AssetMapList.routes');

//Service
const servicec = require ('./Server/web/Routes/Service/Service.Create.routes');
const servicel = require ('./Server/web/Routes/Service/Service.List.routes');
const servicev = require ('./Server/web/Routes/Service/Service.View.routes');
const servicea = require ('./Server/web/Routes/Service/Service.Activity.routes');
const serviceal = require ('./Server/web/Routes/Service/Activity.List.routes');
const serviceu = require ('./Server/web/Routes/Service/Service.Update.routes');

// Route URLS
app.use('/api/company', company);
app.use('/api/user', usrcreate);
app.use('/api/userlgn', loginusr);

app.use('/api/assetg', assetgrp);
app.use('/api/assetsg', assetsgrp);
app.use('/api/assetm', assetman);
app.use('/api/assetmo', assetmo);
app.use('/api/assetst', assetspt);
app.use('/api/assets', assetsp);
app.use('/api/assetv', assetven);
app.use('/api/assetty', assettype);
app.use('/api/assetow', assetown);
app.use('/api/assetms', assetms);

app.use('/api/assetge', assetgrpe);
app.use('/api/assetsge', assetsgrpe);
app.use('/api/assetme', assetmane);
app.use('/api/assetmoe', assetmoe);
app.use('/api/assetste', assetspte);
app.use('/api/assetse', assetspe);
app.use('/api/assetve', assetvene);
app.use('/api/assettye', assettypee);
app.use('/api/assetowe', assetowne);
app.use('/api/assetmse', assetmse);

app.use('/api/assetgr', assetgrpr);
app.use('/api/assetsgr', assetsgrpr);
app.use('/api/assetmr', assetmanr);
app.use('/api/assetmor', assetmor);
app.use('/api/assetstr', assetsptr);
app.use('/api/assetsr', assetspr);
app.use('/api/assetvr', assetvenr);
app.use('/api/assettyr', assettyper);
app.use('/api/assetowr', assetownr);
app.use('/api/assetmsr', assetmsr);

app.use('/api/assetgl', assetgrpl);
app.use('/api/assetsgl', assetsgrpl);
app.use('/api/assetml', assetmanl);
app.use('/api/assetmol', assetmol);
app.use('/api/assetstl', assetsptl);
app.use('/api/assetsl', assetspl);
app.use('/api/assetvl', assetvenl);
app.use('/api/assettyl', assettypel);
app.use('/api/assetowl', assetownl);
app.use('/api/assetmsl', assetmsl);

app.use('/api/assetgsl', assetgrpsl);
app.use('/api/assetsgsl', assetsgrpsl);
app.use('/api/assetmsl', assetmansl);
app.use('/api/assetmosl', assetmosl);
app.use('/api/assetstsl', assetsptsl);
app.use('/api/assetssl', assetspsl);
app.use('/api/assetvsl', assetvensl);
app.use('/api/assettysl', assettypesl);
app.use('/api/assetowsl', assetownsl);
app.use('/api/assetmssl', assetmssl);

app.use('/api/clocate', location);
app.use('/api/employee', employee);
app.use('/api/clocatel', locationl);
app.use('/api/employeel', employeel);
app.use('/api/clocatesl', locationsl);
app.use('/api/employeesl', employeesl);

//Asset Routes
app.use ('/api/asset' , asset);
app.use ('/api/assetl' , assetl);
app.use ('/api/assetv' , assetv);
app.use ('/api/assetm' , assetm);
app.use ('/api/asseti' , asseti);
app.use ('/api/assetr' , assetr);
app.use ('/api/assete' , assete);
app.use ('/api/assetml', assetml);

//Service 
app.use ('/api/servicec', servicec);
app.use ('/api/servicel', servicel);
app.use ('/api/servicev', servicev);
app.use ('/api/servicea', servicea);
app.use ('/api/serviceal', serviceal);
app.use ('/api/serviceu', serviceu);


// Routes
app.get ('/' , (req, res) => {
    res.send ('<h3>This is a server page</h3>')
});

app.listen (port , () => {
    console.log ('Server started , running on' + port);
});