"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var discount_controller_1 = require("../controllers/discount.controller");
var discount = (0, express_1.Router)();
var discountController = new discount_controller_1.DiscountController();
discount.route('/')
    .get(function (req, res) {
    // rota para enviar todas as discounts disponiveis, creio que nao sera necessario
    var alldiscounts = discountController.getALLDiscounts();
    return res.send({ alldiscounts: alldiscounts });
});
discount.route('/:id')
    .get(function (req, res) {
    // rota que retorna o valor de um desconto específico, selecionada por id
    var id = Number(req.params.id);
}).post(function (req, res) {
    // rota para criar novos descontos
    var titulo = req.body.titulo;
    var text = req.body.text;
    var price = req.body.price;
    var imageUrl = req.body.imageUrl;
    discountController.addDiscount(titulo, text, price, imageUrl);
    var alldiscounts = discountController.getALLDiscounts();
    return res.json(alldiscounts);
});
exports.default = discount;
