import axios from 'axios';

// criando uma instância do axios
// criando uma instância, pois, vamos setar informações que são padrão para todas as requisições para nossa api

export const api = axios.create({
  baseURL: 'http://localhost:3000/api',

}); 

