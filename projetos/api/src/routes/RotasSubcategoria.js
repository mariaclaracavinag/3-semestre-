import { Router } from "express";
import { BD } from "../../db.js";

const router = Router();

//criando o endpoint para listar todos os usuarios
router.get('/subsubcategorias', async (req, res) => {
    try {
        //cria uma varivel para enviar um comando sql 
        const comando = `SELECT * FROM subcategorias WHERE ativo = true ORDER BY id_categoria`

        //cria uma variavel para receber o retorno do sql
        const subcategorias = await BD.query(comando);

        //retorno par a pagina, json com os dados 
        // buscados do sql 
        return res.status(200).json(subcategorias.rows); //200 ok
    } catch (error) {
        console.error('erro ao listar subcategorias', error.menssage);
        return res.status(500).json({ error: 'erro ao listar subcategorias' })
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
router.post('/subcategorias', async (req, res) => {
    try {
        const { nome, ativo,id_categoria } = req.body;

        const comando = `INSERT INTO subcategorias (nome, ativo,id_categoria) VALUES($1, $2, $3)`
        const valores = [nome, ativo,id_categoria];

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
router.put('/subcategorias/:id_subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;
    const { nome, ativo, id_categoria } = req.body;

    try {
        const verificarCategoria = await BD.query(
            `SELECT * FROM subcategorias WHERE id_subcategoria = $1`,
            [id_subcategoria]
        );

        if (verificarCategoria.rows.length === 0) {
            return res.status(404).json({ message: 'Subcategoria não encontrada' });
        }

        const comando = `
            UPDATE subcategorias 
            SET nome = $1, ativo = $2, id_categoria = $3
            WHERE id_subcategoria = $4
        `;

        const valores = [nome, ativo, id_categoria, id_subcategoria];

        await BD.query(comando, valores);

        return res.status(200).json('Subcategoria atualizada!');
    } catch (error) {
        console.error('Erro ao atualizar subcategorias', error.message);
        return res.status(500).json({ error: 'Erro ao atualizar subcategorias' });
    }
});
//rota patch atulizando parcialmente as informaçoes 
router.patch('/subcategorias/id:subcategoria', async (req, res) => {
    const { id_subcategoria } = req.params;
    const { nome, ativo,id_categoria } = req.body;

    try {
        const verificarSubCategoria = await BD.query(`SELECT * FROM subcategorias 
            WHERE id_subcategoria = $1`, [id_subcategoria])
        if (verificarSubCategoria.rows.length === 0) {
            return res.status(404).json({ message: 'SubCategoria não encontrado' })
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
        if (ativo!== undefined) {
            campos.push(`ativo = $${contador}`)
            valores.push(ativo)
            contador++;
        }
        if (id_categoria !== undefined) {
            campos.push(`id_categoria = $${contador}`)
            valores.push(id_categoria)
            contador++;
        }


        //se nenhum campo fou enviado
        if (campos.length === 0) {
            return res.status(400).json({ message: "nenhum campo a atualizar" })
        }

        //adicionando ID ao final de valores 
        const comando = `UPDATE subcategorias SET ${campos.join(',')} WHERE ID SUBCATEGORIA = $${contador}`
        await BD.query(comando, valores)

        return res.status(200).json('Subcategoria atuzalizado com sucesso')
    } catch (error) {
        console.error('Erro ao atualizar Subcategoria', error.menssage)
        return res.status(500).json({ message: "erro interno do servidor" + error.menssage })

    }
})
router.delete('/subcategorias/:id_subcategoria', async (req, res) => {
    const { id_subcategoria} = req.params;
    try {
        //exuta o comando de delete
        const comando = `UPDATE subcategorias SET ativo= false WHERE id_subcategoria = $1`
        await BD.query(comando, [id_subcategoria])
        return res.status(200).json({ message: "SubCategoria desativado com sucesso" })
    } catch (error) {
        console.error('Erro ao desativar Subcategoria', error.menssage)
        return res.status(500).json({ message: "erro interno do servidor" + error.menssage })

    }
})


export default router