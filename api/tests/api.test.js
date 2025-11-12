const request = require('supertest');
const app = require('../src/index');

describe('Testes da API de Tarefas', () => {
  it('Deve retornar mensagem de status da API', async () => {
    const res = await request(app).get('/api/');
    expect(res.statusCode).toBe(200);
    expect(res.body.message).toBe('API funcionando!');
  });

  it('Deve criar uma nova tarefa', async () => {
    const res = await request(app)
      .post('/api/tarefas')
      .send({ titulo: 'Estudar', descricao: 'Revisar conteúdo de PWA' });

    expect(res.statusCode).toBe(201);
    expect(res.body.titulo).toBe('Estudar');
  });
});
