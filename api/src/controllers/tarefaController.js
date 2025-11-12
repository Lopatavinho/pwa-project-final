let tarefas = [];
let idAtual = 1;

export const listar = (req, res) => {
  res.json(tarefas);
};

export const criar = (req, res) => {
  const { titulo, descricao } = req.body;

  if (!titulo || !descricao) {
    return res.status(400).json({ erro: 'Título e descrição são obrigatórios.' });
  }

  const nova = { id: idAtual++, titulo, descricao, status: 'Pendente' };
  tarefas.push(nova);
  res.status(201).json(nova);
};

export const excluir = (req, res) => {
  const id = parseInt(req.params.id);
  tarefas = tarefas.filter(t => t.id !== id);
  res.status(204).send();
};

export default { listar, criar, excluir };
