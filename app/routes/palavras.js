module.exports = function(app){
		app.get('/palavras', function(req,res){
			app.app.controllers.palavras.palavras(app,req,res);

		});

		app.get('/palavra', function(req,res){
				app.app.controllers.palavras.palavra(app,req,res);

			});
		app.post('/busca',function(req,res){
			app.app.controllers.palavras.busca(app,req,res);

		});
		app.get('/excluir', function(req, res){
			app.app.controllers.palavras.excluir(app,req,res);
		});


};
