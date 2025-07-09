
Matéria: HTML/CSS

# **Capitulo 06**

Aula 01 - Você tem o direito de usar qualquer imagem no seu site?

Aula 02 - Quais são os formatos de para imagens na web?

- **Jpeg:** Compacta imagens. Qualidade menor, porém maior compactação.
- **Png:** Não permite animação, porém permite transparência. Qualidade maior.
- Uso de cada tipo de imagem depende do uso.

Aula 03 - O tamanho de uma imagem importa para um site?

- Arquivo tamanho grande (pesado): >1500px >2mb >70px
- Arquivo tamanho ideal: <=1500px  <=1mb <= 70px
- Sites lentos não aparecem tanto no Google.

Aula 04 - A tag img em HTML5

- <img>: tag para inseir imagem.
- src (source): caminho de onde está a imagem.
- alt: texto alternativo usado para acessibilidade.

Exemplo:

```markdown
<img src=”caminho-da-imagem/imagem” alt=”texto-alternativo”>
```

Aula 05 - Como mudar o favicon de um site

- Utilizar imagens que não tenham tantos detalhes.
- Favicon deve sempre estar no header.
- Recomedável ter o nome "favicon.ico".

Exemplo:

```markdown
<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home | William Brito</title>
    <<link rel="icon" href="caminho/favicon.ico" type="image/x-icon">
```

Capitulo 07

Aula 01 -  Hierarquia de títulos

- As tag de H1 a H6 têm uma ordem de precedência.
- H1 é título de primeiro nível.
- H2 é o subtítulo de H1 e assim sucessetivamente.

Exemplo:

```html
<h1>Título primário</h1>
<h2>Título secundário</h2>
<h3>Título terciário</h3>
<h4>Título quaternário</h4>
<h5>Título quinário</h5>
<h6>Título senário</h6>
```

Capítulo 08

Aula 01 - Semântica da HTML

- Semântica: tem mais valor o significado do que a forma.

 html5 obsolete tags - W3C

Aula 02 - Negrito e Itálico

Existem duas maneiras de colocar o negrito

Forma não semântica:

- Usando o "bold - <b>" direto no conteúdo.
- Usando o "italic - <i>" direto no contúdo.

Forma semântica:

- Usando a tag <strong> que é semântica.
- Usando a tag <em> que é semântica direto no conteúdo.

—Atalho usando o envelopamento (shift+p)

Aula 03 - Formatações adicionais em HTML

- Usamos tag **<mark>** para marcar uma palavra.
- A tag **<small>** tem sentido para continuar sendo usada por isso não está em desuso.
- Texto excluido usamos a tag **<del>**. Pode ser lido, porém está excluido.
- Podemos usar a tag **<ins>** para dizer que um texto foi inserido, que é semântica. Já a tag **<u>** não é semântica.
- Texto sobrescrito usamos **<sub>**.
- Texto subescrito usamos a tag **<sup>**.

Exemplo:

```markdown
Este texto está com <mark>esta</mark> palavra marcada.
Este texto tem <small>essa</small> paravra pequena.
<del>Texto excluído, porém pode ser lido</del>
<ins>ins</ins> é semântico <u>u</u> não é.
Para escrever uma fórmula matemática as vezes precisamos sobreescrver um número: 2<sub>3</sub>.
As vezes também precisamos subescrever um número x<sup>2</sup>.
```

Aula 04 - citações e códigos

- Podemos usar a tag **<code>** quando quisermos exibir um código ao usuário. Ele não organiza o código dentro da identação.

Exemplo 

```markdown
<code> 
	<!DOCTYPE html>
	<html lang="pt-br">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Home | William Brito</title>
 </code>
```

- Tag **<pre>** mostra o texto pré-formatado.

Exemplo

```markdown
<pre>Tudo o que estiver aqui dentro está pre-formatado</pre>
```

