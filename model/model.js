var mongoose = require ('mongoose');
var schema =  mongoose.Schema;



//var hash = require('mongoose-hash');


var Modelo = new schema({
	
	username: String,
    password:  String, 
	apellido: String,
	apellido_m: String,
	Sobrenombre: String,
	Actividad: String
});




var Register = mongoose.model('Register',Modelo);
module.exports= Register;