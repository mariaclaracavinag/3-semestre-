const documentacao = {
  openapi: "3.0.3",

  info: {
    title: "API Ordem de Serviços",
    description: "Documentação da API de Ordens de Serviço",
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
    { name: "Departamentos", description: "Operações relacionadas aos departamentos" },
    { name: "Ordem de Serviço", description: "Operações relacionadas às ordens de serviço" }
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
              schema: { $ref: "#/components/schemas/Atualizacao_Usuario" }
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

    "/departamentos": {
      get: {
        tags: ["Departamentos"],
        summary: "Listar departamentos",
        responses: {
          200: {
            description: "Lista de departamentos",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/lista_Departamentos" }
                }
              }
            }
          }
        }
      }
    },

    "/departamentos/{id_departamento}": {
      put: {
        tags: ["Departamentos"],
        summary: "Atualizar departamento",
        parameters: [
          {
            name: "id_departamento",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Atualizacao_Departamento" }
            }
          }
        },
        responses: {
          200: { description: "Departamento atualizado" },
          404: { description: "Departamento não encontrado" }
        }
      },

      patch: {
        tags: ["Departamentos"],
        summary: "Atualizar departamento parcialmente",
        parameters: [
          {
            name: "id_departamento",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Atualizacao_Departamento" }
            }
          }
        },
        responses: {
          200: { description: "Departamento atualizado com sucesso" },
          400: { description: "Nenhum campo enviado" },
          404: { description: "Departamento não encontrado" }
        }
      },

      delete: {
        tags: ["Departamentos"],
        summary: "Remover departamento",
        parameters: [
          {
            name: "id_departamento",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "Departamento removido com sucesso" },
          404: { description: "Departamento não encontrado" }
        }
      }
    },

    "/ordem_servico": {
      get: {
        tags: ["Ordem de Serviço"],
        summary: "Listar ordens de serviço",
        responses: {
          200: {
            description: "Lista de ordens",
            content: {
              "application/json": {
                schema: {
                  type: "array",
                  items: { $ref: "#/components/schemas/lista_ordem_servico" }
                }
              }
            }
          }
        }
      }
    },

    "/ordem_servico/{id_ordem}": {
      put: {
        tags: ["Ordem de Serviço"],
        summary: "Atualizar ordem de serviço",
        parameters: [
          {
            name: "id_ordem",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Atualizacao_ordem" }
            }
          }
        },
        responses: {
          200: { description: "Ordem atualizada" },
          404: { description: "Ordem não encontrada" }
        }
      },

      patch: {
        tags: ["Ordem de Serviço"],
        summary: "Atualizar ordem parcialmente",
        parameters: [
          {
            name: "id_ordem",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        requestBody: {
          required: true,
          content: {
            "application/json": {
              schema: { $ref: "#/components/schemas/Atualizacao_ordem" }
            }
          }
        },
        responses: {
          200: { description: "Ordem atualizada com sucesso" },
          400: { description: "Nenhum campo enviado" },
          404: { description: "Ordem não encontrada" }
        }
      },

      delete: {
        tags: ["Ordem de Serviço"],
        summary: "Remover ordem",
        parameters: [
          {
            name: "id_ordem",
            in: "path",
            required: true,
            schema: { type: "integer" }
          }
        ],
        responses: {
          200: { description: "Ordem removida com sucesso" },
          404: { description: "Ordem não encontrada" }
        }
      }
    }
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
          senha: { type: "string", example: "123456" }
        }
      },

      Atualizacao_Usuario: {
        type: "object",
        properties: {
          nome: { type: "string", example: "Maria Clara" },
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" }
        }
      },

      Atualizacao_Parcial_Usuario: {
        type: "object",
        properties: {
          nome: { type: "string", example: "Maria Clara" },
          email: { type: "string", example: "maria@email.com" },
          senha: { type: "string", example: "123456" }
        }
      },

      lista_Departamentos: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          nome: { type: "string", example: "TI" },
          descricao: { type: "string", example: "Tecnologia da Informação" }
        }
      },

      Cadastro_Departamento: {
        type: "object",
        properties: {
          nome: { type: "string", example: "TI" },
          descricao: { type: "string", example: "Tecnologia da Informação" }
        }
      },

      Atualizacao_Departamento: {
        type: "object",
        properties: {
          nome: { type: "string", example: "TI" },
          descricao: { type: "string", example: "Tecnologia da Informação" }
        }
      },

      lista_ordem_servico: {
        type: "object",
        properties: {
          id: { type: "integer", example: 1 },
          numero_ordem: { type: "integer", example: 1001 },
          titulo: { type: "string", example: "Trocar cabo de rede" },
          descricao: { type: "string", example: "Sala sem conexão" },
          prioridade: { type: "string", example: "media" },
          status: { type: "string", example: "aberta" },
          data: { type: "string", example: "2026-02-26" },
          id_usuario: { type: "integer", example: 1 },
          id_departamento: { type: "integer", example: 1 }
        }
      },

      Cadastro_Ordem: {
        type: "object",
        properties: {
          numero_ordem: { type: "integer", example: 1001 },
          titulo: { type: "string", example: "Trocar cabo de rede" },
          descricao: { type: "string", example: "Sala sem conexão" },
          prioridade: { type: "string", example: "media" },
          status: { type: "string", example: "aberta" },
          data: { type: "string", example: "2026-02-26" },
          id_usuario: { type: "integer", example: 1 },
          id_departamento: { type: "integer", example: 1 }
        }
      },

      Atualizacao_ordem: {
        type: "object",
        properties: {
          numero_ordem: { type: "integer", example: 1001 },
          titulo: { type: "string", example: "Trocar cabo de rede" },
          descricao: { type: "string", example: "Sala sem conexão" },
          prioridade: { type: "string", example: "media" },
          status: { type: "string", example: "aberta" },
          data: { type: "string", example: "2026-02-26" },
          id_usuario: { type: "integer", example: 1 },
          id_departamento: { type: "integer", example: 1 }
        }
      }
    }
  }
};

export default documentacao;