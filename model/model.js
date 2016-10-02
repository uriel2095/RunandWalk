var mongoose = require ('mongoose');
var schema =  mongoose.Schema;


var Modelo = new schema({
	apellido: String,
	apellido_m: String,
	Sobrenombre: String,
	Actividad: String
});

var Register = mongoose.model('Register',Modelo);
module.exports= Register;