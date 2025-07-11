Aula 01 - Introdução ao PostgreSQL

- Começou como o projeto Ingres na universidade de Berkeley.
- Foi desenvolvido  em C, é open-source.
- Disponível em todas as plataformas UNIX.


Sobre o sistema 

- Possui todos os requisitos de um banco de dados transacional e compatível com ACID (Atomicidade, Consistência, Isolamento, Durabilidade)
- Suporta views e outros tipos de objetos comuns em banco de dados relacionais.


Características

- Banco transacional (uses WAL/REDO)
- Suporta particionamento
- Possue controle de Concorrência Multiversão (MVCC)
- Busca de texto completo
- Indexação com vários tipos de algoritmos (B-Tree, GiST)
- Permite operações de manutenção em modo online
- Operações geoespaciais (PostGIS)
- Possui linguagem procedural


Conectividade 

- A coneção é feita via TCP/IP padrão. 
- Com a coexão estabelecida nos comunicaos enviando comandos ao Postgree
- Sua liguagem combina declaraçoes em conformidade com padrão SQL: 2008 e comandos de manutenção específicos
- O SGBDR serve uma instância a partir de uma única porta TCP/IP.


Termilogia 

- Em vista  que foi projeta em ambiente academico, seus objetos são definidos em alguns termos técnicos e em álgebra relacional. 

Alguns termos comuns:

    Indústria   |     Postgree
    Tabela      |      Relação
    Linha       |       Tupla
    Coluna      |       Atributo
    Bloco de dados |    Página (quando o bloco está no disco)
    Página      |       Buffer (quando o bloco está na memória)


Quem usa o Postgree

- Reddit
- Sony Games
- Skype
- Instagram

