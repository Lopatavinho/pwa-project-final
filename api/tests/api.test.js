import request from 'supertest';
import app from '../src/app.js';

describe('Testes da API de Tarefas', () => {
  test('Deve retornar mensagem de status da API', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('mensagem');
  });

  test('Deve criar uma nova tarefa', async () => {
    const novaTarefa = { titulo: 'Tarefa teste', descricao: 'Descrição teste', status: 'Pendente' };
    const res = await request(app).post('/api/tarefas').send(novaTarefa);
    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty('id');
  });
});
