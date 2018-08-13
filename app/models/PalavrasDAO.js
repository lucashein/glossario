function PalavrasDAO(connection){
	this._connection = connection;
}

PalavrasDAO.prototype.getPalavras = function(callback){
	this._connection.query('select*from palavra order by data_criacao desc', callback);//retorna essa função pela palavra this
}
PalavrasDAO.prototype.getPalavra = function(id_palavra, callback){
	this._connection.query('select*from palavra where id_palavra='+ id_palavra.id_palavra, callback);//retorna essa função pela palavra this
}
PalavrasDAO.prototype.salvarPalavra = function(palavra,callback){
	this._connection.query('insert into palavra set?',palavra, callback);//faz a inserção da Palavra usando o query e passa a variavel Palavra
}
PalavrasDAO.prototype.get5UltimasPalavras = function(callback){
	this._connection.query('select*from palavra order by data_criacao desc limit 5',callback);//executa o query com o comando passado mostrando as ultimas 5 Palavras
}
PalavrasDAO.prototype.buscaPalavras = function(pesquisa, callback){
	this._connection.query("select*from palavra where titulo like '%" + pesquisa +"%'order by data_criacao desc",callback);//buscando no campo titulo com a cláusula like
}

PalavrasDAO.prototype.excluirPalavra = function(id_palavra, callback){
	this._connection.query("delete from palavra where id_palavra="+ id_palavra.id_palavra,callback);//exclui a Palavra do BD pelo id dela
}

	module.exports = function(){
	return PalavrasDAO;//retorna a classe
}
