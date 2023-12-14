var Producto = /** @class */ (function () {
    function Producto(name, price) {
        this.price = price;
        this.name = name;
    }
    Producto.prototype.getPrice = function () {
        return this.price;
    };
    return Producto;
}());
var ProductoElectronico = /** @class */ (function () {
    function ProductoElectronico() {
        this.useBatteries = false;
    }
    ProductoElectronico.prototype.setUseBatteries = function (usa) {
        this.useBatteries = usa;
    };
    return ProductoElectronico;
}());
function main() {
    var iphone = new ProductoElectronico;
}
main();
