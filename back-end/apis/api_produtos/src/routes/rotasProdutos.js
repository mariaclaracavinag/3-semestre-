import { Router } from "express";
import {BD} from "../../db.js"; 

const router = Router(); 

//criando o endpoint para listar todos os usuarios
router.get('/produtos', async(req,res)=> {
    try{
        //cria uma varivel para enviar um comando sql 
        const query = `SELECT * FROM produtos ORDER BY id_produto`

        //cria uma variavel para receber o retorno do sql
        const produtos = await BD.query(query);

        //retorno par a pagina, json com os dados 
        // buscados do sql 
        res.status(200).json(produtos.rows); //200 ok
    } catch(error){
        console.error('erro ao listar produtos', error.menssage);
        res.status(500).json({error: 'erro ao listar produtos'})
    }
})

router.post('/produtos', async(req, res) => {
    const {nome,preco,link_imagem,link_produto,categoria,frete_gratis} = req.body;
    try{
        const comando = `INSERT INTO produtos(nome,preco,link_imagem,link_produto,categoria,frete_gratis) VALUES($1, $2, $3, $4,$5, $6)`
        const valores = [nome,preco,link_imagem,link_produto,categoria,frete_gratis];
       
        await BD.query(comando, valores);
        console.log(comando, valores);
       
       return res.status(201).json("produto cadastrado.")
    }catch(error){
        console.error('Erro ao cadastrar produtos', error.message);
       return res.status(500).json({error: 'Erro ao cadastrar departmentos'})
    }
})

router.put ('/produtos/:id_produto', async(req,res) => {
    //id recebido via parametro
    const {id_produto} = req.params
    // dados do usuario recebido via corpo da pagina
    const {nome,preco,link_imagem,link_produto,categoria,frete_gratis} = req.body; 
    try{
        //verificar se o usuario existe
        const verificarproduto= await BD.query (`SELECT * FROM produtos 
            WHERE id_produto = $1`, [id_produto])
        if(verificarproduto.rows.length === 0 ){
            return res.status(404).json({message: 'produto não encontrado'})
        }
        //atualiza todos os campos da tabela ( PUT substituição completa)
        const comando = `UPDATE produtos SET nome = $1, preco= $2 link_imagem = $3 ,link_produto = $4,categoria = $5,frete_gratis = $6,WHERE
        id_produto = $7`; 
        const valores = [nome,preco,link_imagem,link_produto,categoria,frete_gratis,id_produto]; 
        await BD.query (comando,valores); 

        return res.status(200).json(`produto foi atualizado! `)
    }catch(error){
        console.error('Erro ao atualizar produtos', error.message); 
        return res.status(500).json({eeror: `Erro ao atualizar produtos`})
    }
})
//rota patch atulizando parcialmente as informaçoes 
router.patch('/produtos/id:produto',async(req,res)  => {
    const {id_produto} = req.params;
    const {nome,preco,link_imagem,link_produto,categoria,frete_gratis} = req.body;

    try{
        //verificar se o usuario existe
        const verificarproduto= await BD.query (`SELECT * FROM produtos 
            WHERE id_produto = $1`, [id_produto])
        if(verificarproduto.rows.length === 0 ){
            return res.status(404).json({message: 'produto não encontrado'})
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
    if(preco!== undefined){
        campos.push(`preco = $${contador}`)
        valores.push(preco)
        contador++;
    }
    if(link_imagem!== undefined){
        campos.push(`link_imagem= $${contador}`)
        valores.push(link_imagem)
        contador++;
    }
    if(link_produto!== undefined){
        campos.push(`link_produto = $${contador}`)
        valores.push(link_produto)
        contador++;
    }
    if(categoria!== undefined){
        campos.push(`categoria = $${contador}`)
        valores.push(categoria)
        contador++;
    }
    if(frete_gratis!== undefined){
        campos.push(`frete_gratis= $${contador}`)
        valores.push(frete_gratis)
        contador++;
    }
    
    //se nenhum campo fou enviado
    if(campos.length ===0 ){
        return res.status(400).json({message: "nenhum campo a atualizar"})
    }

    //adicionando ID ao final de valores 
    const comando = `UPDATE produtos SET ${campos.join(',')} WHERE ID produto = $${contador}`
    await BD.query (comando,valores)
    
    return res.status(200).json ('produto atuzalizado com sucesso')
    }catch(error){
        console.error('Erro ao atualizar produto', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})

    }
})
router.delete('/produtos/id:produto', async (req,res) => {
    const {id_produto} = req.params;
  try{
    //exuta o comando de delete
    const comando = `DELETE FROM produtos WHERE id_produto = $1`
    await BD.query(comando, [id_produto])
    return res.status(200).json({message: "produto removido com sucesso"})
  }catch(error){
        console.error('Erro ao atualizar produto', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})

    }
})

export default router