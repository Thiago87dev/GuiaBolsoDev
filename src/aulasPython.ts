import python_comentario_linha from "@/assets/img/python_comentario_linha.png";
import python_comentario_mult_linha from "@/assets/img/python_comentario_mult.png";
import no_photo from "@/assets/img/no_photo.jpg";
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
          texto: "Texto vai aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
          texto: "o texto vem aqui",
          img: no_photo,
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
