const router = require('express').Router();
const stacks = require('./stacks/routes');

router.use('/stacks', stacks);

module.exports = router;
