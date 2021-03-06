const scanTableUsers = async (tableName,docClient) => {
    const params = {
        TableName: tableName,
    };

    let scanResults = [];
    let items;

    do {
        items = await docClient.scan(params).promise();
        items.Items.forEach((item) => scanResults.push(item));
        params.ExclusiveStartKey  = items.LastEvaluatedKey;

    } while(typeof items.LastEvaluatedKey != "undefined");

    return scanResults;

};

module.exports = scanTableUsers;