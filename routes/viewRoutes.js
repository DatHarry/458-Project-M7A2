const express = require('express');
const viewsController = require('../controllers/viewsController');
const router = express.Router();

// render html
router.get('/', viewsController.home);
router.get('/Course', viewsController.getCourse);
router.get('/LoanList', viewsController.getLoan);
router.get('/login', viewsController.getLoginForm);
router.get('/signin', viewsController.getSignUpForm);
//router.get('/loginUser', viewsController.getLoginUser);


module.exports = router;
