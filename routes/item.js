//imports
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.item.index);
router.get('/:id', ctrl.item.show);
router.post('/', ctrl.item.create);
router.put('/:id', ctrl.item.update);
router.delete('/:id', ctrl.item.destroy);

//exports
module.exports = router;