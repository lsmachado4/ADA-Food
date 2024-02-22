const express = require('express');
const routes = require('./src/routes');

const app = express();
const port = process.env.PORT || 3000;

app.use('/address', routes);
app.use(express.json());


app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

