var express = require('express');
var router = express.Router();

var modelo = require('../model/model');

router.post('/',function(req,res,next){
	var username = req.body.username;
	var password = req.body.password;

	modelo.findOne({username:req.body.username},function(err1,data){
		if(data == null){
			res.json({success: false,message:'Usuario no encontrado'});
		}else if(data != null){
			if(data.password != req.body.password){
				res.json({success: false,message:'contraseña equivocada' });
			}else{
				res.json({success: true,message:'Usuario existente' });
			}
			
		}
	});
});

module.exports = router;