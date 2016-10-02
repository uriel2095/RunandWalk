var express = require('express');
var router = express.Router();

var modelo = require('../model/model');

router.get('/',function(req,res,next){

	modelo.find({},function(err1,data){
		if(err1)
			console.log(err1);
		res.json(data);
	});
});

router.get('/:id',function(req,res,next){
	var id = req.params.id;

	modelo.findById(id,function(err1,data){
		if(err1)
			console.log(err1);
		res.json(data);
	});
});



router.post('/',function(req,res,next){
		modelo.create(req.body,function(err1,data){
			if(err1)
				console.log(err1);
			res.json(data);
		});
});

router.put('/:id',function(req,res,next){
	var id = req.params.id;
	modelo.findById(id,function(err,data){
		if(err)
			console.log(err);
		data.Actividad = req.body.Actividad;
		modelo.update(id,data,function(err1,newdata){
			if(err1)
				console.log(err1);
			res.json(newdata);
		});
	});
});
router.delete('/:id',function(req,res,next){
	var id= req.params.id;

	modelo.findByIdAndRemove(id,function(err,data){
		if(err)
			console.log(err);
		res.json(data);
	});
});


module.exports=router;