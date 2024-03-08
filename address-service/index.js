require("dotenv").config();
const express = require("express");
const routes = require("./src/routes");
const PORT = process.env.PORT || 3007;
const mongoose = require('mongoose');
const app = express();
app.use(express.json());
app.use(routes);

mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => {
        console.log('::: Mongo DB connected :::')
        app.listen(PORT, () => console.log(`App listening on PORT:::${PORT}`))
    }).catch(err => console.log('::: Error connecting to Mongo DB :::', err))