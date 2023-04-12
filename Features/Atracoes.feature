Feature: Página com todas as informações de uma determinada Atração
        As a cliente
        I quero saber as informações de uma Atração
        So that eu possa planejar minnha viagem

    Scenario: Ver a página de "Atrações Accomodare"
        Given Eu estou na página "Inicial"
        When Eu seleciono “Atrações”
        Then Eu sou redirecionado para a página de "Atrações Accomodare"
        And Eu posso visualizar as Atracões "Passeio em Angra", "Visita ao Cristo Redentor" e "Um dia no Maracanã e Museu do Futebol"

    Scenario: Abrir página de "Atração"
        Given Eu estou na página de "Atrações Accomodare"
        And Eu vejo a atração "Passeio em Angra"
        When Eu seleciono a Atração "Passeio em Angra"
        Then Eu sou redirecionado para a página de "Atração"
        And Eu posso visualizar o título "Passeio em Angra"
        And Eu vejo os campos de "Horário" e "Local" preenchidos com os valores "Segunda, 13 de fevereiro de 2023" e "Hotel Rio Othon Palace"

    Scenario: Comprar ingresso de uma determinada "Atração"
        Given Eu estou na página da Atração "Visita ao Cristo Redentor"
        And Eu vejo a opção "Ingresso Único" e o valor "R$ 131.95"
        When Eu seleciono a opção "Comprar"
        Then eu sou redirecionado para a página de "Pagamento"
        And eu posso ver o campo "Total a pagar" com o valor "R$ 131.95"
    
