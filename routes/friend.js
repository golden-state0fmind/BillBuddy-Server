//imports
const router = require('express').Router();
const ctrl = require('../controllers');

//routes
router.get('/', ctrl.friend.index);
router.get('/:id', ctrl.friend.show);
router.post('/', ctrl.friend.create);
router.put('/:id', ctrl.friend.update);
router.delete('/:id', ctrl.friend.destroy);

//exports
module.exports = router;