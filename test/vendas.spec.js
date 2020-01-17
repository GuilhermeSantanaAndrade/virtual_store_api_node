var chai = require("chai");
var assert = chai.assert;
var vendas = require("../app/controllers/vendas.js");
var app = require("../app.js");
var config = require("../config/server");

// Mocky para interceptar response
function Res() {
  this._value = undefined;
}
Res.prototype.send = function(input) {
  this._value = input;
};
Res.prototype.getSend = function() {
  return this._value;
};

describe("Testes do controller de vendas", function() {
  it("Verifica se o ID 1 retorna venda", function() {
    var req = { query: 1 };
    var res = new Res();

    vendas.consultar(config, req, res, function() {
      const result = res.getSend();

      assert.typeOf(result, "string", "'result' não retornou uma string");
      try {
        var arrResult = JSON.parse(result);
      } catch {
        assert.fail(`O retorno não foi um JSON válido: ${result}`);
      }
      assert.typeOf(arrResult, "array", "'arrResult' não retornou um array");
      assert.isOk(
        arrResult.filter(elem => elem.id === 1).length > 0,
        "Não foi encontrado elemento de ID 1 no retorno"
      );
      app.close();
    });
  });
});
