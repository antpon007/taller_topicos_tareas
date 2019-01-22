const express = require('express');
const bodyParser = require('body-parser');
const api = require('./api/v1');

const app = express();

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: false
}));

// parse application/json
app.use(bodyParser.json());

app.use('/', api);
app.use('/api', api);
app.use('/api/v1', api);

app.use((req, res, next) => {
    res.status(404);
    res.json({
        message: 'Resource not found',
    });
});

app.use((error, req, res, next) => {
    const {
        message = 'Server Error'
    } = error;
    res.status(500);
    res.json({
        message,
    });
});

module.exports = app;
