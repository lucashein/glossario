module.exports = function(app){
	app.get('/', function(req,res){ //importando a var app que contem as requisições,passando app como parametro
		app.app.controllers.home.index(app,req,res);

	});
}
