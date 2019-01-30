const router = require('express').Router();
const tasks = require('./tasks/routes');
const user = require('./user/routes');

router.use('/tasks', tasks);
router.use('/user', user);

module.exports = router;
