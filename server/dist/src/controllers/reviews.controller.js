"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReviewsController = void 0;
var ReviewsController = /** @class */ (function () {
    function ReviewsController() {
        this.comentario = 'alo';
        this.today = {
            day: 8,
            month: "april",
            year: 2022
        };
        this.reviews = [
            {
                nome: "João",
                country: "Brazil",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Ana",
                country: "Argentina",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Lucas",
                country: "Eua",
                comment: this.comentario,
                date_of_comment: this.today,
            },
            {
                nome: "Chang",
                country: "China",
                comment: this.comentario,
                date_of_comment: this.today,
            }
        ];
    }
    ReviewsController.prototype.addReview = function (name, country, comment, date) {
        var newReview = {
            nome: name,
            country: country,
            comment: comment,
            date_of_comment: date
        };
        this.reviews.push(newReview);
    };
    ReviewsController.prototype.getAtractionReview = function (idReview) {
        return idReview;
    };
    ReviewsController.prototype.getAllReviews = function () {
        return this.reviews;
    };
    return ReviewsController;
}());
exports.ReviewsController = ReviewsController;
