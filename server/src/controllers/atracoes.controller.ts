import { Atracao } from "../models/atracao";

export class atracoesController {
  atracoes: Atracao[];

  constructor() {
    this.atracoes = [
      {
        id: "11a24b90",
        name: "Passeio de 1 dia com almoço em Angra dos Reis",
        images: [
          { url: "assets/images/atracao-1/1.jpg", alt: "photo-1" },
          { url: "assets/images/atracao-1/2.jpg", alt: "photo 2" },
          { url: "assets/images/atracao-1/3.jpg", alt: "photo 3" },
          { url: "assets/images/atracao-1/4.jpg", alt: "photo 4" },
          { url: "assets/images/atracao-1/5.jpg", alt: "photo 5" },
        ],
        title:
          "Um passeio para descobrir a costa e fazer um passeio de barco pelas ilhas locais",
        descriptions: [
          "Este passeio lhe dará a oportunidade de viajar para a cidade litorânea de Angra dos Reis e explorar a baía.",
          "Você partirá do Rio de Janeiro e fará um passeio de carro pela Costa Verde. Ao chegar em Angra dos Reis, você irá até o porto, onde poderá embarcar em um cruzeiro de barco de 4 horas ao redor da Ilha Grande. Você vai parar em 3 locais deslumbrantes para nadar e fazer mergulho com snorkel nas águas cristalinas e descobrir seus habitantes marinhos.",
          "Durante o cruzeiro, você também terá a oportunidade de conhecer a história da ilha e da baía. O capitão ancorará em uma pequena ilha, onde você poderá almoçar em um restaurante acolhedor. No final do passeio, você voltará ao porto de Angra dos Reis e seguirá para o Rio de Janeiro.",
        ],
        location: "Hotel Accomodare",
        day: "Segunda, 13 de Abril de 2023",
        hour: "Início: 07:00",
        ticketPrice: 202.33,
      },
      {
        id: "6cd29efa",
        name: "Passeio ao Cristo Redentor e Pão de Açúcar",
        images: [
          { url: "assets/images/atracao-2/1.jpg", alt: "photo-1" },
          { url: "assets/images/atracao-2/2.jpg", alt: "photo 2" },
          { url: "assets/images/atracao-2/3.jpg", alt: "photo 3" },
          { url: "assets/images/atracao-2/4.jpg", alt: "photo 4" },
          { url: "assets/images/atracao-2/5.jpg", alt: "photo 5" },
        ],
        title:
          "Um passeio de meio dia para explorar dois pontos turísticos famosos do Rio",
        descriptions: [
          "Este passeio guiado de meio dia lhe dará a chance de explorar algumas das principais atrações do Rio de Janeiro de uma só vez.",
          "Primeiro, você fará um passeio de teleférico para chegar ao topo do Pão de Açúcar. Você poderá apreciar as vistas do litoral e da Mata Atlântica. Na sequência, você embarcará em uma minivan e viajará pela Estrada das Paineiras através do Parque Nacional da Tijuca até o Monte Corcovado, onde está situada a estátua do Cristo Redentor. Você terá a oportunidade de tirar fotos do famoso monumento e apreciar o panorama da cidade.",
        ],
        location: "Hotel Accomodare",
        day: "Segunda, 14 de Abril de 2023",
        hour: "Início: 07:00",
        ticketPrice: 131.95,
      },
      {
        id: "7c14f2b5",
        name: "Visita ao Estádio do Maracanã e Museu do Futebol",
        images: [
          { url: "assets/images/atracao-3/1.jpg", alt: "photo-1" },
          { url: "assets/images/atracao-3/2.jpg", alt: "photo 2" },
          { url: "assets/images/atracao-3/3.jpg", alt: "photo 3" },
        ],
        title: "Uma visita ao famoso estádio e ao museu dedicado ao futebol",
        descriptions: [
          "Neste passeio, você terá a oportunidade de explorar o Estádio do Maracanã e o Museu do Futebol. Você poderá conhecer o passado e o presente do futebol nacional, ver os vestiários dos jogadores profissionais e imaginar o que os jogadores sentem quando entram em campo.",
          "Você poderá ver exposições interativas e descobrir os bastidores do estádio. No museu, você terá a chance de ver a coleção de artefatos de futebol e itens associados a partidas marcantes e jogadores famosos, como Garrincha, Zico e Pelé.",
        ],
        location: "Hotel Accomodare",
        day: "Segunda, 11 de Abril de 2023",
        hour: "Início: 10:00",
        ticketPrice: 300.95,
      },
      {
        id: "434ce4a2",
        name: "Passeio por Búzios com viagem de barco e almoço",
        images: [
          { url: "assets/images/atracao-4/1.jpg", alt: "photo-1" },
          { url: "assets/images/atracao-4/2.jpg", alt: "photo 2" },
          { url: "assets/images/atracao-4/3.jpg", alt: "photo 3" },
        ],
        title:
          "Um passeio de 1 dia para explorar os destaques de Búzios com um guia",
        descriptions: [
          "Neste passeio de 1 dia, você viajará do Rio de Janeiro para a cidade costeira de Búzios.",
          "O passeio começará com uma viagem de carro até Búzios. Ao longo do caminho, o guia contará fatos e compartilhará informações sobre a história e a cultura locais. Chegando em Búzios, você poderá explorar os destaques da cidade, incluindo a Praia da Tartaruga e a Rua das Pedras com várias lojas e restaurantes.",
          "Você poderá embarcar em um cruzeiro de barco de 3 horas ao largo da costa de Búzios e conhecer belas praias e paisagens ao redor. Além disso, você irá parar em um belo lugar para nadar e mergulhar com snorkel. No final do passeio, você viajará de volta para o Rio de Janeiro.",
        ],
        location: "Hotel Accomodare",
        day: "Segunda, 15 de Abril de 2023",
        hour: "Início: 6:00",
        ticketPrice: 137.02,
      },
      {
        id: "be789084",
        name: "Passeio à Rocinha e Vila Canoas",
        images: [
          { url: "assets/images/atracao-5/1.jpg", alt: "photo-1" },
          { url: "assets/images/atracao-5/2.jpg", alt: "photo 2" },
          { url: "assets/images/atracao-5/3.jpg", alt: "photo 3" },
        ],
        title: "Um passeio guiado pelas comunidades no Rio de Janeiro",
        descriptions: [
          "Este passeio guiado leva você para conhecer as comunidades da Rocinha e Vila Canoas, perto do bairro de São Conrado, no Rio de Janeiro. Em primeiro lugar, você conhecerá a Rocinha. Você descobrirá que esta é uma das maiores comunidades do Brasil.",
          "Você também aprenderá mais sobre a construção, os serviços públicos, a cultura local e festivais na Rocinha. Em seguida, você visitará o centro de artesanato da Rocinha. Aqui, você poderá comprar itens feitos à mão. Além disso, você subirá ao terraço de um morador local para admirar a vista da comunidade e do Rio de Janeiro.",
          "Depois, você passará pela Estrada da Gávea, que já foi um circuito de corrida de Fórmula 1. Você também visitará a Vila Canoas e conhecerá as áreas comerciais e residenciais da comunidade. Você ainda visitará a escola comunitária Moranguinhos ou Saci Sabe Tudo. Você descobrirá que essas escolas ensinam às crianças habilidades de informática, inglês, música e dança, além do ensino curricular. E após o passeio pelas comunidades, você passará por diversas praias da Zona Sul do Rio em seu caminho de volta.",
        ],
        location: "Hotel Accomodare",
        day: "Segunda, 17 de Abril de 2023",
        hour: "Início: 9:00",
        ticketPrice: 161.89,
      },
    ];
  }

  getAllAtracoes(): Atracao[] {
    return this.atracoes;
  }

  getAtracaoByID(atracaoId: string): Atracao {
    let atracao: Atracao = this.atracoes[0];

    for (let x in this.atracoes) {
      if (this.atracoes[x].id == atracaoId) {
        atracao = this.atracoes[x];
        break;
      }
    }

    return atracao;
  }
}
