module.exports.noticias=function(app,req,res){
	var connection = app.config.dbConnection();//conexao com o banco
	var noticiasModel = new app.app.models.NoticiasDAO(connection);


	noticiasModel.getNoticias(function(error,result){
		res.render("noticias/noticias",{palavras:result});
	});
}

module.exports.noticia=function(app,req,res){

	var connection = app.config.dbConnection();
	var noticiasModel = new app.app.models.NoticiasDAO(connection);

	if (req.query.id_noticia) {
		var id_noticia = req.query; //recebe o parametro enviado pelas views que contem o id da noticia a ser exibido
	} else {
		res.redirect("/noticias")
		return;
	}

	noticiasModel.getNoticia(id_noticia,function(error,result){
		res.render("noticias/noticia",{palavra:result});

	});
}
module.exports.busca=function(app, req, res) {
			var pesquisa = req.body.pesquisa;
			var connection = app.config.dbConnection();
			var noticiasModel = new app.app.models.NoticiasDAO(connection);

			noticiasModel.buscaNoticias(pesquisa,function(erro,result){//executando metodo, passando a var de pesquisa como parametro para a busca no BD
				res.render('noticias/noticias',{palavras:result});
			});
}
module.exports.excluir=function(app,req,res){//exporta a exlusão da noticia selecionada
	var pesquisa = req.body.pesquisa;// variavel que recebe as informações do body-parse
	var connection = app.config.dbConnection();//realizando a conexão com o banco
	var noticiasModel = new app.app.models.NoticiasDAO(connection);//inicializa as pesquisar do mysql

	if (req.query.id_noticia) {//faz a verificação para ver se ja existe uma noticia como parametro
		var id_noticia = req.query; // passa o parametro
	}else{
		res.redirect("/noticias")
		return;
	}

	noticiasModel.excluirNoticia(id_palavra,function(erro,result){
		res.redirect("/noticias")
	});

}
