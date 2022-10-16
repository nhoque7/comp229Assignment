var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
   { title: 'Homepage'});
});
router.get('/home', function(req, res, next) {
  res.render('index',
   { title: 'Homepage'});
});
/*Get About me */
router.get('/about', function(req, res, next) {
  res.render('index',
   { title: 'About me'});
});
/* Get Project page */
router.get('/projects', function(req, res, next) {
  res.render('index',
   { title: 'my Projects page'});
});
/* Get Services page */
router.get('/services', function(req, res, next) {
  res.render('index',
   { title: 'my Services page'});
});
/* Get Contact page */
router.get('/contact', function(req, res, next) {
  res.render('index',
   { title: 'Contact page'});
});

module.exports = router;
