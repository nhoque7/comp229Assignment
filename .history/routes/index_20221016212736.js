var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('home',
   { title: 'my Homepage'});
});
/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('home',
   { title: 'my Homepage'});
});
/*Get About me */
router.get('/about', function(req, res, next) {
  res.render('about_me',
   { title: 'the About me page'});
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
  res.render('contact',
   { title: 'my Contact page'});
});

module.exports = router;
