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
//rota patch atulizando parcialmente as informaçoes 
router.patch('/departamentos/id:departamento',async(req,res)  => {
    const {id_departamento} = req.params;
    const {nome,descricao} = req.body;

    try{
        //verificar se o usuario existe
        const verificarDepartamento= await BD.query (`SELECT * FROM DEPARTAMENTOS 
            WHERE id_Departamento = $1`, [id_Departamento])
        if(verificarDepartamento.rows.length === 0 ){
            return res.status(404).json({message: 'Departamento não encontrado'})
        }


     //montar o update dinamicmente (apenas campos diferentes)
     const campos =[];
     const valores =[]; 
     let contador = 1; 

    if(nome!== undefined){
        campos.push(`nome = $${contador}`)
        valores.push(nome)
        contador++;
    }
    if(descricao!== undefined){
        campos.push(`descricao = $${contador}`)
        valores.push(descricao)
        contador++;
    }
    //se nenhum campo fou enviado
    if(campos.length ===0 ){
        return res.status(400).json({message: "nenhum campo a atualizar"})
    }

    //adicionando ID ao final de valores 
    const comando = `UPDATE departamentos SET ${campos.join(',')} WHERE ID departamento = $${contador}`
    await BD.query (comando,valores)
    
    return res.status(200).json ('departamento atuzalizado com sucesso')
    }catch(error){
        console.error('Erro ao atualizar departamento', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})

    }
})
router.delete('/departamentos/id:departamento', async (req,res) => {
    const {id_departamento} = req.params;
  try{
    //exuta o comando de delete
    const comando = `DELETE FROM departamentos WHERE id_departamento = $1`
    await BD.query(comando, [id_departamento])
    return res.status(200).json({message: "departamento removido com sucesso"})
  }catch(error){
        console.error('Erro ao atualizar departamento', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})

    }
})

export default router