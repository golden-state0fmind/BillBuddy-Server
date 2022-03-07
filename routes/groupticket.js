//imports
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.groupticket.index);
router.get('/:id', ctrl.groupticket.show);
router.post('/', ctrl.groupticket.create);
router.put('/:id', ctrl.groupticket.update);
router.delete('/:id', ctrl.groupticket.destroy);

//exports
module.exports = router;