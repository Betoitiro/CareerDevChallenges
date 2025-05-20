const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,         // ex: 'postgres'
  host: process.env.DB_HOST,         // ex: 'localhost'
  database: process.env.DB_NAME,     // ex: 'meubanco'
  password: process.env.DB_PASSWORD, // ex: 'senha123'
  port: process.env.DB_PORT || 5432, // default do PostgreSQL
});

pool.connect()
  .then(() => console.log('📦 Conectado ao banco de dados PostgreSQL com sucesso.'))
  .catch((err) => console.error('❌ Erro ao conectar ao banco de dados:', err));

module.exports = pool;
  