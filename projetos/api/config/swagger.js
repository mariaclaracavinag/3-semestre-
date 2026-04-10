const documentacao = {
  openapi: "3.0.3",

  info: {
    title: "API Final Control",
    description: "Documentação da API de usuários e categorias",
    version: "1.0.0"
  },

  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor Local"
    }
  ],

  tags: [
    { name: "Usuários", description: "Operações com usuários" },
    { name: "Categorias", description: "Operações com categorias" },
    { name: "Subcategorias", description: "Operações com Subcategorias" },
    {name: "Transações", description: "Operações com transaçoes" }
  ],

  paths: {
    "/usuarios": {
      get: {
        tags: ["Usuários"],
        summary: "Listar usuários",
        responses: {
          200: {
            description: "Lista de usuários",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Usuario" }
                }
              }
            }
          }
        }
      },

      post: {
        tags: ["Usuários"],
        summary: "Cadastrar usuário",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CadastroUsuario" }
            }
          }
        },
        responses: {
          201: { description: "Usuário cadastrado com sucesso" },
          400: { description: "Dados inválidos" },
          500: { description: "Erro interno" }
        }
      }
    },

    "/usuarios/{id_usuario}": {
      put: {
        tags: ["Usuários"],
        summary: "Atualizar usuário completo",
        parameters: [
          {
            name: "id_usuario",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CadastroUsuario" }
            }
          }
        },
        responses: {
          200: { description: "Usuário atualizado com sucesso" },
          404: { description: "Usuário não encontrado" }
        }
      },

      patch: {
        tags: ["Usuários"],
        summary: "Atualizar usuário parcialmente",
        parameters: [
          {
            name: "id_usuario",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AtualizacaoParcialUsuario"
              }
            }
          }
        },
        responses: {
          200: { description: "Atualizado com sucesso" },
          400: { description: "Nenhum campo enviado" },
          404: { description: "Usuário não encontrado" }
        }
      },

      delete: {
        tags: ["Usuários"],
        summary: "Desativar usuário",
        parameters: [
          {
            name: "id_usuario",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "Usuário desativado com sucesso" },
          404: { description: "Usuário não encontrado" }
        }
      }
    },

    "/login": {
      post: {
        tags: ["Usuários"],
        summary: "Login do usuário",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/LoginUsuario" }
            }
          }
        },
        responses: {
          200: {
            description: "Login realizado com sucesso",
            content: {
              "application/json": {
                schema: {
                  $ref: "#/components/schemas/RespostaLogin"
                }
              }
            }
          },
          401: { description: "Credenciais inválidas" }
        }
      }
    },

    "/categorias": {
      get: {
        tags: ["Categorias"],
        summary: "Listar categorias",
        responses: {
          200: {
            description: "Lista de categorias",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/lista_Categorias" }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Categorias"],
        summary: "Cadastrar categoria",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CadastroCategoria" }
            }
          }
        },
        responses: {
          201: { description: "Categoria cadastrado com sucesso" },
          400: { description: "Dados inválidos" },
          500: { description: "Erro interno" }
        }
      }, 
    },

      "/categorias/{id_categoria}":{
        put: {
        tags: ["Categorias"],
        summary: "Atualizar categoria completo",
        parameters: [
          {
            name: "id_categoria",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CadastroCategoria" }
            }
          }
        },
        responses: {
          200: { description: "Usuário atualizado com sucesso" },
          404: { description: "Usuário não encontrado" }
        }
      },
       patch: {
        tags: ["Categorias"],
        summary: "Atualizar categoria parcialmente",
        parameters: [
          {
            name: "id_categoria",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AtualizacaoParcialCategoria"
              }
            }
          }
        },
        responses: {
          200: { description: "Atualizado com sucesso" },
          400: { description: "Nenhum campo enviado" },
          404: { description: "Usuário não encontrado" }
        }
      },

      delete: {
        tags: ["Categorias"],
        summary: "Desativar categoria",
        parameters: [
          {
            name: "id_categoria",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "categoria desativado com sucesso" },
          404: { description: "categoria não encontrado" }
        }
      }
    },
    "/subcategorias": {
      get: {
        tags: ["Subcategorias"],
        summary: "Listar subcategorias",
        responses: {
          200: {
            description: "Lista de subcategorias",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/lista_subcategorias" }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Subcategorias"],
        summary: "Cadastrar Subcategoria",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CadastroSubCategoria" }
            }
          }
        },
        responses: {
          201: { description: "Categoria cadastrado com sucesso" },
          400: { description: "Dados inválidos" },
          500: { description: "Erro interno" }
        }
      }, 
    },

      "/categorias/{id_subcategoria}":{
        put: {
        tags: ["Subcategorias"],
        summary: "Atualizar subcategoria completo",
        parameters: [
          {
            name: "id_subcategoria",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Cadastrosubcategoria" }
            }
          }
        },
        responses: {
          200: { description: "Usuário atualizado com sucesso" },
          404: { description: "Usuário não encontrado" }
        }
      },
       patch: {
        tags: ["Subcategorias"],
        summary: "Atualizar subcategoria parcialmente",
        parameters: [
          {
            name: "id_subcategoria",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AtualizacaoParcialsubcategoria"
              }
            }
          }
        },
        responses: {
          200: { description: "Atualizado com sucesso" },
          400: { description: "Nenhum campo enviado" },
          404: { description: "Usuário não encontrado" }
        }
      },

      delete: {
        tags: ["Subcategorias"],
        summary: "Desativar subcategoria",
        parameters: [
          {
            name: "id_subcategoria",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "subcategoria desativado com sucesso" },
          404: { description: "subcategoria não encontrado" }
        }
      }
    },
    "/transacoes":{
      get: {
        tags: ["Transações"],
        summary: "Listar transações",
        responses: {
          200: {
            description: "Lista de transações",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Listar_Transacoes" }
                }
              }
            }
          }
        }
      },
      post: {
        tags: ["Transações"],
        summary: "Cadastrar transação",
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CadastroTransacoes" }
            }
          }
        },
        responses: {
          201: { description: "transação cadastrado com sucesso" },
          400: { description: "Dados inválidos" },
          500: { description: "Erro interno" }
        }
      }, 
    },
    "/transacoes/{id_transacao}": {
      put: {
        tags: ["Transações"],
        summary: "Atualizar transacoes completo",
        parameters: [
          {
            name: "id_transacao",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/CadastroTransacoes" }
            }
          }
        },
        responses: {
          200: { description: "Usuário atualizado com sucesso" },
          404: { description: "Usuário não encontrado" }
        }
      },

      patch: {
        tags: ["Transações"],
        summary: "Atualizar transacoes parcialmente",
        parameters: [
          {
            name: "id_transacao",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/AtualizacaoParcialTransacao"
              }
            }
          }
        },
        responses: {
          200: { description: "Atualizado com sucesso" },
          400: { description: "Nenhum campo enviado" },
          404: { description: "Usuário não encontrado" }
        }
      },

      delete: {
        tags: ["Transações"],
        summary: "Desativar Transacoes",
        parameters: [
          {
            name: "id_transacoes",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "transacoes desativado com sucesso" },
          404: { description: "transacoes não encontrado" }
        }
      }
    },

    "/transacoes/tipo/{tipo}":{
      get: {
        tags: ["Transações"],
        summary: "Listar transações",
        parameters: [
          {
            name: "tipo",
            in: "path",
            required: true,
            description: "tipo transação (E = entrada/ S = saida)",
            schema: {type: "string", enum:["E", "S"], example: "s"}
          }
        ],
        responses: {
          200: {
            description: "Lista de transações",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Listar_Transacoes" }
                }
              }
            }
          }
        }
      },
    },
    "/transacoes/periodo":{
      get: {
        tags: ["Transações"],
        summary: "Listar transações por periodo",
        parameters: [
          {
            name: "inicio",
            in: "query",
            required: true,
            description: "data de inicio do periodo",
            schema: {type: "string", example: "10/04/2026"}
          },
          {
            name: "fim",
            in: "query",
            required: true,
            description: "data de fim do periodo",
            schema: {type: "string", example: "13b/04/2026"}
          }
        ],
        responses: {
          200: {
            description: "Lista de transações",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/Listar_Transacoes" }
                }
              }
            }
          }
        }
      },
    },
  },
  components: {
    schemas: {
      Usuario: {
        type: "object",
        properties: {
          id_usuario: { type: "integer", example: 1 },
          nome: { type: "string", example: "Maria Clara" },
          email: { type: "string", example: "maria@email.com" }
        }
      },

      CadastroUsuario: {
        type: "object",
        required: ["nome", "email", "senha", "tipo_acesso"],
        properties: {
          nome: { type: "string", example: "Maria Clara" },
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" },
          tipo_acesso: { type: "string", example: "admin" }
        }
      },

      AtualizacaoParcialUsuario: {
        type: "object",
        properties: {
          nome: { type: "string", example: "Maria Clara" },
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" },
          tipo_acesso: { type: "string", example: "admin" }
        }
      },

      LoginUsuario: {
        type: "object",
        required: ["email", "senha"],
        properties: {
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" }
        }
      },

      resposta_login:{ 
        type: 'object',
         properties:{
         Message: {type: 'string', example: 'login realizado com sucesso'},
         usuario:{ type:'object', 
         properties:{ 
          id_usuario: {type: "integer", example: 1}, 
          email: { type: "string", example: "maria@email.com" }, 
          senha: { type: "string", example: "123456" } 
        } 
      } 
    } 
  },

     lista_categorias: { 
      type: "object", 
      properties: { 
      id_categoria: { type: "integer", example: 1 },
      nome: { type: "string", example: "saude" }, 
      descricao: { type: "string", example: "produtos de saúde" }, 
      cor: { type: "string", example: "#fff" }, 
      icone: { type: "string", example: "nome do icone" }, 
      tipo: { type: "string", example: "e" } 
    } 
  },
   CadastroCategoria: {
        type: "object",
        required: ["nome", "descricao"],
        properties: {
        nome: { type: "string", example: "saude" }, 
        descricao: { type: "string", example: "produtos de saúde" }, 
        cor: { type: "string", example: "#fff" }, 
        icone: { type: "string", example: "nome do icone" }, 
        tipo: { type: "string", example: "e" } 
        }
  },
  AtualizacaoParcialCategoria: {
        type: "object",
        properties: {
        nome: { type: "string", example: "saude" }, 
        descricao: { type: "string", example: "produtos de saúde" }, 
        cor: { type: "string", example: "#fff" }, 
        icone: { type: "string", example: "nome do icone" }, 
        tipo: { type: "string", example: "e" } 
        }
      },
     lista_subcategorias: { 
      type: "object", 
      properties: { 
      id_subcategoria: { type: "integer", example: 1 },
      nome: { type: "string", example: "saude" }, 
      id_categoria: { type: "integer", example: 1}, 
    } 
  },
   Cadastrosubcategoria: {
        type: "object",
        required: ["nome", "id_categoria"],
        properties: {
        id_subcategoria: { type: "integer", example: 1 },
      nome: { type: "string", example: "saude" }, 
      id_categoria: { type: "integer", example: 1}, 
        }
  },
  AtualizacaoParcialsubcategoria: {
        type: "object",
        properties: {
        id_subcategoria: { type: "integer", example: 1 },
      nome: { type: "string", example: "saude" }, 
      id_categoria: { type: "integer", example: 1}, 
        }
      },
  Listar_Transacoes:{
      type: 'object',
      properties:{
        valor: {type: "number", example: 10.00},
        descricao: {type: "string", example: "consulta médica"},
        data_registro: {type: "string", example: "09/04/2026"},
        data_vencimento: {type: "string", example: "10/04/2026"},
        data_pagemnto: {type: "string", example: "11/04/2026"},
        tipo: {type: "string", enum: ["E", "S"], example: "E"},
        nome_categoria: {type: "string", example: "saude"},
        nome_subcategoria: {type: "string", example: "Consulta medica"},
      }
    },
    CadastroTransacoes: {
        type: 'object',
      properties:{
        valor: {type: "number", example: 10.00},
        descricao: {type: "string", example: "consulta médica"},
        data_registro: {type: "string", example: "09/04/2026"},
        data_vencimento: {type: "string", example: "10/04/2026"},
        data_pagemnto: {type: "string", example: "11/04/2026"},
        tipo: {type: "string", enum: ["E", "S"], example: "E"},
        id_categoria: {type: "integer", example: 1},
        id_subcategoria: {type: "integer", example: 1},
        }
  },
  AtualizacaoParcialTransacao: {
        type: 'object',
      properties:{
        valor: {type: "number", example: 10.00},
        descricao: {type: "string", example: "consulta médica"},
        data_registro: {type: "string", example: "09/04/2026"},
        data_vencimento: {type: "string", example: "10/04/2026"},
        data_pagemnto: {type: "string", example: "11/04/2026"},
        tipo: {type: "string", enum: ["E", "S"], example: "E"},
        id_categoria: {type: "integer", example: 1},
        id_subcategoria: {type: "integer", example: 1},
        }
      },
    

    }
  }
};

export default documentacao;