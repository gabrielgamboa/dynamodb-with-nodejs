const aws = require('aws-sdk');
const config = require('./configAWS');
const scanTable = require('./scanTableUsers')

const awsConfig = config;

aws.config.update(awsConfig);

const tableName = "users";
const docClient = new aws.DynamoDB.DocumentClient();

scanTable(tableName, docClient).then(item => item);