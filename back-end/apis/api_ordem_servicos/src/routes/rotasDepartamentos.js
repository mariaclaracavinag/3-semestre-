import { Router } from "express";
import {BD} from "../../db.js"; 

const router = Router(); 

//criando o endpoint para listar todos os usuarios
router.get('/departamentos', async(req,res)=> {
    try{
        //cria uma varivel para enviar um comando sql 
        const query = `SELECT * FROM departamentos ORDER BY id_departamento`

        //cria uma variavel para receber o retorno do sql
        const departamentos = await BD.query(query);

        //retorno par a pagina, json com os dados 
        // buscados do sql 
        res.status(200).json(departamentos.rows); //200 ok
    } catch(error){
        console.error('erro ao listar departamentos', error.menssage);
        res.status(500).json({error: 'erro ao listar departamentos'})
    }
})

router.post('/DEPARTAMENTOS', async(req, res) => {
    const {nome,descricao} = req.body;
    try{
        const comando = `INSERT INTO DEPARTAMENTOS(nome,descricao) VALUES($1, $2, $3)`
        const valores = [nome, descricao];
       
        await BD.query(comando, valores);
        console.log(comando, valores);
       
       return res.status(201).json("Departamento cadastrado.")
    }catch(error){
        console.error('Erro ao cadastrar departamentos', error.message);
       return res.status(500).json({error: 'Erro ao cadastrar departmentos'})
    }
})

router.put ('/deparmentos/:id_departamento', async(req,res) => {
    //id recebido via parametro
    const {id_departamento} = req.params
    // dados do usuario recebido via corpo da pagina
    const {nome,descricao} = req.body; 
    try{
        //verificar se o usuario existe
        const verificarDepartamento= await BD.query (`SELECT * FROM DEPARTAMENTOS 
            WHERE id_Departamento = $1`, [id_Departamento])
        if(verificarDepartamento.rows.length === 0 ){
            return res.status(404).json({message: 'Departamento não encontrado'})
        }
        //atualiza todos os campos da tabela ( PUT substituição completa)
        const comando = `UPDATE DEPARTAMENTOS SET nome = $1, descricao= $2,WHERE
        id_departamento = $3`; 
        const valores = [nome,descricao, id_departamento]; 
        await BD.query (comando,valores); 

        return res.status(200).json(`Departamento foi atualizado! `)
    }catch(error){
        console.error('Erro ao atualizar departamentos', error.message); 
        return res.status(500).json({eeror: `Erro ao atualizar departamentos`})
    }
})
export default router