"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Discount = void 0;
var Discount = /** @class */ (function () {
    function Discount(id, titulo, text, price, realprice, imageUrl) {
        this.id = id;
        this.titulo = titulo;
        this.text = text;
        this.price = price;
        this.realprice = realprice;
        this.imageUrl = imageUrl;
    }
    return Discount;
}());
exports.Discount = Discount;
