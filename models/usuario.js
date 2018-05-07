var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usuario = new Schema({
	name: String,
	username: String,
	edad: String,
	genero: String,
	provider: String, // Cuenta del usuario (Twitter o Facebook en este ejemplo)
	//Nos proporciona facebook y twitter
	provider_id : {type: String, unique: true},
	email: { type: String, lowercase: true},
	photo: String,
	token: String,
	createdAt : {type: Date, default: Date.now},
	teacher: Object,
	materias: Object,
	opciones: Object,
	contacto: Object,
	puntaje: Object,
	calificacion: Object,
	statusteacher: Boolean,

	//Cantidad de likes
	liketeacher: Object,

	//verificar si califique en usuario o no
	mycalification: Boolean,

	//verificar si likee algun teacher o no
	mylike: Boolean,

	//Para crear el random de all
	random: Number,

	//Para saber que profesores visite
	visitas: Object,

	//Saber si el usuario se olvido la clave y resetearlo
	resetPassword: Boolean,

	//Tener la direccion del usuario que se registra
	mydirecction: Object,

	//Las tareas publicadas
	tareas: Object


});

var User = mongoose.model('User', usuario);