- Se quisermos usar o código identado podemos usar o **<code> + <pre>**.
- Usamos a tag "quote **<q>**" para usar uma citações simples.
- Usamos a tag "citação de bloco - **<blockquote>** para fazer uma citação completa. Dá para citar o link da matéria (melhora a busca de SEO usando o atributo cite).
- Podemos abreviar siglas usando a tag **<abb>**. Melhora a busca de SEO.
- A tag <**bdo com os valores dir=”ltr” (left to right) ou dir=”rtl” (right to left)**> inverter o texto de acordo com essas duas direções.

—Atalho para remover a tabulação no início do código (shift+tab).

Exemplo de código pré-formatado **<code> + <pre>**

```markdown
<code><pre>
<!DOCTYPE html>
	<html lang="pt-br">
	<head>
	    <meta charset="UTF-8">
	    <meta name="viewport" content="width=device-width, initial-scale=1.0">
	    <title>Home | William Brito</title>
</code></pre>
```

Exemplo de citação simples **<q>**

```markdown
<q> Esquecer é uma necessidade. A vida é uma lousa, em que o destino, para escrever um novo caso, precisa de apagar o caso escrito. 
Machado de Assis </q>
```

Exemplo citação em bloco **<blockquote>**

```markdown
<blockquote> Mas a saudade é isto mesmo; é o passar e repassar das memórias antigas. 
- Dom Casmurro, Assis de Machado. <bloquote>
```

Exemplo do uso da tag  **<abb>**

```markdown
<abb>HTML</abb> é a abreviação de Hyper Text Markup Language.
```

Exemplo de uso da tag **<bdo>**

```markdown
<bdo dir="ltr"> Este texto está escrito da esquerda para a direita. </bdo>
<bdo dir="rtl"> Este texto está escrito da direita para a esquerda. </bdo>
```

# Capitulo 09

Aula 01 - Listas em HTML

- Usamos a tag <"Ordernad List - **ol**"> para colocar nossos itens em uma lista ordenada.
- Usamos a tag <"List Items - **li**"> para listar os itens dentro de nossa lista ordenada. A partir do HTML5 não há necessidade de fechar a tag, é opcional. Usamos o atributo type para especificar a marcador da lista:
    - **1** - inícia a partir do número 1.
    **a** - inícia a partir da letra a minúscula.
    **A** - inícia a partir da letra A maiuscúla.
     **i** - inícia a lista com números romanos.
- Usamos a tag <Unorded list - **ul**> dos quais os itens não precisam estar ordenado.
- Usamos a tag <**li**> dentro de **ul**. Há alguns tipos de marcadores para Ol:
    - disc - padrão.
    - circle - bolinha.
    - square - quadrado.

 Exemplo de Ordernad List (ol) com vários tipos de marcadores:

```markdown
<ol type="1">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<ol type="a">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>

<ol type="I">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ol>
```

Exemplo de Unorder list (ul) com vários tipos de marcadores:

```markdown
<ul type="circle">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<ul type="square">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>

<ul type="disc">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul>
```

Aula 02 - listas mistas e de definições

- Podemos usar <li> dentre de <ol> e <li> dentro de <ol>.
- Usamos a tag <dl> para definir termos de itens usando uma lista.
- Usamos **<dt>** para os termos.
- Usamos **<dd>** para definições

Exemplo de lista mista:

```markdown
<ul>
  <li>Item não ordenado 1</li>
  <li>Item não ordenado 2</li>
  <ol>
    <li>Item ordenado 1</li>
    <li>Item ordenado 2</li>
  </ol>
  <li>Item não ordenado 3</li>
</ul>
```

Lista de termos 

```markdown
<dl>
  <dt>HTML</dt>
  <dd>Linguagem de Marcação de Hipertexto usada para criar páginas web.</dd>
  <dt>CSS</dt>
  <dd>Linguagem de Folhas de Estilo em Cascata usada para estilizar páginas web.</dd>
  <dt>JavaScript</dt>
  <dd>Linguagem de programação usada para adicionar interatividade a páginas web.</dd>
</dl>
```

