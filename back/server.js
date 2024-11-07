// pra puxar info do banco de dados

const express = require('express');
const cors = require('cors');
const sqlite3 = require('sqlite3').verbose();

const app = express();
const port = 3000;

// serve pra habilitar o cors
app.use(cors());

// conecta com o banco sqlite
const db = new sqlite3.Database('./db.sqlite', (err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err.message);
  }
});

// pegar os dados de temp
app.get('/api/sensores/temperatura', (req, res) => {
  db.all('SELECT * app_smart_temperaturadata', [], (err, rows) => {
    if (err) {
      throw err;
    }
    res.json(rows); // os dados retornam como json
  });
});

// pegar os dados da umidade
app.get('/api/sensores/umidade', (req, res) => {
    db.all('SELECT * app_smart_umidadedata', [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows); // os dados retornam como json
    });
});
  

// pegar os dados de luminosidade
app.get('/api/sensores/luminosidade', (req, res) => {
    db.all('SELECT * app_smart_luminosidadedata', [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows); // os dados retornam como json
    });
});

// pegar os dados do contador
app.get('/api/sensores/contador', (req, res) => {
    db.all('SELECT * app_smart_contadordata', [], (err, rows) => {
      if (err) {
        throw err;
      }
      res.json(rows); // os dados retornam como json
    });
});
  
  


app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
