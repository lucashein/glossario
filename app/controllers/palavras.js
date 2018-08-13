module.exports.palavras=function(app,req,res){
	var connection = app.config.dbConnection();//conexao com o banco
	var palavrasModel = new app.app.models.PalavrasDAO(connection);


	palavrasModel.getPalavras(function(error,result){
		res.render("palavras/palavras",{palavras:result});
	});
}

module.exports.palavra=function(app,req,res){

	var connection = app.config.dbConnection();
	var palavrasModel = new app.app.models.PalavrasDAO(connection);

	if (req.query.id_palavra) {
		var id_palavra = req.query; //recebe o parametro enviado pelas views que contem o id da noticia a ser exibido
	} else {
		res.redirect("/palavras")
		return;
	}

	palavrasModel.getPalavra(id_palavra,function(error,result){
		res.render("palavras/palavra",{palavra:result});

	});
}
module.exports.busca=function(app, req, res) {
			var pesquisa = req.body.pesquisa;
			var connection = app.config.dbConnection();
			var palavrasModel = new app.app.models.PalavrasDAO(connection);

			palavrasModel.buscaPalavras(pesquisa,function(erro,result){//executando metodo, passando a var de pesquisa como parametro para a busca no BD
				res.render('palavras/palavras',{palavras:result});
			});
}
module.exports.excluir=function(app,req,res){//exporta a exlusão da noticia selecionada
	var pesquisa = req.body.pesquisa;// variavel que recebe as informações do body-parse
	var connection = app.config.dbConnection();//realizando a conexão com o banco
	var palavrasModel = new app.app.models.PalavrasDAO(connection);//inicializa as pesquisar do mysql

	if (req.query.id_palavra) {//faz a verificação para ver se ja existe uma noticia como parametro
		var id_palavra = req.query; // passa o parametro
	}else{
		res.redirect("/palavras")
		return;
	}

	palavrasModel.excluirPalavra(id_palavra,function(erro,result){
		res.redirect("/palavras")
	});

}