# Capítulo 10

Aula 01 - Links e âncoras em HTML5

- Âncora “a” serve para inserir links.
- Usamos o atributo "href - referência do hypertexto" para dizermos qual é a URL.
- Quando for um link externo é recomendavel usar o atributo "**target = blank**".
- Usamos o atributo "**rel**" para dizer que a URL é externa ao meu site.

Exemplo de uso de âncoras

```markdown
<a href="[https://meusite.com](https://meusite.com/)" target="blank" rel ="external">
```

Aula 02 - links interno

- Links internos vão fazer a relação com outra página da nossa página principal.
- Quando usamos links internos não precisamos especificar a URL inteira dele se a página estiver junto ao index.
- Dentro do “rel” devemos colocar ou "next" para próxima página ou "prev" para página anterior.
- Geralmente quando não sabemos se o link é oficial usamos o "nofollow".
- Caso uma página esteja dentro de uma pasta deve ser especificado senão não funcionará.
- Para nevegação interna no próprio site podemos usar “target= _self”, pois não abrirá várias página para o usuário.
- Voltar de uma página usamos “./pasta (própria pasta),” para anterior “../pasta (página anterior)”.

 

Exemplo de link para uma página na mesma pasta 

```markdown
<a href="sobre.html">Sobre Nós</a>
```

Exemplo de link para uma página dentro de uma subpasta

```markdown
<a href="servicos/desenvolvimento.html">Nossos Serviços de Desenvolvimento</a>
```

Exemplo navegação para a próxima página 

```markdown
<a href="pagina2.html" rel="next">Próxima Página</a>
```

Exemplo de navegação para a página anterior 

```markdown
<a href="pagina1.html" rel="prev">Página Anterior</a>
```

Exemplo de link não oficial ou não endossado 

```markdown
<a href="http://site-externo.com/promocao" rel="nofollow">Promoção Externa</a>
```

Exemplo de navegação interna no próprio site 

```markdown
<a href="contato.html" target="_self">Entre em Contato</a>
```

Exemplo de caminho para voltar para a pasta pai 

```markdown
<a href="../">Voltar</a>
```

Exemplo de caminho para voltar para uma pasta específica no mesmo nível 

```markdown
<a href="./blog/post.html">Voltar para este Post no Blog</a>
```

Exemplo de links internos 

```markdown
<h2 id="secao1">Seção 1</h2>
<p>Conteúdo da seção 1.</p>

<h2 id="secao2">Seção 2</h2>
<p>Conteúdo da seção 2.</p>

<a href="#secao2">Ir para a seção 2</a>
```

Links dofollow e nofollow

*Se eu tiver vários links para o usuário entrar, deve sempre usar o next e prev?

Aula 03 - links para download

- “#” no **href** para links vazios.
- Dependendo do navegador ele não baixa o arquivo.
- Podemos usar o parametro “**download=nome do arquivo**” para dizer que o arquivo é baixavél.
- Para cada tipos de arquivo podemos especificar usando o “**type**”.

Exemplo de links para download

```markdown

<a href="# para link vazio ou URL do link" download="caminho/arquivo.pdf" type="application/pdf"></a>
```

—"Botão direito>Salvar o link como" já baixa o arquivo.

Aula 04 - desafios propostos

Tudo ok.

# Capitulo 11

Aula 01 - Imagens dinâmicas

- Todo conteúdo deve se adaptar aos diversos dispositivos.
- Criação de três imagens no Gimp de tamanhos diferentes.

Aula 02 - Imagens que se adaptam sozinhas

- tag <picture> permite que criamos vários “sources”.
- Usuários se incomodam com rolagem lateral.

Exemplo 

```markdown
<picture>
	<src=”caminho-do-arquivo” width=”1050”>
	<src=”caminho-do-arquivo” width=”750”>
	<src=”caminho-do-arquivo” width=”350”>
</picture>
```

aula 03 - colocando áudio no seu site

