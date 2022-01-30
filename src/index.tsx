import React from 'react';
import ReactDOM from 'react-dom';
import { createServer } from 'miragejs';
import { App } from './App';

createServer({
    routes() { // definindo quais rotas vai ter na api ficticia
      this.namespace = 'api';

      // fazendo requisição get para rota 'transactions', obs: não precisa colocar 'api'
      this.get('/transactions', () => {
        return [
          {
            id: 1,
            title: 'transaction 1',
            amount: 400,
            type: 'deposit',
            category: 'Food',
            createAt: new Date()
          }
        ]
      }) 
    }
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);