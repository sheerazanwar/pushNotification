var express=require('express');
var router=express.Router();
var path=require('path');
var user=require('../api/push.js');


router.post('/add',user.add);
router.post('/push/:appName',user.sendPushNotification);

module.exports=router;
