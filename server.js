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
const company = require('./server/web/routes/Basic/companyregister.routes');
const usrcreate = require('./server/web/routes/Basic/user_crat');
const loginusr = require('./server/web/routes/Basic/lgn_user');
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
const location = require ('./Server/web/Routes/Settings/General/Location.routes');
const employee = require ('./Server/web/Routes/Settings/General/Employee.routes');
const locationl = require ('./Server/web/Routes/Settings/General/LocationList.routes');
const employeel = require ('./Server/web/Routes/Settings/General/EmployeeList.routes');
const asset = require ('./Server/web/Routes/Asset/Asset.routes');
const assetl = require ('./Server/web/Routes/Asset/AssetList.routes');

// Admin
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
app.use('/api/clocate', location);
app.use('/api/employee', employee);
app.use('/api/clocatel', locationl);
app.use('/api/employeel', employeel);
app.use ('/api/asset' , asset);
app.use ('/api/assetl' , assetl);

// Routes
app.get ('/' , (req, res) => {
    res.send ('<h3>This is a server page</h3>')
});

app.listen (port , () => {
    console.log ('Server started , running on' + port);
});