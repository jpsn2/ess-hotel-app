export interface date{
    day: number;
    month: string;
    year: number;
}

export class User_review {
    nome!: string;
    country!: string;
    comment!: string;
    date_of_comment!: date;
    Like!: boolean;
    reviewID!: string;

    constructor(name :string, country :string, comment :string, date: date, like:boolean, reviewid: string) {
        this.nome = name;
        this.country = country;
        this.comment = comment;
        this.date_of_comment = date;
        this.Like = like;
        this.reviewID = reviewid;
    }
}
