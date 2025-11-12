const express = require('express');
const router = express.Router();
const tarefaController = require('./controllers/tarefaController');

// Rota de teste
router.get('/', (req, res) => {
  res.json({ message: 'API funcionando!' });
});

// Rotas CRUD
router.get('/tarefas', tarefaController.listar);
router.post('/tarefas', tarefaController.criar);
router.delete('/tarefas/:id', tarefaController.excluir);

module.exports = router;
