const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./shared/database');
const routes = require('./routes/index');

const app = express();

app.use(bodyParser.json());

app.set('sequelize', sequelize);
app.set('models', sequelize.models);

app.use('/', routes);

app.listen(3001, () => {
    console.log('Listening on Port 3001');
});
