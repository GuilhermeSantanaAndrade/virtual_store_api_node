/* MODEL - VENDAS */

function VendasDAO(connection) {
  this._connection = connection;
  this._id = -1;
  this._data_hora = new Date();
}

VendasDAO.prototype.inserir = function(venda, callback) {
  this._connection.query("Insert into vendas set ? ", venda, callback);
};

VendasDAO.prototype.consultar = function(id, callback) {
  var sql = "Select id, data_hora from vendas";
  if (id) {
    sql += ` where id = ${id}`;
  }

  this._connection.query(sql, callback);
};

module.exports = function() {
  return VendasDAO;
};
