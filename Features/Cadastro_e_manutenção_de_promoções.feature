
Scenario: Escolher primeira oferta da lista
Given eu estou na página "descontos'
and vejo as opções de atrações com desconto
and desejo comprar uma das atrações ofertadas
when eu clico no botão 'COMPRAR AGORA"
then eu sou redirecionado para a página de pagamento

Scenario: Ir para a lista de todas as ofertas
given: Estou na página inicial
and Eu quero ver todos os descontos
and eu vejo o botão "Desconto" na barra de navegação no topo da página
when eu clico no botão "Desconto", sou redirecionádo para a página contendo os descontos
and eu vejo quatro descontos mas nenhum deles me interessa
and eu vejo um botão "Ver Mais" no fundo da página
when eu clico no botão "Ver Mais" sou redirecionado para a página "extendido"
then eu consigo ver uma lista com todas as ofertas


Scenario: Comprar uma oferta que não está sendo exibida na primeira página
given: Estou na página inicial
and Eu quero ver todos os descontos
and eu vejo o botão "Desconto" na barra de navegação no topo da página
when eu clico no botão "Desconto", sou redirecionádo para a página contendo os descontos
and eu vejo quatro descontos mas nenhum deles me interessa
and eu vejo um botão "Ver Mais" no fundo da página
when eu clico no botão "Ver Mais" sou redirecionado para a página "extendido"
then eu consigo ver uma lista com todas as ofertas
and desejo comprar uma das atrações ofertadas
when eu clico no botão 'COMPRAR AGORA"
then eu sou redirecionado para a página de pagamento