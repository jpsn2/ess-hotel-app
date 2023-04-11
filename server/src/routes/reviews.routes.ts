import { ReviewsController } from './../controllers/reviews.controller';
import { Router, Request, Response } from 'express';
import { date } from '../models/reviews';

const reviews = Router();
const reviewsController = new ReviewsController();

// todas as rotas necessarias pras reviews
reviews.route('/')
    .get((req: Request, res: Response) => { 
        // rota para enviar todas as reviews disponiveis, creio que nao sera necessario
        let allReviews = reviewsController.getAllReviews();
        return res.send({ allReviews });
    })

reviews.route('/:id')
    .get((req: Request, res: Response) => { 
        // rota que retorna todas reviews de uma atracao especifica selecionada por id
        let id = Number(req.params.id);

        let atractionReviews = reviewsController.getAtractionReview(id);

        if (!atractionReviews) {
            return res.status(404).send("No Reviews for this atractions or not found");
        }
        else {
            return res.send(atractionReviews);
        }
    }).post((req: Request, res: Response) => {  
        // rota para criar novas reviews
        let nome: string = req.body.nome
        let country: string = req.body.country
        let comment: string = req.body.comment
        let data: date = req.body.date

        reviewsController.addReview(nome, country, comment, data);
        let allReviews = reviewsController.getAllReviews();
        return res.json(allReviews);
    })

export default reviews
