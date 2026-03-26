import { Router } from "express";
import {BD} from "../../db.js"; 

const router = Router(); 

//criando o endpoint para listar todos os usuarios
router.get('/ordem_servico', async(req,res)=> {
    try{
        //cria uma varivel para enviar um comando sql 
        const query = `SELECT * FROM ordem_servico ORDER BY id_ordem`

        //cria uma variavel para receber o retorno do sql
        const ordem_servico = await BD.query(query);

        //retorno par a pagina, json com os dados 
        // buscados do sql 
        res.status(200).json(ordem_servico.rows); //200 ok
    } catch(error){
        console.error('erro ao listar ordem_servico', error.menssage);
        res.status(500).json({error: 'erro ao listar ordem_servico'})
    }
})
router.post('/OrdemServico', async(req, res) => {
    const {numero_ordem, titulo, descricao, prioridade,status,id_usuario,id_departamento} = req.body;
    try{
        const comando = `INSERT INTO Ordem_servico (numero_ordem, titulo, descricao, prioridade,status,id_usuario,id_departamento) VALUES($1, $2, $3, $4,$5,$6,$7 )`
        const valores = [numero_ordem, titulo, descricao, prioridade,status,id_usuario,id_departamento];
       
        await BD.query(comando, valores);
        console.log(comando, valores);
       
       return res.status(201).json("Departamento cadastrado.")
    }catch(error){
        console.error('Erro ao cadastrar departamentos', error.message);
       return res.status(500).json({error: 'Erro ao cadastrar departmentos'})
    }
})
router.put ('/ordem_servico/:id_ordem', async(req,res) => {
    //id recebido via parametro
    const {id_ordem} = req.params
    // dados do usuario recebido via corpo da pagina
    const {numero_ordem, titulo, descricao, prioridade,status,data,id_usuario,id_departamento} = req.body; 
    try{
        //verificar se o usuario existe
        const verificarOrdem= await BD.query (`SELECT * FROM ORDEM_SERVICO 
            WHERE id_ordem = $1`, [id_ordem])
        if(verificarOrdem.rows.length === 0 ){
            return res.status(404).json({message: 'ordem_ serviço não encontrado'})
        }
        //atualiza todos os campos da tabela ( PUT substituição completa)
        const comando = `UPDATE ORDEM_SERVICO SET numero_ordem = $1, titulo=$2, descricao=$3, prioridade=$4,status=$5,data=$6,id_usuario=$7, id_departamento=$8 WHERE id_ordem = $9`; 
        const valores = [numero_ordem, titulo, descricao, prioridade,status,data,id_usuario,id_departamento, id_ordem]; 
        await BD.query (comando,valores); 

        return res.status(200).json(`Ordem_servico foi atualizado! `)
    }catch(error){
        console.error('Erro ao atualizar ordem_servico', error.message); 
        return res.status(500).json({eeror: `Erro ao atualizar ordem_servico`})
    }
})
//rota patch atulizando parcialmente as informaçoes 
router.patch('/ordemServico/id:ordem',async(req,res)  => {
    const {id_ordem} = req.params;
    const {numero_ordem,titulo,descricao,prioridade,status,data, id_usuario,id_departamento} = req.body;

    try{
        //verificar se o usuario existe
        const verificarOrdem= await BD.query (`SELECT * FROM ORDEM_SERVICO 
            WHERE id_ordem = $1`, [id_ordem])
        if(verificarOrdem.rows.length === 0 ){
            return res.status(404).json({message: 'ordem_ serviço não encontrado'})
        }


     //montar o update dinamicmente (apenas campos diferentes)
     const campos =[];
     const valores =[]; 
     let contador = 1; 

    if(numero_ordem!== undefined){
        campos.push(`numero_ordem = $${contador}`)
        valores.push(numero_ordem)
        contador++;
    }
    if(titulo!== undefined){
        campos.push(`titulo = $${contador}`)
        valores.push(titulo)
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
    const comando = `UPDATE Ordem_servico SET ${campos.join(',')} WHERE ID ORDEM = $${contador}`
    await BD.query (comando,valores)
    
    return res.status(200).json ('ordem serviço atuzalizado com sucesso')
    }catch(error){
        console.error('Erro ao atualizar ordem serviço', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})

    }
})
router.delete('/ordem_servico/:id_ordem', async (req,res) => {
    const {id_ordem} = req.params;
  try{
    //exuta o comando de delete
    const comando = `DELETE FROM Ordem_servico WHERE id_ordem = $1`
    await BD.query(comando, [id_ordem])
    return res.status(200).json({message: "ordem removido com sucesso"})
  }catch(error){
        console.error('Erro ao atualizar ordem', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})

    }
})


export default router