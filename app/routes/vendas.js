/* ROUTES - VENDAS */

module.exports = application => {
  application.post("/vendas", function(req, res) {
    application.app.controllers.vendas.inserir(application, req, res);
  });

  application.get("/vendas", function(req, res) {
    application.app.controllers.vendas.consultar(application, req, res);
  });
};
