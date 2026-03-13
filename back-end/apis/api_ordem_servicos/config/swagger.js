const documentacao = {
    openapi: '3.0.3',
    info: {
        title: 'API ordem de serviços',
        description: 'Documentação da API de Ordens de Servico',
        version: '1.0.0'
    },
    servers: [
        {
            url: 'http://localhost:3000',
            description: 'Localhost'
        }
    ],
    tags: [
        { name: "usuários", description: "operaçôes relacionadas aos usuários" },
        { name: "Departamentos", description: "operaçôes relacionadas aos Departamentos" },
        { name: "Ordem Serviços", description: "operaçôes relacionadas a Ordem de serviços" }
    ],
    paths: {
        "/usuarios": {
            get: {
                tags: ["Usuários"],
                summary: ["listar Usuários"],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "apllication/json": {
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
                tags: ["usuários"],
                summary: "atualizar usuários completo",
                description: `Atualiza todos os campo de um usuario existente, sendo necessario 
                enviar todos os campos (nome,email,senha)`,
                parameters: [
                    {
                        name: "id_usuario",
                        in: "path",
                        required: true,
                        description: "ID do usuario a ser atulizado",
                        schema: { type: "integer" },
                        example: 1
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
                    200: {
                        description: "Usuario atualizado com sucesso",
                        content: { "application": { exemple: "usuario atualizado" } }
                    },
                    404: {
                        description: "Usuario não encontrado",
                        content: {
                            "application": {
                                exemple: "usuario não encontrado"

                            },
                            500: {
                                description: "Erro no servidor"
                            }
                        }
                    }
                }}},

        "/departamentos": {
            get: {
                tags: ["Departamentos"],
                summary: ["listar Departamentos"],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "apllication/json": {
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
        "/departmentos/{id_departamento}": {
            put: {
                tags: ["departamentos"],
                summary: "atualizar departamentos completo",
                description: `Atualiza todos os campo de um departamento existente, sendo necessario 
                enviar todos os campos (nome,descricao)`,
                parameters: [
                    {
                        name: "id_departamento",
                        in: "path",
                        required: true,
                        description: "ID do departamento a ser atulizado",
                        schema: { type: "integer" },
                        example: 1
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
                    200: {
                        description: "departamento atualizado com sucesso",
                        content: { "application": { exemple: "departamento atualizado" } }
                    },
                    404: {
                        description: "departamento não encontrado",
                        content: {
                            "application": {
                                exemple: "departamento não encontrado"

                            },
                            500: {
                                description: "Erro no servidor"
                            }
                        }
                    }
                }}},
        "/ordem_servico": {
            get: {
                tags: ["ordem_servico"],
                summary: ["listar ordem_servico"],
                responses: {
                    200: {
                        description: "Dados obtidos com sucesso",
                        content: {
                            "apllication/json": {
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
                tags: ["ordem_servico"],
                summary: "atualizar ordem_servico completo",
                description: `Atualiza todos os campo de uma ordem existente, sendo necessario 
                enviar todos os campos (numero_ordem, titulo, descricao,prioridade,status,data,id_usuario,id_departamento)`,
                parameters: [
                    {
                        name: "id_ordem",
                        in: "path",
                        required: true,
                        description: "ID da ordem a ser atulizado",
                        schema: { type: "integer" },
                        example: 1
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
                    200: {
                        description: "ordem_servico atualizado com sucesso",
                        content: { "application": { exemple: "ordem_servico atualizado" } }
                    },
                    404: {
                        description: "ordem_servico não encontrado",
                        content: {
                            "application": {
                                exemple: "ordem_servico não encontrado"

                            },
                            500: {
                                description: "Erro no servidor"
                            }
                        }
                    }
                }}},
    },
            components: {
                schemas: {
                    lista_Usuarios: {
                        type: "object",
                        properties: {
                            id: { type: "integer", exemple: 1 },
                            nome: { type: "string", exemple: "ricardo" },
                            email: { type: "string", exemple: "ricardo@gmail.com" }
                        }
                    },
                    Cadastro_Usuario: {
                        type: "object",
                        properties: {
                            nome: { type: "string", example: "maria clara" },
                            email: { type: "string", example: "Mariaclara@email.com" },
                            senha: { type: "string", example: "maria123" }
                        }},
                        Atualizacao_Usuario: {
                            type: "object",
                            properties: {
                                nome: { type: "string", example: "maria clara" },
                                email: { type: "string", example: "Mariaclara@email.com" },
                                senha: { type: "string", example: "maria123" }
                            }},
                            lista_Departamentos: {
                                type: "object",
                                properties: {
                                    id: { type: "integer", exemple: 1 },
                                    nome: { type: "string", exemple: "TI" },
                                    descricao: { type: "string", exemple: "tecnologia da informação" }
                                }
                            },
                             Cadastro_Departamento: {
                        type: "object",
                        properties: {
                            nome: { type: "string", example: "tI" },
                            descricao: { type: "string", example: "tecnologia da informação" }
                        }},
                        Atualizacao_Departamento: {
                            type: "object",
                            properties: {
                            nome: { type: "string", example: "tI" },
                            descricao: { type: "string", example: "tecnologia da informação" }
                            }},
                            lista_ordem_servico: {
                                type: "object",
                                properties: {
                                    id: { type: "integer", exemple: 1 },
                                    numero_ordem: { type: "integer", exemple: 1 },
                                    titulo: { type: "string", exemple: "Troca de cabo de rede" },
                                    descricao: { type: "string", exemple: "Ponto de rede da sala 203 esta sem conexão" },
                                    prioridade: { type: "string", exemple: "media" },
                                    status: { type: "string", exemple: "aberta" },
                                    id_usuario: { type: "integer", exemple: "1" },
                                    id_deprtamento: { type: "integer", exemple: "1" },
                                }
                            },
                            Cadastro_Ordem: {
                        type: "object",
                        properties: {
                            numero_ordem: { type: "number", example: "1001" },
                            titulo: { type: "string", example: "trocar cabo de rede" },
                            descricao: { type: "string", example: "ponto de rede da sala 203 está sem conexão" },
                            prioridade: { type: "string", example: "media" },
                            status: { type: "string", example: "aberta" },
                            data: { type: "string", example: "2026-02-26" },
                            id_usuario: { type: "number", example: "1" },
                            id_deprtamento: { type: "number", example: "1" }
                        }},
                        Atualizacao_ordem: {
                            type: "object",
                            properties: {
                           numero_ordem: { type: "number", example: "1001" },
                            titulo: { type: "string", example: "trocar cabo de rede" },
                            descricao: { type: "string", example: "ponto de rede da sala 203 está sem conexão" },
                            prioridade: { type: "string", example: "media" },
                            status: { type: "string", example: "aberta" },
                            data: { type: "string", example: "2026-02-26" },
                            id_usuario: { type: "number", example: "1" },
                            id_deprtamento: { type: "number", example: "1" }
                            }},
    
                        }
                    }
                }
            
        




export default documentacao