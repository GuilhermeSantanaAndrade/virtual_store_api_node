/* ROUTES - PRODUTOS */

module.exports = application => {
  application.get("/produtos", function(req, res) {
    application.app.controllers.produtos.consultar(application, req, res);
  });

  application.post("/produtos", function(req, res) {
    application.app.controllers.produtos.inserir(application, req, res);
  });
};
