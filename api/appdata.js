var app = require('../models/appdata.js');
var path = require('path');

/*
add function to add application name and endPoint url for connectivity with azureNotificationHub
Perameters:
1: appName:String
2: appUrl:String    (endPoint Url)
 */

exports.add = function (req, res) {
  if (req.body.title == undefined || req.body.imageUrl == undefined) {
    res
      .status(404)
      .send({message: 'one or more perameters missing'});
  } else {
    new app({title: req.body.title, message: req.body.message, package:req.body.package, type: req.body.type,imageUrl: req.body.imageUrl})
      .save(function (err, app) {
        if (err) {
          res.send({error: err})
        } else {
          res.send(app);
        }
      });

  }
}


exports.getAppData = function (req, res) {
   // console.log("in");
    if(req.body.package==null || req.body.package==""){
         app.find({}).select('-package').exec(function(error,result){
        if(error){
            res.status(500).send({error:error});
        }else{
              if(result.length==0){
                res.status(200).send("nothing found");
              }else{
                console.log(result[0]);
                res.status(200).send(result[0]);
              }
        }
         })
    }else{
    app.find({ $and: [{ package: { $nin: req.body.package } }, { type: { $eq: 'app' } }] } ).exec(function(error,result){
      if(error){
        res.status(500).send({error:error});
      }else{
        console.log(result[0]);
        res.status(200).send(result[0]);
      }
    })
    }
}








// exports.package = function(req,res){
//   app
//     .findOne({'appName': req.body.appName})
//     .exec(function (error, resData) {
//       if(error){
//         res.status(500).send({error:error});
//       }else{
//         res.status(200).send({result:resData});
//       }
//     })
// }