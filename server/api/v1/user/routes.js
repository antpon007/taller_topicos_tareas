const router = require('express').Router();

const controller = require('./controller');

router.param('id', controller.id);

router
  .route('/')
  .post(controller.signup)
  .get(controller.all);

router
  .route('/:id')
  .get(controller.read)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;
