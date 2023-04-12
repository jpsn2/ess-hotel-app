export class Discount{
    id!: string
    titulo!: string
    text!: string
    price!: string
    realprice!: string
    imageUrl!: string

    constructor(
        id:string, titulo: string, text: string,
        price: string, realprice:string, imageUrl: string){

        this.id = id
        this.titulo = titulo
        this.text = text
        this.price = price
        this.realprice = realprice
        this.imageUrl = imageUrl
    }
}