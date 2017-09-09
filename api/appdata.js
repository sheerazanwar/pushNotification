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
    console.log("in");
    if(req.body.package==null || req.body.package==""){
        res.status(400).send({message:"package name missing"});
    }else{
    app.findOne({package:req.body.package}).select('-package').exec(function(error,result){
        if(error){
            res.status(500).send({error:error});
        }else{
                res.status(200).send({result});
        //         if(result.type!= "app"){
        //             res.status(200).send(result);
                
        //     }else{
        //         app.find().exec(function(error,data){
        //             if(error){
        //                 res.status(500).send(error);
        //             }else if(data.length>0){
        //                 console.log(data);
        //                 for(var i=0;i<data.length;i++)
        //                 {
        //                     if(data[i].type!="app"){
        //                         data[i].package = undefined;
        //                         res.status(200).send(data[i]);
        //                         res.end();
        //                     }
        //                 }   
        //             }else{
        //                 res.status(200).send("no data found");
        //             }
        //         })
        //     }

        // }
        // }
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