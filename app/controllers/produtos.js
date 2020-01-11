/* CONTROLLERS - PRODUTOS*/

module.exports.inserir = (application, req, res) => {
  var body = req.body;
  req.assert("nome", "'nome' deve conter entre 2 e 60 caracteres").len(2, 60);
  req.assert("preco", "'preco' deve ser numérico").notEmpty();

  var erros = req.validationErrors();

  if (erros) {
    res.send({ erros: erros });
    return;
  }

  var connection = application.config.dbConnection();
  var model = new application.app.models.ProdutosDAO(connection);

  model.inserir(body, (error, result) => {
    res.send(JSON.stringify(result ? result : error));
  });
};

module.exports.consultar = (application, req, res) => {
  var query = req.query;

  var connection = application.config.dbConnection();
  var model = new application.app.models.ProdutosDAO(connection);

  model.consultar(query.id, (error, result) => {
    res.send(JSON.stringify(result ? result : error));
  });
};
