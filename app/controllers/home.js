module.exports.index = function(app,req,res){
	var connection = app.config.dbConnection();
	var palavrasModel = new app.app.models.PalavrasDAO(connection);

	palavrasModel.get5UltimasPalavras(function(error,result){
		res.render("home/index", {palavra:result});//renderiza a pagina como resposta
	});
}
