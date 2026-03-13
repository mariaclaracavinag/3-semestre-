import express from 'express';
import jogadorController from '../controllers/jogadorcontroller.js';

const router = express.Router()

//rota pra listar livrosss
router.get('/jogadores', jogadorController.listar); 

//rota para adiconar livros 
router.post('/jogadores', jogadorController.adicionar);

router.post('/jogadores/adicionar-ponto', jogadorController.adicionarPontos);


export default router; 



