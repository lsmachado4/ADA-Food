require("dotenv").config();
const express = require('express');
const routes = require('./src/routes');

const app = express();
const PORT = process.env.PORT || 3002;

app.use(routes);
app.use(express.json());


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${port}`);
});