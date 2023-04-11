"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const atracoes_controller_1 = require("../controllers/atracoes.controller");
const atracoesroute = (0, express_1.Router)();
const atractionsController = new atracoes_controller_1.atracoesController();
atracoesroute.route('/')
    .get((req, res) => {
    let allAtractions = atractionsController.getAllAtracoes();
    return res.send({ allAtractions });
});
atracoesroute.route('/:id')
    .get((req, res) => {
    let id = req.params.id.toString();
    let atracao = atractionsController.getAtracaoByID(id);
    if (!atracao) {
        return res.status(404).send("No Reviews for this atractions or not found");
    }
    else {
        console.log(id, ' ', atracao);
        return res.send(atracao);
    }
}); //post para criar atracoes
exports.default = atracoesroute;
