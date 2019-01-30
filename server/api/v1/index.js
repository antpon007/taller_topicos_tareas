const router = require('express').Router();
const tasks = require('./tasks/routes');
const user = require('./user/routes');

router.use('/api/tasks/', tasks);
router.use('/api/user/', user);

module.exports = router;
