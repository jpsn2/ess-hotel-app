import { date, User_review } from '../models/reviews';

export class ReviewsController {
    reviews: User_review[];
    today: date = {
        day: 8,
        month: "april",
        year: 2022
    };

    constructor() {
        this.reviews = [
            {
                nome: "João",
                country: "Brazil",
                comment: 'Amei a atração! Super divertida e emocionante!',
                date_of_comment: this.today,
                Like: true,
                reviewID: '11a24b90',
            },
            {
                nome: "Ana",
                country: "Argentina",
                comment: 'A atração é legal, mas poderia ser melhor. Faltou um pouco de emoção.',
                date_of_comment: this.today,
                Like: true,
                reviewID: '11a24b90',
            },
            {
                nome: "Lucas",
                country: "Eua",
                comment: 'A atração é muito boa para famílias com crianças. Todo mundo se diverte.',
                date_of_comment: this.today,
                Like: false,
                reviewID: '11a24b90',
            },
            {
                nome: "Chang",
                country: "China",
                comment: 'Foi uma experiência única! Adorei cada minuto.',
                date_of_comment: this.today,
                Like: true,
                reviewID: '11a24b90',
            }
        ]
    }

    addReview(name: string, country: string, comment: string, date: date, like: boolean, id: string) {
        const newReview: User_review = {
            nome : name,
            country: country,
            comment: comment,
            date_of_comment: date,
            Like: like,
            reviewID: id,
        }

        this.reviews.push(newReview);
    }

    getAtractionReview(idReview: any){
        return idReview;
    }

    getAllReviews(){
        return this.reviews;
    }
}