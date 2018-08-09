function NoticiasDAO(connection){
	this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback){
	this._connection.query('select*from palavra order by data_criacao desc', callback);//retorna essa função pela palavra this
}
NoticiasDAO.prototype.getNoticia = function(id_palavra, callback){
	this._connection.query('select*from palavra where id_palavra='+ id_palavra.id_palavra, callback);//retorna essa função pela palavra this
}
NoticiasDAO.prototype.salvarNoticia = function(palavra,callback){
	this._connection.query('insert into palavra set?',palavra, callback);//faz a inserção da noticia usando o query e passa a variavel noticia
}
NoticiasDAO.prototype.get5UltimasNoticias = function(callback){
	this._connection.query('select*from palavra order by data_criacao desc limit 5',callback);//executa o query com o comando passado mostrando as ultimas 5 noticias
}
NoticiasDAO.prototype.buscaNoticias = function(pesquisa, callback){
	this._connection.query("select*from palavra where titulo like '%" + pesquisa +"%'order by data_criacao desc",callback);//buscando no campo titulo com a cláusula like
}

NoticiasDAO.prototype.excluirNoticia = function(id_palavra, callback){
	this._connection.query("delete from palavra where id_palavra="+ id_noticia.id_noticia,callback);//exclui a noticia do BD pelo id dela
}

	module.exports = function(){
	return NoticiasDAO;//retorna a classe
}
