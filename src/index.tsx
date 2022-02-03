import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import { App } from './App';

createServer({
    // banco de dados interno do mirage
    models: {
      transaction: Model,// primeiro modelo
    },

    // deixandos dados pré-cadastrados p/ deixar a interface mais amigável
    seeds(server) { 
      server.db.loadData({
        transactions: [       // nome da tabela, que é o nome do modelo no plural
          {
            id: 1,
            title: 'Freelancer de website',
            type: 'deposit',
            category: 'Dev',
            amount: 6000,
            createdAt: new Date('2021-02-12 09:00:00'),
          },
          {
            id: 2,
            title: 'Aluguel',
            type: 'withdraw',
            category: 'casa',
            amount: 1100,
            createdAt: new Date('2021-02-14 11:00:00'),
          },
        ],
      })
    },

    routes() { // definindo quais rotas vai ter na api ficticia
      this.namespace = 'api'; // dizendo pro mirage que todas chamadas a api q será feita, vai estar apartir de '/api', será direcionada para o miragejs

      // fazendo requisição get para rota 'transactions', obs: não precisa colocar 'api'
      this.get('/transactions', () => {
        return this.schema.all('transaction'); // retornando as transações
      })

      // criando rota para inserir transactions
      // request -> dados que estão sendo enviados em api.post('/transactions', data);
      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody) // request.requestBody, por padrão os dados vem em texto, como estamos enviando um json (objeto), precisamos converter o dado de texto para objeto no js.
        
        // transaction -> model que eu quero inserir, data -> os dados
        return schema.create('transaciton', data); /// schema -> banco de dados  
      })
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);