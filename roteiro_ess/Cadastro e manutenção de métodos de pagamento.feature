Cenário: cadastrando método de pagamento
    Dado eu estou na página "métodos de pagamentos"
    E vejo que não há o "método" que desejo
    Quando eu adiciono novo "método" nos "métodos de pagamentos"
    Então ainda estou na página "métodos de pagamentos"
    E vejo o "método" em "métodos de pagamentos"

Cenário: Falha no cadastro de um método de pagamento
    Dado eu estando na página "métodos de pagamentos"
    E vejo que há o "método" que desejo
    Quando eu adiciono novo "método" nos "métodos de pagamentos"
    E digito o "método" que desejo
    Então ainda estou na página "métodos de pagamentos"
    E vejo uma mensagem informando que não foi possível adicionar pois já existe
    E vejo o "métodos de pagamentos"