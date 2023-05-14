const router = require('express').Router();

const AuthController = require('../controller/AuthController');

router.post('/signup', AuthController.signup);
router.post('/signin', AuthController.signin);

module.exports = router;
