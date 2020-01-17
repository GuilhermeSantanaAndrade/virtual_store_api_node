var app = require("./config/server");

module.exports = app.listen(3000, function() {
  console.log("Servidor ON");
});
