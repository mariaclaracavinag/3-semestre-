import { Pool } from 'pg';

import pkg from 'pg';

const { Pool } = pkg;

const BD = new Pool({

connectionString:
"postgres://postgres.tmiiserpsxildnhnlayv:eBUNewfAl6zEsx5C@aws-1-us-east-1.pooler.supabase.com:6543/postgress",

ssl: {

rejectUnauthorized: false // O Supabase requer SSL

}

});
//const BD = new Pool ({
    user: 'postgres',
   // host: 'localhost',
    //database: 'bd_produtos_3b', 
   // port: 5432, 
    //password: 'admin'
//})

//const BD = new Pool ({
   // user: 'postgres',
   // host: 'db.jwyhjtpfwhyxjkaqtpwe.supabase.co',
   // database: 'postgres', 
    //port: 5432, 
    //password: 'bancodedadossenai'
//})

const testarConexao = async () => {
    try{
         const cliente = await BD.connect();
         console.log('conexão realizada com sucesso!');
         cliente.release(); //libera conexao
    }
    catch(error){
        console.error(`Erro ao conectar ao banco`, error.message)
    }
}

export {BD,testarConexao}