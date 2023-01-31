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

Cenário: Falha no modificação de um método de pagamento
    Dado eu estando na página "métodos de pagamentos"
    E vejo que há o "método" que desejo modificar
    Quando eu seleciono o "método" nos "métodos de pagamentos"
    E modifico o "método" para um que já existe
    Então ainda estou na página "métodos de pagamentos"
    E vejo uma mensagem informando que não foi possível modificar pois já existe o "método"
    E vejo o "métodos de pagamentos" sem qualquer mudança

Cenário: Modificando método de pagamento
    Dado eu estou na página "métodos de pagamentos"
    E vejo que o "método" que desejo está desatualizado
    Quando eu seleciono o "método" nos "métodos de pagamentos"
    E modifico o "método"
    Então ainda estou na página "métodos de pagamentos"
    E vejo a mensagem, "método" modificado
    E vejo o "método" em "métodos de pagamentos"