'use strict';

module.exports.genToken = (event, context, callback) => {
    const uuidv4 = require('uuid/v4');
    let sUid = uuidv4(); // ⇨ '416ac246-e7ac-49ff-93b4-f7e94d997e6b'

    const response = {
        statusCode: 200,

        body: JSON.stringify({
            message: sUid,
            input: event,
        }),
    };

    callback(null, response);

    // Use this code if you don't use the http event with the LAMBDA-PROXY integration
    // callback(null, { message: 'Go Serverless v1.0! Your function executed successfully!', event });
};