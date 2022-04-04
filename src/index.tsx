import React from 'react';
import ReactDOM from 'react-dom';
import { createServer, Model } from 'miragejs';
import {App} from './App';

createServer({
  models: {
    transaction: Model,

  },
  seeds(server) {
    server.db.loadData({
      transactions: [
        {
          id: 1,
          title: 'Desenvolvimento de sistema',
          type: 'deposit',
          amount: 15000,
          category: 'Desenvolvimento',
          createdAt: new Date('2022-05-30 20:00:00'),
        },
        {
          id: 2,
          title: 'Financiamento Casa',
          type: 'withdraw',
          amount: 1438,
          category: 'Moradia',
          createdAt: new Date('2022-05-22 10:00:00'),
        }
      ]
    })
  },
  routes() {
    this.namespace = 'api';
    this.get('/transactions', () => {
      return this.schema.all('transaction');
    });
    this.post('/transactions', (schema, request) => {
      const data = JSON.parse( request.requestBody);
      return schema.create('transaction', data);
    });
  }
 })
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

