//imports
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.location.index);
router.get('/:id', ctrl.location.show);
router.post('/', ctrl.location.create);
router.put('/:id', ctrl.location.update);
router.delete('/:id', ctrl.location.destroy);

//exports
module.exports = router;