import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//criando o endpoint para listar todos os usuarios
router.get('/categorias', async (req, res) => {
    try {
        //cria uma varivel para enviar um comando sql 
        const comando = `SELECT * FROM categorias WHERE ativo = true ORDER BY id_categoria`

        //cria uma variavel para receber o retorno do sql
        const categorias = await BD.query(comando);

        //retorno par a pagina, json com os dados 
        // buscados do sql 
        return res.status(200).json(categorias.rows); //200 ok
    } catch (error) {
        console.error('erro ao listar categorias', error.menssage);
        return res.status(500).json({ error: 'erro ao listar categorias' })
    }
})

// //Endpoint para adicionar um novo usuário
// //O endpoint com parâmetros diretos no comando SQL, permite o SQL Injection
// router.post('/usuarios', async(req, res) => {
//     const nome = req.body.nome;
//     const email = req.body.email;
//     const senha = req.body.senha;

//     try{
//         const comando = `INSERT INTO teste(nome, email, senha) VALUES('${nome}', '${email}', '${senha}')`

//         console.log(comando);
//         await BD.query(comando);
//         res.status(201).json("Usuário cadastrado.")
//     }catch(error){
//         console.error('Erro ao cadastrar usuários', error.message);
//         res.status(500).json({error: 'Erro ao cadastrar usuarios'})
//     }
// })

//Endpoint seguro contra sql injection
router.post('/categorias', async (req, res) => {
    try {
        const { nome, descricao, tipo, cor, icone } = req.body;

        const comando = `INSERT INTO CATEGORIAS (nome, descricao, tipo, cor, icone) VALUES($1, $2, $3, $4, $5)`
        const valores = [nome, descricao, tipo, cor, icone];

        await BD.query(comando, valores);
        console.log(comando, valores);

        return res.status(201).json("categoria cadastrada.")
    } catch (error) {
        console.error('Erro ao cadastrar categoria', error.message);
        return res.status(500).json({ error: 'Erro ao cadastrar categoria' })
    }
})
//endpoint para atualizar um unico usuario
//recebendo o parmetro pelo id e buscando o usuario
router.put('/categorias/:id_categoria', async (req, res) => {
    //id recebido via parametro
    const { id_categoria } = req.params
    // dados do usuario recebido via corpo da pagina
    const { nome, descricao, tipo, cor, icone } = req.body;
    try {
        //verificar se o usuario existe
        const verificarCategoria = await BD.query(`SELECT * FROM CATEGORIAS 
            WHERE id_categoria = $1 and ativo = true`, [id_categoria])
        if (verificarCategoria.rows.length === 0) {
            return res.status(404).json({ message: 'categoria não encontrado' })
        }

        //atualiza todos os campos da tabela ( PUT substituição completa)
        const comando = `UPDATE CATEGORIAS SET nome = $1, descricao  = $2, tipo = $3, cor  = $4, icone = $5 WHERE
        id_categoria = $6`;
        const valores = [nome, descricao, tipo, cor, icone, id_categoria];
        await BD.query(comando, valores);
        
        return res.status(200).json(`categoria foi atualizado! `)
    } catch (error) {
        console.error('Erro ao atualizar categorias', error.message);
        return res.status(500).json({ eeror: `Erro ao atualizar categorias` })
    }
})
//rota patch atulizando parcialmente as informaçoes 
router.patch('/categorias/id:categoria', async (req, res) => {
    const { id_categoria } = req.params;
    const { nome, descricao, tipo, cor, icone } = req.body;

    try {
        const verificarCategoria = await BD.query(`SELECT * FROM categorias 
            WHERE id_categoria = $1`, [id_categoria])
        if (verificarCategoria.rows.length === 0) {
            return res.status(404).json({ message: 'Categoria não encontrado' })
        }


        //montar o update dinamicmente (apenas campos diferentes)
        const campos = [];
        const valores = [];
        let contador = 1;

        if (nome !== undefined) {
            campos.push(`nome = $${contador}`)
            valores.push(nome)
            contador++;
        }
        if (descricao!== undefined) {
            campos.push(`descricao = $${contador}`)
            valores.push(descricao)
            contador++;
        }
        if (tipo !== undefined) {
            campos.push(`tipo = $${contador}`)
            valores.push(tipo)
            contador++;
        }
        if (cor !== undefined) {
            campos.push(`cor = $${contador}`)
            valores.push(cor)
            contador++;
        }
        if (icone !== undefined) {
            campos.push(`icone  = $${contador}`)
            valores.push(icone )
            contador++;
        }


        //se nenhum campo fou enviado
        if (campos.length === 0) {
            return res.status(400).json({ message: "nenhum campo a atualizar" })
        }

        //adicionando ID ao final de valores 
        const comando = `UPDATE categorias SET ${campos.join(',')} WHERE ID CATEGORIA = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('categoria atuzalizado com sucesso')
    } catch (error) {
        console.error('Erro ao atualizar categoria', error.menssage)
        return res.status(500).json({ message: "erro interno do servidor" + error.menssage })

    }
})
router.delete('/categorias/:id_categoria', async (req, res) => {
    const { id_categoria} = req.params;
    try {
        //exuta o comando de delete
        const comando = `UPDATE categorias SET ativo= false WHERE id_categoria = $1`
        await BD.query(comando, [id_categoria])
        return res.status(200).json({ message: "Categoria desativado com sucesso" })
    } catch (error) {
        console.error('Erro ao desativar categoria', error.menssage)
        return res.status(500).json({ message: "erro interno do servidor" + error.menssage })

    }
})


export default router