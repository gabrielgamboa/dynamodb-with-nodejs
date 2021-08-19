//importando funções e objetos
const scanTableUsers = require('./scanTableUsers');
const config = require('./configAWS');

//importando bibliotecas
const aws = require('aws-sdk');
const express = require('express');

//configurando o aws.
const awsConfig = config;
aws.config.update(awsConfig);

const app = express();

const port = 3000;

app.get('/users', (request, response) => {
    const tableName = "users";
    const docClient = new aws.DynamoDB.DocumentClient();

    scanTableUsers(tableName, docClient).then(users => {
        return response.json(users);
    });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));