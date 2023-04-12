import { Router, Request, Response } from 'express';
import { DiscountController } from '../controllers/discount.controller';

const discount = Router()
const discountController = new DiscountController()

discount.route('/')
    .get((req: Request, res: Response) => { 
        // rota para enviar todas as discounts disponiveis, creio que nao sera necessario
        let alldiscounts = discountController.getALLDiscounts();
        return res.send({ alldiscounts })
    })

discount.route('/:id')
    .get((req: Request, res: Response) => { 
        // rota que retorna o valor de um desconto específico, selecionada por id
        let id = req.params.id.toString()

        let discount = discountController.getpricebyid(id);

        return res.send(discount);


    }).post((req: Request, res: Response) => {  
        // rota para criar novos descontos
        let id: string = req.body.id
        let titulo: string = req.body.titulo
        let text: string = req.body.text
        let price: string = req.body.price
        let realprice: string = req.body.realprice
        let imageUrl: string = req.body.imageUrl

        discountController.addDiscount(id,titulo, text, price, realprice, imageUrl);
        let alldiscounts = discountController.getALLDiscounts();
        return res.json(alldiscounts);
    })

export default discount



