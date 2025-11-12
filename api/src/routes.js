import express from 'express';
import tarefaController from './controllers/tarefaController.js';

const router = express.Router();

// Rota de status
router.get('/status', (req, res) => {
  res.json({ mensagem: 'API funcionando!' });
});


// Rotas CRUD
router.get('/tarefas', tarefaController.listar);
router.post('/tarefas', tarefaController.criar);
router.delete('/tarefas/:id', tarefaController.excluir);

export default router;
