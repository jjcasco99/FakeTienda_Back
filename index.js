const express = require('express')
// const path = require('path');
const cors = require('cors');

const rutasApi = require('./routes/routesApi.js');

const app = express();
const port = 5000;

app.use(express.json());


app.use(cors())

app.use('/api', rutasApi);



app.listen(port, () => {
    console.log(`ServerOn http://localhost:${port}`)
});