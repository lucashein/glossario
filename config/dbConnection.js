var mysql = require('mysql');//requisição do módulo mysql

var connMySQL = function(){//variavel que contem a conexão com o banco
	console.log('Conexão com bd foi estabelecida');
		return mysql.createConnection({
			host:'localhost', //servidor
			user:'root', //usuario
			password:'root', //senha
			database:'portal_noticias', //qual database acessar
		});
}
module.exports = function(){
	console.log('O autoload carregou o módulo de conexao com bd')
	return connMySQL;//retorna a conexao com o banco
}
