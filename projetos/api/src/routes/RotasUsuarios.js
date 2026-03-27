import { Router } from "express";
import {BD} from "../../db.js"; 
import bcrypt from 'bcrypt'

const router = Router(); 

//criando o endpoint para listar todos os usuarios
router.get('/usuarios', async(req,res)=> {
    try{
        //cria uma varivel para enviar um comando sql 
        const query = `SELECT * FROM usuarios WHERE ativo = true ORDER BY id_usuario`

        //cria uma variavel para receber o retorno do sql
        const usuarios = await BD.query(query);

        //retorno par a pagina, json com os dados 
        // buscados do sql 
       return res.status(200).json(usuarios.rows); //200 ok
    } catch(error){
        console.error('erro ao listar usuarios', error.menssage);
       return  res.status(500).json({error: 'erro ao listar usuarios'})
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
router.post('/usuarios', async(req, res) => {
    const {nome, email, senha, tipo_acesso} = req.body;
    try{
        //definir  força da criptogrfia
        const saltRounds= 10;
        // gerando  rest da senha 
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)
        const comando = `INSERT INTO USUARIOS(nome, email, senha, tipo_acesso) VALUES($1, $2, $3, $4,$5)`
        const valores = [nome, email, senhaCriptografada, tipo_acesso];
       
        await BD.query(comando, valores);
        console.log(comando, valores);
       
       return res.status(201).json("Usuário cadastrado.")
    }catch(error){
        console.error('Erro ao cadastrar usuários', error.message);
       return res.status(500).json({error: 'Erro ao cadastrar usuarios'})
    }
})
//endpoint para atualizar um unico usuario
//recebendo o parmetro pelo id e buscando o usuario
router.put ('/usuarios/:id_usuario', async(req,res) => {
    //id recebido via parametro
    const {id_usuario} = req.params
    // dados do usuario recebido via corpo da pagina
    const {nome, email, senha, tipo_acesso} = req.body; 
    try{
        //verificar se o usuario existe
        const verificarUsuario= await BD.query (`SELECT * FROM USUARIOS 
            WHERE id_usuario = $1 and ativo = true`, [id_usuario])
        if(verificarUsuario.rows.length === 0 ){
            return res.status(404).json({message: 'Usuario não encontrado'})
        }
        const saltRounds= 10;
        // gerando  rest da senha 
        const senhaCriptografada = await bcrypt.hash(senha, saltRounds)
        
        //atualiza todos os campos da tabela ( PUT substituição completa)
        const comando = `UPDATE USUARIOS SET nome = $1, email= $2, senha = $3, tipo_acesso = $4 WHERE
        id_usuario = $5`; 
        const valores = [nome,email, senhaCriptografada ,tipo_acesso, id_usuario]; 
        await BD.query (comando,valores); 

        return res.status(200).json(`Usuario foi atualizado! `)
    }catch(error){
        console.error('Erro ao atualizar usuarios', error.message); 
        return res.status(500).json({eeror: `Erro ao atualizr usuarios`})
    }
})
//rota patch atulizando parcialmente as informaçoes 
router.patch('/usuarios/id:usuario',async(req,res)  => {
    const {id_usuario} = req.params;
    const {nome,email,senha,tipo_acesso, ativo} = req.body;

    try{
        const verificarUsuario= await BD.query (`SELECT * FROM USUARIOS 
            WHERE id_usuario = $1`, [id_usuario])
        if(verificarUsuario.rows.length === 0 ){
            return res.status(404).json({message: 'Usuario não encontrado'})
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
    if(email!== undefined){
        campos.push(`email = $${contador}`)
        valores.push(email)
        contador++;
    }
    if(senha!== undefined){
        campos.push(`senha = $${contador}`)
        valores.push(senha)
        contador++;
    }
    if(tipo_acesso!== undefined){
        campos.push(`tipo_acesso = $${contador}`)
        valores.push(tipo_acesso)
        contador++;
    }
    
    
    //se nenhum campo fou enviado
    if(campos.length ===0 ){
        return res.status(400).json({message: "nenhum campo a atualizar"})
    }

    //adicionando ID ao final de valores 
    const comando = `UPDATE USUARIOS SET ${campos.join(',')} WHERE ID USUARIO = $${contador}`
    await BD.query (comando,valores)
    
    return res.status(200).json ('usuario atuzalizado com sucesso')
    }catch(error){
        console.error('Erro ao atualizar usuario', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})

    }
})
router.delete('/usuarios/:id_usuario', async (req,res) => {
    const {id_usuario} = req.params;
  try{
    //exuta o comando de delete
    const comando = `UPDATE USUARIOS SET ativo= false WHERE id_usuario = $1`
    await BD.query(comando, [id_usuario])
    return res.status(200).json({message: "Usuario desativado com sucesso"})
  }catch(error){
        console.error('Erro ao desativar usuario', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})

    }
})
//endpoint de login
router.post('/login', async(req,res) => {
    const {email,senha} = req.body; 
    //validação de entrda
    if(!email || !senha){
        return res.status(400).json ({message: 'email e senha são obrigatorios'})
    }
    try{
        //buscar usuario pelo email
        const comando = 'SELECT id_usuario,nome,email,senha FROM USUARIOS WHERE email=$1 and ativo= true'
        const resultado= await BD.query(comando,[email])

       if(resultado.rows.length ===0 ){
       return res.status(401).json({message: 'email nao encontrado'})
       }

      const usuario = resultado.rows [0]

      //verifica se são iguais
      if(usuario.senha!== senha){
        return res.status(401).json({message: 'senha invalida'})
      }
     return res.status (200).json({
      message: 'login realizado com sucesso',
      usuario: {
        id: usuario.id_usuario,
        nome: usuario.nome,
        email: usuario.email
      }
     })
    } catch(error){
        console.error('Erro ao atualizar usuario', error.menssage)
        return res.status(500).json({message: "erro interno do servidor"+ error.menssage})
    }
})

export default router