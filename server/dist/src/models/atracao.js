"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Atracao = void 0;
class Atracao {
    constructor(id, name, images, title, descriptions, location, day, hour, ticketPrice) {
        this.id = id;
        this.name = name;
        this.images = images;
        this.title = title;
        this.descriptions = descriptions;
        this.location = location;
        this.day = day;
        this.hour = hour;
        this.ticketPrice = ticketPrice;
    }
}
exports.Atracao = Atracao;
