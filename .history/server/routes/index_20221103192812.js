let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/*Get About me */
router.get('/about', indexController.displayAboutPage);

/* Get Project page */
router.get('/projects', indexController.displayProjectPage);

/* Get Services page */
router.get('/services', indexController.displayServicePage);

/* Get Contact page */
router.get('/contact', indexController.displayContactPage);

module.exports = router;
