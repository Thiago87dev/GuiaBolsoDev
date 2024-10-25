import no_photo from "@/assets/img/no_photo.jpg";
import python_comentario_linha from "@/assets/img/python/python_comentario_linha.png";
import python_comentario_mult_linha from "@/assets/img/python/python_comentario_mult.png";
import pass from "@/assets/img/python/pass.png";
import int from "@/assets/img/python/int.png";
import float from "@/assets/img/python/float.png";
import str from "@/assets/img/python/str.png";
import bool from "@/assets/img/python/bool.png";
import list from "@/assets/img/python/list.png";
import tuple from "@/assets/img/python/tuple.png";
import dict from "@/assets/img/python/dict.png";
import set from "@/assets/img/python/set.png";
import aritimetico from "@/assets/img/python/aritimetico.png";
import comparacao from "@/assets/img/python/comparacao.png";
import logicos from "@/assets/img/python/logicos.png";
import atribuicao from "@/assets/img/python/atribuicao.png";
import if_imagem from "@/assets/img/python/if_imagem.png";
import elif_imagem from "@/assets/img/python/elif_imagem.png";
import else_imagem from "@/assets/img/python/else_imagem.png";

export const aulasPython = [
  {
    id: 1,
    nome: "Comentarios",
    nivel2: [
      {
        idPai: 1,
        id: 1,
        nome2: "Comentarios de Linha",
        nomeReferencia: "comentariolinha",
        nivel3: [],
        conteudoModal: {
          titulo: "Comentario de Linha",
          texto:
            'São usados para adicionar anotações ou explicações ao código, que são ignoradas durante a execução. Eles começam com o símbolo "#" e podem ser colocados em qualquer lugar do código.',
          img: python_comentario_linha,
        },
      },
      {
        idPai: 1,
        id: 2,
        nome2: "Comentarios de Múltiplas Linhas",
        nomeReferencia: "comentariomultlinha",
        nivel3: [],
        conteudoModal: {
          titulo: "Comentarios de Multiplas linhas",
          texto:
            "São usados para anotações maiores e são delimitados por três aspas simples (''') ou três aspas duplas (\"\"\"). Eles podem ocupar várias linhas e são úteis para descrever funções ou seções de código.",
          img: python_comentario_mult_linha,
        },
      },
    ],
  },
  {
    id: 2,
    nome: "Pass",
    nivel2: [
      {
        idPai: 2,
        id: 1,
        nome2: "pass",
        nomeReferencia: "pass",
        nivel3: [],
        conteudoModal: {
          titulo: "pass",
          texto: "O pass é usado como um placeholder quando uma declaração de código é necessária, mas você não quer executar nada. Ele permite que você crie blocos vazios sem gerar erros.",
          img: pass,
        },
      },
    ],
  },
  {
    id: 3,
    nome: "Tipo de Variaveis",
    nivel2: [
      {
        idPai: 3,
        id: 1,
        nome2: "int",
        nomeReferencia: "int",
        nivel3: [],
        conteudoModal: {
          titulo: "Números inteiros",
          texto: "O int é um tipo de dado que representa números inteiros, positivos ou negativos, sem casas decimais.",
          img: int,
        },
      },
      {
        idPai: 3,
        id: 2,
        nome2: "float",
        nomeReferencia: "float",
        nivel3: [],
        conteudoModal: {
          titulo: "Números de ponto flutuante",
          texto: "O float é um tipo de dado que representa números com casas decimais.",
          img: float,
        },
      },
      {
        idPai: 3,
        id: 3,
        nome2: "str",
        nomeReferencia: "str",
        nivel3: [],
        conteudoModal: {
          titulo: "Cadeia de caracteres (strings)",
          texto: "O str é um tipo de dado que representa sequências de caracteres (strings).",
          img: str,
        },
      },
      {
        idPai: 3,
        id: 4,
        nome2: "bool",
        nomeReferencia: "bool",
        nivel3: [],
        conteudoModal: {
          titulo: "Booleanos (True, False)",
          texto: "O bool é um tipo de dado que representa valores booleanos: True ou False.",
          img: bool,
        },
      },
      {
        idPai: 3,
        id: 5,
        nome2: "list",
        nomeReferencia: "list",
        nivel3: [],
        conteudoModal: {
          titulo: "Listas",
          texto: "Uma list é um tipo de dado que armazena coleções de elementos em uma sequência ordenada e mutável.\n Os principais pontos sobre listas incluem:\n\n1 - Ordenação: Os elementos em uma lista mantêm a ordem em que foram adicionados.\n\n2 - Mutável: Você pode adicionar, remover ou alterar elementos após a criação da lista.\n\n3 - Permite Duplicatas: Listas podem conter elementos duplicados, ou seja, o mesmo valor pode aparecer várias vezes.",
          img: list,
        },
      },
      {
        idPai: 3,
        id: 6,
        nome2: "tuple",
        nomeReferencia: "tuple",
        nivel3: [],
        conteudoModal: {
          titulo: "Tuplas",
          texto: "Uma tuple é um tipo de dado que armazena coleções de elementos em uma sequência ordenada e imutável. \nOs principais pontos sobre tuplas incluem:\n\n1 - Imutável: Após a criação, os elementos de uma tupla não podem ser alterados, adicionados ou removidos.\n\n2 - Ordenação: Os elementos mantêm a ordem em que foram adicionados, permitindo acesso por índices.\n\n3 - Permite Duplicatas: Tuplas podem conter elementos duplicados, assim como listas.",
          img: tuple,
        },
      },
      {
        idPai: 3,
        id: 7,
        nome2: "dict",
        nomeReferencia: "dict",
        nivel3: [],
        conteudoModal: {
          titulo: "Dicionários",
          texto: "Um dict é um tipo de dado que armazena pares de chave-valor, permitindo o acesso aos valores por suas chaves.\n Os principais pontos sobre dicionários incluem:\n\n1 - Estrutura de Chave-Valor: Cada valor é acessado usando uma chave única, o que facilita a busca de dados.\n\n2 - Mutável: Você pode adicionar, remover ou alterar pares de chave-valor após a criação do dicionário.\n\n3 - Sem Ordem: As chaves não têm uma ordem definida, portanto, a iteração pode não ser na ordem de inserção.",
          img: dict,
        },
      },
      {
        idPai: 3,
        id: 8,
        nome2: "set",
        nomeReferencia: "set",
        nivel3: [],
        conteudoModal: {
          titulo: "Conjuntos",
          texto: "O set é um tipo de dado que armazena coleções de elementos únicos, não ordenados e mutáveis. \nOs principais pontos sobre conjuntos incluem:\n\n1 - Elementos Únicos: Um set não permite duplicatas. Se você tentar adicionar um elemento já existente, ele será ignorado.\n\n2 - Não Ordenado: Os elementos não têm uma ordem definida, então não é possível acessar elementos por um índice, como em listas ou tuplas.\n\n3 - Mutável: Você pode adicionar ou remover elementos após a criação do conjunto.",
          img: set,
        },
      },
    ],
  },
  {
    id: 4,
    nome: "Operadores",
    nivel2: [
      {
        idPai: 4,
        id: 1,
        nome2: "Aritimeticos",
        nomeReferencia: "aritimeticos",
        nivel3: [],
        conteudoModal: {
          titulo: "Aritimeticos",
          texto: "Os operadores aritméticos são usados para realizar operações matemáticas básicas. Aqui estão os principais operadores:\n\n1 - Adição (+): Soma dois valores.\n\n2 - Subtração (-): Subtrai um valor do outro.\n\n3 - Multiplicação (*): Multiplica dois valores.\n\n4 - Divisão (/): Divide um valor pelo outro e retorna um número com ponto flutuante (decimal).\n\n5 - Divisão Inteira (//): Divide um valor pelo outro e retorna o quociente inteiro (sem decimais).\n\n6 - Módulo (%): Retorna o resto da divisão de dois valores.\n\n7 - Exponenciação (**): Eleva um valor ao poder de outro.",
          img: aritimetico,
        },
      },
      {
        idPai: 4,
        id: 2,
        nome2: "Comparação",
        nomeReferencia: "comparação",
        nivel3: [],
        conteudoModal: {
          titulo: "Comparação",
          texto: "Os operadores de comparação são usados para comparar dois valores e retornam um valor booleano (True ou False). Aqui estão os principais operadores:\n\n1 - Igualdade (==): Verifica se dois valores são iguais.\n\n2 - Diferença (!=): Verifica se dois valores são diferentes.\n\n3 - Maior que (>): Verifica se o valor à esquerda é maior que o valor à direita.\n\n4 - Menor que (<): Verifica se o valor à esquerda é menor que o valor à direita.\n\n5 - Maior ou igual a (>=): Verifica se o valor à esquerda é maior ou igual ao valor à direita.\n\n6 - Menor ou igual a (<=): Verifica se o valor à esquerda é menor ou igual ao valor à direita.",
          img: comparacao,
        },
      },
      {
        idPai: 4,
        id: 3,
        nome2: "Lógicos",
        nomeReferencia: "logicos",
        nivel3: [],
        conteudoModal: {
          titulo: "Lógicos",
          texto: "Os operadores lógicos são usados para combinar expressões condicionais e retornam um valor booleano (True ou False). Aqui estão os principais operadores:\n\n1 - \"E\" lógico (and): Retorna True se ambas as expressões forem verdadeiras.\n\n2 - \"OU\" lógico (or): Retorna True se pelo menos uma das expressões for verdadeira.\n\n3 - \"NEGAÇÃO\" lógica (not): Inverte o valor booleano, retornando True se a expressão for False e vice-versa.",
          img: logicos,
        },
      },
      {
        idPai: 4,
        id: 4,
        nome2: "Atribuição",
        nomeReferencia: "atribuicao",
        nivel3: [],
        conteudoModal: {
          titulo: "Atribuição",
          texto: "Os operadores de atribuição são usados para atribuir valores às variáveis e realizar operações aritméticas ou lógicas durante a atribuição. Aqui estão os principais operadores:\n\n1 - Atribuição Simples (=): Atribui um valor à variável.\n\n 2 - Atribuição com Adição (+=): Soma o valor à variável e atribui o resultado.\n\n3 - Atribuição com Subtração (-=): Subtrai o valor da variável e atribui o resultado.\n\n4 - Atribuição com Multiplicação (*=): Multiplica o valor pela variável e atribui o resultado.\n\n5 - Atribuição com Divisão (/=): Divide o valor pela variável e atribui o resultado.\n\n6 - Atribuição com Divisão Inteira (//=): Divide a variável pelo valor e atribui o quociente inteiro.\n\n7 - Atribuição com Módulo (%=): Calcula o resto da divisão e atribui o resultado.\n\n8 - Atribuição com Exponenciação (**=): Eleva a variável à potência do valor e atribui o resultado.",
          img: atribuicao,
        },
      },
    ],
  },
  {
    id: 5,
    nome: "Estrutura Condicional",
    nivel2: [
      {
        idPai: 5,
        id: 1,
        nome2: "if",
        nomeReferencia: "if",
        nivel3: [],
        conteudoModal: {
          titulo: "if",
          texto: "O if é usado para executar um bloco de código apenas se uma condição for verdadeira.\n Se a condição for falsa, o Python ignora o bloco if.\n É uma estrutura básica de decisão, permitindo que o código reaja a diferentes condições.\n\nNo exemplo abaixo, o bloco if executa apenas se num for maior que zero, mostrando a mensagem \"O número é positivo\".",
          img: if_imagem,
        },
      },
      {
        idPai: 5,
        id: 2,
        nome2: "elif",
        nomeReferencia: "elif",
        nivel3: [],
        conteudoModal: {
          titulo: "elif",
          texto: "O elif (abreviação de \"else if\") é usado para adicionar condições adicionais após um if. \nEle permite verificar múltiplas condições sequencialmente, executando o bloco de código correspondente à primeira condição verdadeira.\n\nNo exemplo abaixo, o elif verifica se num é menor que zero apenas se a condição if inicial for falsa.",
          img: elif_imagem,
        },
      },
      {
        idPai: 5,
        id: 3,
        nome2: "else",
        nomeReferencia: "else",
        nivel3: [],
        conteudoModal: {
          titulo: "else",
          texto: "O else é usado para definir um bloco de código que será executado quando todas as condições anteriores (if e elif) forem falsas.\nEle lida com todos os outros casos que não atendem a nenhuma condição específica.\n\nAbaixo, o else é executado somente se num não for maior nem menor que zero, indicando que o valor é zero.",
          img: else_imagem,
        },
      },
    ],
  },
  {
    id: 6,
    nome: "Estrutuda de Repetição",
    nivel2: [
      {
        idPai: 6,
        id: 1,
        nome2: "while",
        nomeReferencia: "while",
        nivel3: [],
        conteudoModal: {
          titulo: "while",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
      {
        idPai: 6,
        id: 2,
        nome2: "for",
        nomeReferencia: "for",
        nivel3: [],
        conteudoModal: {
          titulo: "for",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
      {
        idPai: 6,
        id: 3,
        nome2: "break",
        nomeReferencia: "break",
        nivel3: [],
        conteudoModal: {
          titulo: "break",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
      {
        idPai: 6,
        id: 4,
        nome2: "continue",
        nomeReferencia: "continue",
        nivel3: [],
        conteudoModal: {
          titulo: "continue",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
    ],
  },
  {
    id: 7,
    nome: "Funçoes",
    nivel2: [
      {
        idPai: 7,
        id: 1,
        nome2: "Declarção de função",
        nomeReferencia: "declarcaofuncao",
        nivel3: [],
        conteudoModal: {
          titulo: "Definição de funções: def",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
      {
        idPai: 7,
        id: 2,
        nome2: "Parâmetros e retorno de valores",
        nomeReferencia: "paramatrosretorno",
        nivel3: [],
        conteudoModal: {
          titulo: "Parâmetros e retorno de valores",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
      {
        idPai: 7,
        id: 3,
        nome2: "Funções lambda",
        nomeReferencia: "funcaolambda",
        nivel3: [],
        conteudoModal: {
          titulo: "Funções lambda (anônimas)",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
    ],
  },
  {
    id: 8,
    nome: "Manipulação de Strings",
    nivel2: [
      {
        idPai: 8,
        id: 1,
        nome2: "Fatiamento",
        nomeReferencia: "fatiamento",
        nivel3: [],
        conteudoModal: {
          titulo: "Fatiamento",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
      {
        idPai: 8,
        id: 2,
        nome2: "Métodos úteis",
        nomeReferencia: "metodoutil",
        nivel3: [
          {
            nomeReferencia: "metodoutil",
            id: 1,
            nome3: "len( )",
            conteudoModal: {
              titulo: "len( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 2,
            nome3: "upper( )",
            conteudoModal: {
              titulo: "upper( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 3,
            nome3: "lower( )",
            conteudoModal: {
              titulo: "lower( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 4,
            nome3: "split( )",
            conteudoModal: {
              titulo: "split( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 5,
            nome3: "join( )",
            conteudoModal: {
              titulo: "join( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
        ],
        conteudoModal: {
          titulo: "",
          texto: "",
          img: no_photo,
        },
      },
    ],
  },
  {
    id: 9,
    nome: "Listas",
    nivel2: [
      {
        idPai: 9,
        id: 1,
        nome2: "Operações",
        nomeReferencia: "operacao",
        nivel3: [
          {
            nomeReferencia: "operacao",
            id: 1,
            nome3: "Adicionar",
            conteudoModal: {
              titulo: "Adicionar",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "operacao",
            id: 2,
            nome3: "Remover",
            conteudoModal: {
              titulo: "Remover",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "operacao",
            id: 3,
            nome3: "Acessar itens",
            conteudoModal: {
              titulo: "Acessar itens",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
        ],
        conteudoModal: {
          titulo: "",
          texto: "",
          img: no_photo,
        },
      },
      {
        idPai: 9,
        id: 2,
        nome2: "Métodos úteis",
        nomeReferencia: "metodoutil",
        nivel3: [
          {
            nomeReferencia: "metodoutil",
            id: 1,
            nome3: "append( )",
            conteudoModal: {
              titulo: "append( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 2,
            nome3: "remove( )",
            conteudoModal: {
              titulo: "remove( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 3,
            nome3: "pop( )",
            conteudoModal: {
              titulo: "pop( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 4,
            nome3: "sort( )",
            conteudoModal: {
              titulo: "sort( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
        ],
        conteudoModal: {
          titulo: "",
          texto: "",
          img: no_photo,
        },
      },
    ],
  },
  {
    id: 10,
    nome: "Dicionarios",
    nivel2: [
      {
        idPai: 10,
        id: 1,
        nome2: "Criação e manipulação",
        nomeReferencia: "criacaomanipulacao",
        nivel3: [],
        conteudoModal: {
          titulo: "Criação e manipulação",
          texto: "texto vai aqui",
          img: no_photo,
        },
      },
      {
        idPai: 10,
        id: 2,
        nome2: "Métodos úteis",
        nomeReferencia: "metodoutil",
        nivel3: [
          {
            nomeReferencia: "metodoutil",
            id: 1,
            nome3: "keys( )",
            conteudoModal: {
              titulo: "keys( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 2,
            nome3: "values( )",
            conteudoModal: {
              titulo: "values( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
          {
            nomeReferencia: "metodoutil",
            id: 3,
            nome3: "items( )",
            conteudoModal: {
              titulo: "items( )",
              texto: "o texto vem aqui",
              img: no_photo,
            },
          },
        ],
        conteudoModal: {
          titulo: "",
          texto: "",
          img: no_photo,
        },
      },
    ],
  },
  {
    id: 11,
    nome: "Exceções",
    nivel2: [
      {
        idPai: 11,
        id: 1,
        nome2: "try, except",
        nomeReferencia: "tryexcept",
        nivel3: [],
        conteudoModal: {
          titulo: "try, except",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
      {
        idPai: 11,
        id: 2,
        nome2: "finally",
        nomeReferencia: "finally",
        nivel3: [],
        conteudoModal: {
          titulo: "finally",
          texto: "o texto vem aqui",
          img: no_photo,
        },
      },
    ],
  },
];
