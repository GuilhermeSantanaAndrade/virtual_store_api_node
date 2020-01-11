/* CONTROLLERS - VENDAS */

module.exports.inserir = function(application, req, res) {
  var body = req.body;
  req.assert("data_hora", "'data_hora' não foi informado.").notEmpty();

  // ainda não validar produtos
  //req.assert("produtos", "'produtos' não foi informado");

  var erros = req.validationErrors();

  if (erros) {
    res.send({ erros: erros });
    return;
  }

  body.data_hora = new Date(body.data_hora);

  var connection = application.config.dbConnection();
  var model = new application.app.models.VendasDAO(connection);

  model.inserir(body, function(error, result) {
    res.send(JSON.stringify(result ? result : error));
  });
};

module.exports.consultar = function(application, req, res) {
  var query = req.query;

  var connection = application.config.dbConnection();
  var model = new application.app.models.VendasDAO(connection);

  model.consultar(query.id, function(error, result) {
    res.send(JSON.stringify(result ? result : error));
  });
};
