import express from 'express';
import livroController from '../controllers/livroController.js';

const router = express.Router()

//rota pra listar livrosss
router.get('/livros', livroController.listar); 

//rota para adiconar livros 
router.post('/livros', livroController.adicionar);

//rota pra marcar como lidoooo
router.post('/livros/marcar-lido', livroController.marcarComoLido);

export default router; 



