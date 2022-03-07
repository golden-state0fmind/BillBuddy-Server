//imports
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.individualticket.index);
router.get('/:id', ctrl.individualticket.show);
router.post('/', ctrl.individualticket.create);
router.put('/:id', ctrl.individualticket.update);
router.delete('/:id', ctrl.individualticket.destroy);

//exports
module.exports = router;