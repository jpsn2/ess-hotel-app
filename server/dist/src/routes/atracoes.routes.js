"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var atracoes_controller_1 = require("../controllers/atracoes.controller");
var atracoesroute = (0, express_1.Router)();
var atractionsController = new atracoes_controller_1.atracoesController();
atracoesroute.route('/')
    .get(function (req, res) {
    var allAtractions = atractionsController.getAllAtracoes();
    return res.send({ allAtractions: allAtractions });
});
atracoesroute.route('/:id')
    .get(function (req, res) {
    var id = req.params.id.toString();
    var atracao = atractionsController.getAtracaoByID(id);
    if (!atracao) {
        return res.status(404).send("No Reviews for this atractions or not found");
    }
    else {
        console.log(id, ' ', atracao);
        return res.send(atracao);
    }
}); //post para criar atracoes
exports.default = atracoesroute;
