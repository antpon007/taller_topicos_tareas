const router = require('express').Router();
const tasks = require('./tasks/routes');

router.use('/', tasks);

module.exports = router;
