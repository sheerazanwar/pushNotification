var express=require('express');
var router=express.Router();
var path=require('path');
var user=require('../api/push.js');
var app=require('../api/appdata.js');


router.post('/add',user.add);
router.post('/push/:appName',user.sendPushNotification);
router.post('/push/:packageName',user.package);


router.post('/addapp',app.add);
router.get('/getapp/:package',app.getAppData);

module.exports=router;
