import express from 'express'
import {BD, testarConexao} from './db.js'
import rotasUsuarios from './src/routes/RotasUsuarios.js'
import rotasCategorias from './src/routes/RotasCategorias.js'
import rotasTransacoes from './src/routes/RotasTransacoes.js'
import rotasSubcategorias from './src/routes/RotasSubcategoria.js'

//usando o swagger 
import swaggerui from 'swagger-ui-express'
import documentacao from './config/swagger.js'
import cors from 'cors'
const app = express(); 
app.use(express.json()); 
app.use('/swagger', swaggerui.serve, swaggerui.setup(documentacao))
app.use(cors())


app.get('/', async (req,res) => {
    await testarConexao(); 
   // res.status(200).json ("API Funcionando")
    res.redirect('/swagger')
})

//utilizando rota 
app.use(rotasUsuarios); 
app.use(rotasCategorias); 
app.use(rotasTransacoes); 
app.use(rotasSubcategorias); 

const porta= 3000;
app.listen(porta,() => {
    console.log(`http://localhost:${porta}`)
} )