- Tomar cuidado com o copyright dos arquivos.
- Existem alguns navegadores que não tem suporte para arquivos mp3. Usar outros formatos como wav, ogg, etc.

Existem duas maneiras de inserir um áudio em um site:

- usando a tag <audio src="caminho-do-arquivo" autoplay controls loop>
    
    <audio preload="auto/metadata/none">
           <source src="caminho-do-arquivo/arquivo.mp3" type="audio/mpeg">
           <source src="caminho-do-arquivo/arquivo.ogg" type="audio/ogg">
           <source src="caminho-do-arquivo/arquivo.wav" type="audio/wav">
    </audio>
    
- A ordem de procedencia é muito importante (cima para baixo).
- o "auto" não é recomendado pois é necessário carregar o site inteiro.
- o "loop" cria um loop de áudio.
- Evitar arquivos wav pois são mais pesados.

Exemplo 01 (comum e mais simples)

```markdown
<audio src="caminho-do-arquivo" autoplay controls loop>
```

Exemplo 02 (recomendavél)

```markdown
<audio preload="auto/metadata/none">
       <source src="caminho-do-arquivo/arquivo.mp3" type="audio/mpeg">
       <source src="caminho-do-arquivo/arquivo.ogg" type="audio/ogg">
       <source src="caminho-do-arquivo/arquivo.wav" type="audio/wav">
</audio>
```

Aula 04 - formatos de vídeos para sites

- Os formatos com maior compatibilidade são: **mp4, m4v, webm e ogv**.
- Se o cliente pedir hospedagem local para vídeos é melhor sugerir outra opção.
- Recomendado até 1080p não mais que isso.

Aula 05 - vídeos em hospedagem própria

- Os vídeos devem ter compatibilidade em vários formatos por conta do suporte dos navegadores.

Existem duas maneiras de inserir vídeos usando a tag <video>:

Exemplo 01 (mais simples e comum)

```markdown
<video src="caminho-do-arquivo/video.mp4/webm/m4v/ogv" controls>
```

Exemplo 02 (recomendável)

```markdown
<video poster="caminho/imagem" controls>
	<source src="caminho-do-arquivo/video.mp4" type="video/mp4">
	 <source src="caminho-do-arquivo/video.m4v" type="video/mp4">
	 <source src="caminho-do-arquivo/video.webm" type="video/webm">
	 <source src="caminho-do-arquivo/video.ogv" type="ogg">
</video>
```

- A ordem de procendecia é muito importante (cima para baixo)
- O "poster" especifica que o video tem uma tumbnail.
- Sempre deixar claro ao cliente que hospedagem local terá um maior gasto financeiro.

Aula 06 - incorporação de vídeo externos

- Alguns sites de compartilhamento de videos oferecem o recurso "compartilhar" e depois "incorporar" que irá geral uma tag html.

Aula 07 - Desafio: um site com vídeos
Tudo ok

Capítulo 12
Aula 01 - Estilos CSS inline

Aula 02 - Estilos CSS interno

- Dentro head podemos aplicar o css usando a tag <style>.
- Usamos os seletores para aplicar a vários seletores.
- Desvantagens - O style ocupa mais linhas do que o conteúdo e se tivermos que aplicar a várias páginas seria mais trabalhoso.
- Vantajoso para aplicar em apenas uma página.
- body - seletor
- {} - colchetes onde ficará as declarações
- color: - propriedade do css
- blue; - valor do css
- Declaração: tudo o que estiver dentro dos colchetes.

Aula 03 - Estilos CSS externo

- Para criar um link para adicionar o css podemos usar o link:css.
- Usamos o @ para chamar uma regra no css (Ex: @font-face). Devem estar no incio do css.
- Podemos usar mais de um arquivo css nas páginas. Também podemos aplicar várias formas de css.
- A ordem de prioriadade é: primeiro inline, interno e por último o externo.
- - alt + seta para cima para voltar a pasta (explorador).

Fim do módulo



