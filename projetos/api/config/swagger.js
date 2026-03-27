const documentacao = {
  openapi: "3.0.3",

  info: {
    title: "API Final control",
    description: "Documentação da API final control",
    version: "1.0.0"
  },

  servers: [
    {
      url: "http://localhost:3000",
      description: "Servidor Local"
    }
  ],

  tags: [
    { name: "Usuários", description: "Operações relacionadas aos usuários" },
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
                  items: { $ref: "#/components/schemas/lista_Usuarios" }
                }
              }
            }
          }
        }
      },
      post:{
                tags: ["Usuários"],
                summary: "Cadastrar novo usuário",
                description: "Recebe nome, email, senha, tipo_acesso e ativo para cadastrar novo usuário",
                requestBody:{
                    required: true,
                    content:{
                        "application/json":{
                            schema:{
                                $ref: "#/components/schemas/Cadastro_Usuario"
                            }
                        }
                    }
                },
                responses:{
                    201:{
                        description: "Usuario cadastrado com sucesso"
                    },
                    400:{
                        description: "Erro na requisição(preencha todos os campos)"
                    },
                    500:{
                        description: "Erro interno no servidor"
                    }
                },

            },
      login:{
                tags: ["Usuários"],
                summary: "realizar login",
                description: "autentifica um usuario e retorna seus dados",
                requestBody:{
                    required: true,
                    content:{
                        "application/json":{
                            schema:{
                                $ref: "#/components/schemas/Login_Usuario"
                            }
                        }
                    }
                },
                responses:{
                    200:{
                        description: "login bem sucessido ",
                        content:{
                        "application/json":{
                            schema:{
                                $ref: "#/components/schemas/resposta_Usuario"
                            }
                        }
                    }
                    }
                },

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
              schema: { $ref: "#/components/schemas/Atualizacao_Usuario" },
              example: {
                 nome: "maria clara",
                 email: "maria.clara@gmail.com",
                 senha: "123",
                 tipo_acesso: "admin"
              }
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
              schema: { $ref: "#/components/schemas/Atualizacao_Parcial_Usuario" }
            }
          }
        },
        responses: {
          200: { description: "Usuário atualizado com sucesso" },
          400: { description: "Nenhum campo enviado" },
          404: { description: "Usuário não encontrado" }
        }
      },

      delete: {
        tags: ["Usuários"],
        summary: "Remover usuário",
        parameters: [
          {
            name: "id_usuario",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "Usuário removido com sucesso" },
          404: { description: "Usuário não encontrado" }
        }
      }
    },

  },

  components: {
    schemas: {
      lista_Usuarios: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nome: { type: "string", example: "Ricardo" },
          email: { type: "string", example: "ricardo@gmail.com" }
        }
      },

      Cadastro_Usuario: {
        type: "object",
        properties: {
          nome: { type: "string", example: "Maria Clara" },
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" },
          tipo_acesso: {type: "string", example: "admin"},
        }
      },

      Atualizacao_Usuario: {
        type: "object",
        properties: {
          nome: { type: "string", example: "Maria Clara" },
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" },
          tipo_acesso: {type: "string", example: "admin"},
        }
      },

      Atualizacao_Parcial_Usuario: {
        type: "object",
        properties: {
          nome: { type: "string", example: "Maria Clara" },
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" },
          tipo_acesso: {type: "string", example: "admin"},
        }
      },

      
      },
      login_usuario:{
       type: 'object', 
       requered: ['email', 'senha'],
       properties:{
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" }
       }
      },
      resposta_login:{
        type: 'object', 
       properties:{
        Message: {type: 'string', example: 'login realizado com sucesso'},
        usuario:{
            type:'object',
            properties:{
        id_usuario: {type: "integer", example: 1},
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" }
            }
        }
       }
      }
    }
  }

export default documentacao;