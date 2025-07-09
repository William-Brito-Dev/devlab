Capitulo 13

Aula 00 - O que vamos ver nesse módulo?

- Teoria das cores
- Tipografia
- Uso das CSS
- Modelo de Caixas
- Construção de site


Aula 01 - Psicologia das cores

- Cores são extremamente importante para o desenvolvimento.
Uso da cor azul
- azul: ligação com competência, profissionalismo, segurança.
- Vermelho: amor, raiva.
- Amarelo: felicidade.
- Verde: saúdo, natureza, sorte.
- Rosa: sentimental, doce.
- Marrom: robustes, amizade.
- Preto com branco causa um cansaço visual. 
- As cores represem coisas.


Aula 02 - Representando as cores usando CSS3

- A primeira forma de representar cores é usando o nome.
- A segunda é usando código hexadecimal.
- A terceira forma é usando o código RGB.
- A quarta forma é usando o hsl 
- Todas cores possuem três elementos: matiz (h), saturação (s), luminosidade (l)
- Toda cor é formada por um conjunto de cores vermelho, verde e azul.

Aula 03 - Circulo cromâtico 

- Representação usando cores RGB é o mais comum.
- Usar as 12 cores principais.
- Usado para harmonia de cores.
- Simetria e cor são muito importante.
- Cores primárias: amarelo, vermelho e azul. Formam um triângulo.
- Cores secundárias: laranja, verde e viioleta.
- Cores terciarias: são as misturas das cores primárias e secundárias. 
- Para nomear. usamos a cor primária e depois a secundária.

Temperatura de cores 

- podemos dividir o circulo cromatico em cores frias e quentes.
- Sempre criar ums paelta dde cores para sites.

- geralmente uma paleta tem de 3 a 5 cores. Rocomendado usar 4 cores.

Cores complementares 
- São cores contrárias que constratam com outra

Cores análogas 
- São cores que não tem um contraste tão grande entre si.
- Misturar as cores vizinhas.

Cor análoga e outra complementar
- Criam um degradê.
- Pegam duas vizinhas e pula uma.

Cores intercaladas
- Pega uma cor e pula outra e pega outra.

Cores triáticas
- Usa uma cor e pula três. Faz isso três vezes.

Cores em quadrado 
- Pega uma cor e pula duas.

Cores tetradicas 
- Pega 2 cores complementares.

Monocromia
- Usa apenas uma cor modifcando apenas duas coisas: saturação e luminosidade.


Aula 04 - Paleta de cores 

Ferramentas 
color.adobe.com 
paletton.com
coolors.com


Modo de cores 

RGB - monitores 
CMYK - impressoras
HSV - hue (matriz), saturation (saturação) e value (valor) ou  Brightness (brilho).

paletton.com

- Consegue simular uma paleta de cores aplicada a um site.

coolors.com

- Sugere paletas aleatoriamente.


Aula 05 - Como capturar cores da tela?

Maneira 01: capturar tela e usar o conta-gota do Gimp.
Maneira 02: usando a extensão colorZilla.


Aula 06 - Como criar degradê com CSS?

- Usamos background-image: linear-gradient para criar degrades.
- Usamos direções para indicar as direções das cores.
- Configuração global: usamos o * para aplicar a todos os elementos.
- Background-attachment: fixed fixa o fundo do background.
- radial-gradient: muda o formato do degradê.


Aula 07 - Criando um exemplo real

- tag main é usado para colocar o conteúdo principal.


Capitulo 14 
Aula 01 - Primeiros passos em Tipografia

- Durante os século 15 os monges copistas copiavam os livros à mão
- Gutenberg cria a presa mêcanica para facilitar a cópias de livros
- Daí suurge a necessidade de criar novas letra criando assim a tipografia
- tipografia - typos (impressão) + graphia (escrita)
- O tipo de letra também influencia as pessoas


Aula 02 - Anatomia do tipo

Anatomia do tipo
- Time new romans é a padrão da geande maioria dos navegadores
- Saber se as medidas se aplicam simetricamente.
- A letra X minusculo é a altura base de todas as letras.
- A altura das minusculas é o restante superior da letra.
- Acendente e descendetes
- Altura do corpo  é a soma de todas as medidas.

Anatomicos geometricos 

- Prolongamento das fontes é chamado de serifa.
- Nem todas as fontes tem serifa.
- Astes e arcos.
- esporão servem para "sugurar" a letra.
- Vértice.
- Terminal. 

Anatomicos corporais
- Braço
- Perna
- Pé
- Espinha 
- barriga
- Olho
- orelha
- cauda

- Glifo são as letras.
- Quando pegamos todos os glifos de uma familia chamados isso de "fonte."
- Existem conjuntos glifos para familia.
- Nem toda fonte tem essas varoações.

Categoria de fontes
- Classificamos as famílias em: serifadas, sans-serif, monoespaçada (pode ser com serifa ou sem), handwriting (escrita a mão) e fontes comemorativas ou display. 
- A recomendação para a impressão em tela é serifa. Para as fontes em sites a recomendação é sans-serif.
- Ao acessar um site o usuário quer ler sem desconforto então é importante usar uma boa fonte e um bom contraste.


Aula 03 - Familias de fontes com CSS

- Nem todo pc vai ter a fonte especificada.
- Devemos colocar fontes que existam no dispositivo.
- Usamos as safe combinatons para garantir que as fontes sejam especificadas.
- podemos usar no font-family: serif - os dispositivos iram utilizar uma fonte serifada.
- Podemos usar no font-family: sans-serif - os dispositivos iram utiilzar uma fonte sem serifa.
- Podemos usar no font-family: monospace - os dispositivos iram utilizar uma fonte monoespaçada.

**CSS web safe combinations


Aula 04 - Tamanho de fontes e suas medidas

Existem algumas formas de usarmos o font-size:
-Temos medidas absolutas: cm, mm, in (inch), px, pt (point), pc (paica).
- Por conta dos tamanhos de telas as fontes podem variar em tamanho.
- Pt e pc não são recomendados para exibir em impressõ em tela.

Temos medidas relativas: em, ex, rem, vw (viewidth), vh (viewhieght) 
- em é ralativo ao tamanho de M maiusculo de uma fonte.
- ex é ralativo ao tamanho da altura x de uma fonte.
- relativa ao tamanho da fonte que está configurada no body.
- Largura da viewport ou largura do tamanho da tela.
- Altura da viewport ou altura do tamanho da tela.

- Recomendável sempre usar px e em.
- Não pode ter espaço entre o número e a unidade de medida.
- Geralmente 16px é o tamanho normal da fonte.
- 16px geralmente é o tamanho de 1em que é ralativo ao tamanho da fonte.
- Por ser relativo, em é mais recomendável para visualizar em várias telas.


Aula 05 - Peso, estilo e shorthand font

- Peso é quando fazemos as fontes ficam mais "magras" ou "gordas".
- Usamos font-weight para definir o peso da fonte.
- Existem vários tipos de pesos: lighter, normal, bold e bolder.
- Também existe variações númericas para pesos: começa em 100 - 900.
- A maioria das fontes não tem todas as variações.
- font-style: italic, normal.
- Text-decoration: italic, bold e underline.
- Essas quatro configuração são muito utilizadas.
- Shorthand (mãozinha) simplifica esses 4 elementos em "font".
- deve ser declarado na seguinte ordem - font: font-style, font-wieght, font-size, font family.
- Propriedades shorthand são utilizadas para declarar regras em uma unica linha.
- Não existe shorthand para tudo.
- 


**Usar as recomendações do W3C
