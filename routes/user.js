//imports
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.user.index);
router.get('/:id', ctrl.user.show);
router.post('/', ctrl.user.create);
router.put('/:id', ctrl.user.update);
router.delete('/:id', ctrl.user.destroy);

//exports
module.exports = router;