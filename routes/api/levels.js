const router = require('express').Router();
const levelsController = require('../../controllers/levelsController');

// Matches with "/api/user"
router.route('/addition').post(levelsController.addition);
// router.route('/subtraction').post(levelsController.subtraction);
// router.route('/multiplication').post(levelsController.multiplication);
// router.route('/division').post(levelsController.division);

module.exports = router;