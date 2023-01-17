var Veículos = /** @class */ (function () {
    function Veículos(c, a, d) {
        this.cor = c;
        this.ano = a;
        this.doc_ok = d;
    }
    Veículos.prototype.exibirDocs = function () {
        console.log("O ve\u00EDculo tem a cor ".concat(this.cor, ", ano ").concat(this.ano, " e o documento est\u00E1 ").concat(this.doc_ok, " "));
    };
    return Veículos;
}());
var veiculo = new Veículos("Verde", 2022, true);
veiculo.exibirDocs();
var Carros = /** @class */ (function () {
    function Carros() {
    }
    return Carros;
}());
var Motos = /** @class */ (function () {
    function Motos() {
    }
    return Motos;
}());
