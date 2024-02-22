// Este arquivo é o ponto de entrada da sua aplicação.
// Aqui você irá configurar e iniciar o servidor HTTP, definindo o porto e conectando-se às rotas.

const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

// Conecta as rotas à aplicação
app.use('/address', routes);
app.use(express.json());

// Inicia o servidor HTTP
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

