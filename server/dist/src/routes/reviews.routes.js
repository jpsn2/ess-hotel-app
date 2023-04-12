"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var reviews_controller_1 = require("./../controllers/reviews.controller");
var express_1 = require("express");
var reviews = (0, express_1.Router)();
var reviewsController = new reviews_controller_1.ReviewsController();
// todas as rotas necessarias pras reviews
reviews.route('/')
    .get(function (req, res) {
    // rota para enviar todas as reviews disponiveis, creio que nao sera necessario
    var allReviews = reviewsController.getAllReviews();
    return res.send({ allReviews: allReviews });
});
reviews.route('/:id')
    .get(function (req, res) {
    // rota que retorna todas reviews de uma atracao especifica selecionada por id
    var id = Number(req.params.id);
    var atractionReviews = reviewsController.getAtractionReview(id);
    if (!atractionReviews) {
        return res.status(404).send("No Reviews for this atractions or not found");
    }
    else {
        return res.send(atractionReviews);
    }
}).post(function (req, res) {
    // rota para criar novas reviews
    var nome = req.body.nome;
    var country = req.body.country;
    var comment = req.body.comment;
    var data = req.body.date;
    reviewsController.addReview(nome, country, comment, data);
    var allReviews = reviewsController.getAllReviews();
    return res.json(allReviews);
});
exports.default = reviews;
