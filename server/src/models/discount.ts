export class Discount{
    titulo!: string
    text!: string
    price!: string
    imageUrl!: string

    constructor(titulo: string, text: string, price: string, imageUrl: string){
        this.titulo = titulo
        this.text = text
        this.price = price
        this.imageUrl = imageUrl
    }
}