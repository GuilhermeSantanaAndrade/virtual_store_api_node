function ProdutosDAO(connection) {
  this._connection = connection;
  this._id = -1;
  this.nome = "";
  this.descricao = "";
  this._preco = 0;
  this._imagemPath = "";
}

ProdutosDAO.prototype.consultar = function(id, callback) {
  var sql = "select id, nome, descricao, preco, imagemPath from Produtos";
  if (id) {
    sql += ` where id = ${id}`;
  }

  this._connection.query(sql, callback);
};

ProdutosDAO.prototype.inserir = function(produto, callback) {
  var sql = "insert into Produtos set ?";

  this._connection.query(sql, produto, callback);
};

module.exports = function() {
  return ProdutosDAO;
};
