import { Router, Request, Response } from "express";
import { atracoesController } from "../controllers/atracoes.controller";


const atracoesroute = Router();
const atractionsController = new atracoesController();

atracoesroute.route('/')
    .get((req: Request, res: Response) => {
        let allAtractions = atractionsController.getAllAtracoes();
        return res.send({allAtractions});
    })

atracoesroute.route('/:id')
    .get((req: Request, res: Response) => {
        let id = req.params.id.toString();
        

        let atracao = atractionsController.getAtracaoByID(id);

        if (!atracao) {
            return res.status(404).send("No Reviews for this atractions or not found");
        }
        else {
            console.log(id, ' ', atracao);
            return res.send(atracao);
        }
        
        

    })//post para criar atracoes

export default atracoesroute
