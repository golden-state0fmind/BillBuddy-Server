//imports
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.login.index);
router.get('/:id', ctrl.login.show);
router.post('/', ctrl.login.create);
router.put('/:id', ctrl.login.update);
router.delete('/:id', ctrl.login.destroy);

//exports
module.exports = router;