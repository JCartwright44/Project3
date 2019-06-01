
const router = require('express').Router();
const usersController = require('../../controllers/usersController');
const isAuthenticated = require('../../controllers/authentication')

// Matches with "/api/users"
router.route('/login')
.post(usersController.login);
// router.route('/validate').post(usersController.validateToken);
router.route('/signup').post(usersController.signup);

router.route('/update')
    .post(usersController.update);

module.exports = router;