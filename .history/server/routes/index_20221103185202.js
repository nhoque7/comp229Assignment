let express = require('express');
let router = express.Router();

let indexController = require('../controllers/index');

/* GET home page. */
router.get('/', indexController.displayHomePage);

/* GET home page. */
router.get('/home', indexController.displayHomePage);

/*Get About me */
router.get('/about', function(req, res, next) {
  res.render('about',
   { title: 'the About me page'});
});
/* Get Project page */
router.get('/projects', function(req, res, next) {
  res.render('projects',
   { title: 'my Projects page'});
});
/* Get Services page */
router.get('/services', function(req, res, next) {
  res.render('services',
   { title: 'my Services page'});
});
/* Get Contact page */
router.get('/contact', function(req, res, next) {
  res.render('contact',
   { title: 'my Contact page'});
});

module.exports = router;
